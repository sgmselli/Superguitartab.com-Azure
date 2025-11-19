import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TabResponse } from "../../types/tab";
import { searchTabs } from "../../api/tabs";
import { Loading } from "../Loading";
import { LogoAndTextBlue } from "../Logo";

interface SearchSongRowProps {
    rank?: number
    link: string
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
                        <Search size={18} />
                        <input
                            type="text"
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
        <div className="flex items-center w-full h-[40px] bg-white hover:bg-gray-100 border-white border-1 transition-colors rounded-md cursor-pointer">
            <div className="flex-1 flex flex-inline gap-3 px-3 text-gray-500 text-sm">
                Seach a song...
            </div>
            <div className="h-full px-6 secondary-color-bg flex items-center justify-center surface-color rounded-tr-md rounded-br-md">
                <Search size={18} />
            </div>
        </div>
    )
}

const SearchSongRow: React.FC<SearchSongRowProps> = ({rank, link, song_name, album, artist}) => {
    return (
        <Link
            to={link}
            className="w-full"
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
                <SearchSongRow key={song.id} link={`/song/${song.id}`} song_name={song.song_name} album={song.album} artist={song.artist} />
            ))}
        </div>
    )
}

const DefaultSongList: React.FC = () => {

    const popular_songs = [
        { song: "Wonderwall", album: "(What's the Story) Morning Glory?", artist: "Oasis", link: "/song/2" },
        { song: "Wish You Were Here", album: "Wish You Were Here", artist: "Pink Floyd", link: "/song/4" },
        { song: "Knockin' on Heaven's Door", album: "Pat Garrett & Billy the Kid", artist: "Bob Dylan", link: "/song/26" },
        { song: "Fast Car", album: "Tracy Chapman", artist: "Tracy Chapman", link: "/song/1" },
        { song: "Smoke on the Water", album: "Machine Head", artist: "Deep Purple", link: "/song/5" },
        { song: "Stand by Me", album: "Don't Play That Song!", artist: "Ben E. King", link: "/song/6" },
        { song: "Blackbird", album: "The Beatles (White Album)", artist: "The Beatles", link: "/song/34" },
        { song: "Shallow", album: "A Star Is Born (Soundtrack)", artist: "Lady Gaga & Bradley Cooper", link: "/song/8" },
        { song: "Riptide", album: "Dream Your Life Away", artist: "Vance Joy", link: "/song/9" },
        { song: "Hey There Delilah", album: "All That We Needed", artist: "Plain White T’s", link: "/song/14" },
        { song: "Hotel California", album: "Hotel California", artist: "Eagles", link: "/song/11" },
        { song: "She's Electric", album: "(What's the Story) Morning Glory?", artist: "Oasis", link: "/song/22" },
        { song: "Seven Nation Army", album: "Elephant", artist: "The White Stripes", link: "/song/32" },
        { song: "Boulevard of Broken Dreams", album: "American Idiot", artist: "Green Day", link: "/song/484" },
        { song: "Yellow", album: "Parachutes", artist: "Coldplay", link: "/song/46" },
        { song: "Tears in Heaven", album: "Rush (Soundtrack)", artist: "Eric Clapton", link: "/song/6" },
        { song: "Road Trippin'", album: "Californication", artist: "Red Hot Chili Peppers", link: "/song/45" },
        { song: "Under the Bridge", album: "Blood Sugar Sex Magik", artist: "Red Hot Chili Peppers", link: "/song/3" },
        { song: "Wonder", album: "Wonder", artist: "Shawn Mendes", link: "/song/19" },
        { song: "Hallelujah", album: "Grace", artist: "Jeff Buckley", link: "/song/42" },
        { song: "Let It Be", album: "Let It Be", artist: "The Beatles", link: "/song/21" },
        { song: "Layla (Unplugged)", album: "Unplugged", artist: "Eric Clapton", link: "/song/22" },
        { song: "Viva La Vida", album: "Viva la Vida or Death and All His Friends", artist: "Coldplay", link: "/song/8" },
        { song: "Say You Won’t Let Go", album: "Back from the Edge", artist: "James Arthur", link: "/song/24" },
        { song: "Landslide", album: "Fleetwood Mac", artist: "Fleetwood Mac", link: "/song/21" }
    ]

    return (
         <div className=" w-full py-6 px-3 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 pl-6">
                Popular tabs
            </p>
            {popular_songs.map((item, idx) => (
                <SearchSongRow key={idx} rank={idx+1} link={item.link} song_name={item.song} album={item.album} artist={item.artist} />
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