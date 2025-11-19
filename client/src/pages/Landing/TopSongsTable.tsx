import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { formatTitle } from "../../utils/wordFormatting"

interface SongTableRowProps {
    song: string
    artist: string
    album: string
    style: string
    genre: string
    level: string
    link: string
}

interface LevelBadgeProps {
    level: string
}

export const TopSongsTable: React.FC = () => {

   const songs: SongTableRowProps[] = [
        {
            song: "Wonderwall",
            artist: "Oasis",
            album: "(What's the Story) Morning Glory?",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/2",
        },
        {
            song: "Wish You Were Here",
            artist: "Pink Floyd",
            album: "Wish You Were Here",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/4",
        },
        {
            song: "Knockin’ on Heaven’s Door",
            artist: "Bob Dylan",
            album: "Pat Garrett & Billy the Kid",
            genre: "folk",
            style: "Strumming",
            level: "Beginner",
            link: "/song/26",
        },
        {
            song: "Fast Car",
            artist: "Tracy Chapman",
            album: "Tracy Chapman",
            genre: "folk",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/1",
        },
        {
            song: "Smoke on the Water",
            artist: "Deep Purple",
            album: "Machine Head",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/5",
        },
        {
            song: "Stand by Me",
            artist: "Ben E. King",
            album: "Don't Play That Song!",
            genre: "folk",
            style: "Strumming",
            level: "Beginner",
            link: "/song/6",
        },
        {
            song: "Blackbird",
            artist: "The Beatles",
            album: "The Beatles (White Album)",
            genre: "folk",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/34",
        },
        {
            song: "Shallow",
            artist: "Lady Gaga & Bradley Cooper",
            album: "A Star Is Born (Soundtrack)",
            genre: "pop",
            style: "Strumming",
            level: "Beginner",
            link: "/song/8",
        },
        {
            song: "Riptide",
            artist: "Vance Joy",
            album: "Dream Your Life Away",
            genre: "indie",
            style: "Strumming",
            level: "Beginner",
            link: "/song/9",
        },
        {
            song: "Hey There Delilah",
            artist: "Plain White T’s",
            album: "All That We Needed",
            genre: "indie",
            style: "Finger picking",
            level: "Beginner",
            link: "/song/14",
        },
        {
            song: "Hotel California",
            artist: "Eagles",
            album: "Hotel California",
            genre: "rock",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/11",
        },
        {
            song: "She's Electric",
            artist: "Oasis",
            album: "(What's the Story) Morning Glory?",
            genre: "rock",
            style: "Strumming",
            level: "Intermediate",
            link: "/song/22",
        },
        {
            song: "Seven Nation Army",
            artist: "The White Stripes",
            album: "Elephant",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/32",
        },
        {
            song: "Boulevard of Broken Dreams",
            artist: "Green Day",
            album: "American Idiot",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/484",
        },
        {
            song: "Yellow",
            artist: "Coldplay",
            album: "Parachutes",
            genre: "indie",
            style: "Strumming",
            level: "Beginner",
            link: "/song/46",
        },
        {
            song: "Tears in Heaven",
            artist: "Eric Clapton",
            album: "Rush (Soundtrack)",
            genre: "folk",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/6",
        },
        {
            song: "Road Trippin'",
            artist: "Red Hot Chili Peppers",
            album: "Californication",
            genre: "rock",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/45",
        },
        {
            song: "Under the Bridge",
            artist: "Red Hot Chili Peppers",
            album: "Blood Sugar Sex Magik",
            genre: "rock",
            style: "Finger picking",
            level: "Advanced",
            link: "/song/3",
        },
        {
            song: "Wonder",
            artist: "Shawn Mendes",
            album: "Wonder",
            genre: "pop",
            style: "Strumming",
            level: "Beginner",
            link: "/song/19",
        },
        {
            song: "Hallelujah",
            artist: "Jeff Buckley",
            album: "Grace",
            genre: "folk",
            style: "Finger picking",
            level: "Beginner",
            link: "/song/42",
        },
        {
            song: "Let It Be",
            artist: "The Beatles",
            album: "Let It Be",
            genre: "rock",
            style: "Strumming",
            level: "Beginner",
            link: "/song/21",
        },
        {
            song: "Layla (Unplugged)",
            artist: "Eric Clapton",
            album: "Unplugged",
            genre: "rock",
            style: "Finger picking",
            level: "Advanced",
            link: "/song/22",
        },
        {
            song: "Viva La Vida",
            artist: "Coldplay",
            album: "Viva la Vida or Death and All His Friends",
            genre: "indie",
            style: "Strumming",
            level: "Beginner",
            link: "/song/8",
        },
        {
            song: "Say You Won’t Let Go",
            artist: "James Arthur",
            album: "Back from the Edge",
            genre: "indie",
            style: "Strumming",
            level: "Beginner",
            link: "/song/24",
        },
        {
            song: "Landslide",
            artist: "Fleetwood Mac",
            album: "Fleetwood Mac",
            genre: "folk",
            style: "Finger picking",
            level: "Intermediate",
            link: "/song/21",
        },
    ];

    return (
        <div className="overflow-x-auto rounded-box border-2 border-base-content/6 bg-base-100">
            <table className="table [&_td]:py-5">
                <tbody>
                    {songs.map((song, idx) => {
                        return <SongTableRow key={idx} song={song.song} artist={song.artist} album={song.album} style={song.style} genre={song.genre} level={song.level} link={song.link} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

const LevelBadge: React.FC<LevelBadgeProps> = ({level}) => {
    switch (level) {
        case "Beginner":
            return <div className="badge badge-soft badge-success">Beginner</div>
        case "Intermediate":
            return <div className="badge badge-soft badge-warning">Intermediate</div>
        case "Advanced":
            return <div className="badge badge-soft badge-error">Advanced</div>
        default:
            return <div className="badge badge-ghost">Unknown</div>
    }
}

const SongTableRow: React.FC<SongTableRowProps> = ({song, artist, album, genre, style, level, link}) => {
    return (
        <tr className="text-color">
            <td className="w-60"><div className="flex flex-col gap-1"><h4 className="text-md text-color font-semibold">{song}</h4><h5 className="text-sm text-gray-500">{album}</h5></div></td>
            <td className="w-50 font-medium">{artist ? artist : "Traditional"}</td>
            <td className="w-35">{formatTitle(genre)}</td>
            <td className="w-35">{formatTitle(style)}</td>
            <td className="w-40">{<LevelBadge level={level} />}</td>
            <td className="w-50"><Link to={link}><button className='btn w-[160px] secondary-color-bg border-1 border-yellow-500 surface-color'>Go to product <ChevronRight size={18} /></button></Link></td>
        </tr>
    )
}