import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getTabsByGenre } from '../../api/tabs';
import { ContentNotFound } from '../../components/ContentNotFound';
import { formatTitle } from '../../utils/wordFormatting';
import { type TabResponse } from '../../types/tab';
import { Loading } from '../../components/Loading';
import { SongTable } from '../../components/SongTable/SongTable';

const Genre: React.FC = () => {

    const { genre } = useParams<{ genre: string }>();

    const [tabs, setTabs] = useState<TabResponse[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);

    const limitIncrementValue: number = 15;
    const [limit, setLimit] = useState<number>(limitIncrementValue);

    useEffect(() => {
        const handleFetch = async () => {
            if (!genre) return;
            setLoading(true);
            try {
                const data = await getTabsByGenre(genre, limit);
                setTabs(data);
            } catch (err: any) {
                // setError("");
            } finally {
                setLoading(false);
            }
        }
        handleFetch();
    }, [genre, limit])

    const nextPage = () => {
        setLimit(limit+limitIncrementValue)
    }

    if (!genre) {
        return <ContentNotFound />
    }

    return (
        <div>
            <div className="w-full h-[300px] sm:h-[280px] mt-5">
                <GenreBanner genre={genre} loading={loading} />
            </div>
            <div className='mt-10'>
                {
                    loading ? (
                        <div
                            className="h-[500px] w-full flex justify-center items-center"
                        >
                            <Loading />
                        </div>
                    )

                    :
                    <>
                        <SongTable songs={tabs} />
                        {
                            tabs.length >= limit && (
                                <div className="flex justify-center items-center mt-5">
                                    <button
                                        className="btn btn-lg primary-color-bg surface-color disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
                                        onClick={nextPage}
                                    >
                                        Load more
                                    </button>
                                </div>
                            )
                        }
                    </>
                }
            </div>
        </div>        
    )
}

interface GenreBannerProps {
    genre: string;
    loading: boolean;
}

const GenreBanner: React.FC<GenreBannerProps> = ({genre, loading}) => {

    const getTextColor = (genre: string): string => {
        switch (genre) {
            case ("classical"):
                return "folk-genre-color"
            case ("country"):
                return "surface-color"
            case ("folk"):
                return "folk-genre-color"
            case ("indie"):
                return "surface-color"
            case ("metal"):
                return "primary-color"
            case ("pop"):
                return "surface-color"
            case ("rock"):
                return "surface-color"
            default:
                return ""
        }
    }

    const getBackgroundColor = (genre: string): string => {
        switch (genre) {
            case ("classical"):
                return "folk-genre-color-bg"
            case ("country"):
                return "primary-color-bg"
            case ("folk"):
                return "folk-genre-color-bg"
            case ("indie"):
                return "pop-genre-color-bg"
            case ("pop"):
                return "pop-genre-color-bg"
            case ("metal"):
                return "bg-gray-100"
            case ("rock"):
                return "darker-primary-color-bg"
            default:
                return "darker-primary-color-bg"
        }
    }

    const formattedTitle = formatTitle(genre);
    const textColor = getTextColor(genre);
    const backgroundColor = getBackgroundColor(genre);

    if (loading) {
        return (
            <div
                className={`skeleton w-full h-[300px] sm:h-[280px]`}
            ></div>
        )
    }

    return (
        <div
            className={`w-full h-[300px] sm:h-[280px] flex flex-row items-center ${backgroundColor} rounded-xl p-12 sm:p-20 gap-6`}
        >
            <div
                className={`flex-4 flex flex-col gap-6 sm:gap-12 ${textColor}`}
            >
                <div className='flex flex-col justify-center gap-4 sm:gap-6'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight'>{formattedTitle} guitar songs</h1>
                    <h4 className='text-lg sm:text-lg lg:text-xl font-normal'>Browse our selection of <span className='underline'>{formattedTitle} guitar tabs</span>. </h4>
                </div>
            </div>
            <div
                className='flex-2 hidden md:flex justify-center'
            >
                <img className="max-h-[220px] w-full object-contain" src={`/images/${genre}-banner.png`} alt={`${formattedTitle} banner image`} />
            </div>
        </div>
    )
}


export default Genre;