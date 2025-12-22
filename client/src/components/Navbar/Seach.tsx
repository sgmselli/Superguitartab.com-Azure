import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TabProps, TabResponse } from "../../types/tab";
import { searchTabs } from "../../api/tabs";
import { Loading } from "../Loading";
import { LogoAndTextBlue } from "../Logo";
import { popularSongList } from "../../constants/songList";

interface SearchSongRowProps {
    id: number
    rank?: number
    song_name: string
    album: string
    artist: string
}

interface SongListProps {
    songs: TabResponse[]
}

export const SearchBarModal: React.FC = () => {

    const [query, setQuery] = useState<string>("");
    const [tabs, setTabs] = useState<TabResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!query) {
            setTabs([]);
            return;
        }

        const delay = setTimeout(async () => {
            try{
                const data = await searchTabs(query);
                setTabs(data);
            } catch {
                
            } finally {
                setLoading(false);
            }
        }, 500); // debounce delay

        setLoading(true);
        return () => clearTimeout(delay);

    }, [query])

    return (
        <>
            <div 
                tabIndex={0} 
                className="max-w-lg w-full z-10"
                onClick={() => {
                    const modal = document.getElementById('search_bar_modal') as HTMLDialogElement | null;
                    if (modal) modal.showModal();
                }}
            >
                    <SearchBarButton />
            </div>
            <dialog id="search_bar_modal" className="modal modal-middle">
                <div className="modal-box bg-base-100 text-base-content max-w-2xl p-0 overflow-hidden rounded-xl">
                    <div className="border-b border-base-300 p-4 flex items-center gap-3">
                        <Search size={18} aria-label="Search icon" />
                        <input
                            type="text"
                            aria-label="Search input"
                            placeholder="Type to search..."
                            className="flex-1 bg-transparent outline-none text-base placeholder-gray-400"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <form method="dialog" className="modal-backdrop text-color z-50">
                            <button><X /></button>
                        </form>
                    </div>
                    <div className="h-[600px] w-full overflow-y-auto">
                        {
                            query == "" ? (
                               <DefaultSongList />
                            ) : loading ?
                                <div className="h-full w-full flex justify-center items-center">
                                    <Loading />
                                </div>
                            : tabs.length > 0 ?
                                <SongList songs={tabs} />
                            :
                                <NoSongsFound />
                        }   
                    </div>
                </div>
            </dialog>
        </>
    )
}

const SearchBarButton: React.FC = () => {
    return (
        <button aria-label="Open search" className="flex items-center w-full h-[40px] bg-white hover:bg-gray-100 border-white border-1 transition-colors rounded-md cursor-pointer">
            <div className="flex-1 flex flex-inline gap-3 px-3 text-gray-500 text-sm">
                Seach a song...
            </div>
            <div className="h-full px-6 secondary-color-bg flex items-center justify-center surface-color rounded-tr-md rounded-br-md">
                <Search size={18} />
            </div>
        </button>
    )
}

const SearchSongRow: React.FC<SearchSongRowProps> = ({rank, id, song_name, album, artist}) => {
    return (
        <Link
            to={`/song/${id}`}
            className="w-full"
            id={`song-row-${id}`}
            onClick={() => {
                const modal = document.getElementById('search_bar_modal') as HTMLDialogElement | null;
                if (modal) modal.close();
            }}
        >
            <div className="flex flex-row justify-between items-center space-y-3 px-6 py-2 rounded-lg hover:bg-base-200 transition">
                <div className="flex flex-row justify-center items-center gap-6">
                    {
                        rank && <p className="text-xs text-gray-600">#{rank}</p>
                    }
                    <div className="flex flex-col gap-1">
                        <p className="font-medium text-color text-sm">{song_name}</p>
                        <p className="text-gray-600 text-sm">{album}</p>
                    </div>
                </div>
                <p className="hidden sm:inline font-medium text-color text-sm">{artist}</p>
            </div>
        </Link>
    )
}

const SongList: React.FC<SongListProps> = ({songs}) => {

    return (
         <div className=" w-full py-6 px-3 space-y-2">
            {songs.map((song) => (
                <SearchSongRow key={song.id} id={song.id} song_name={song.song_name} album={song.album} artist={song.artist} />
            ))}
        </div>
    )
}

const DefaultSongList: React.FC = () => {

    const songs: TabProps[] = popularSongList

    return (
         <div className=" w-full py-6 px-3 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 pl-6">
                Popular tabs
            </p>
            {songs.map((song, idx) => (
                <SearchSongRow key={song.id} id={song.id} rank={idx+1} song_name={song.songName} album={song.album} artist={song.artist} />
            ))}
        </div>
    )
}

const NoSongsFound: React.FC = () => {
    return (
        <div className="h-full flex flex-col text-center justify-center items-center">
            <div className="w-[200px]">
                <LogoAndTextBlue />
            </div>
            <h1 className="text-xl primary-color font-bold mt-6">
                We couldn't find what you were looking for.
            </h1>
        </div>
    )
}