import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { getTabsByStyle } from '../../api/tabs';
import { ContentNotFound } from '../../components/ContentNotFound';
import { formatTitle } from '../../utils/wordFormatting';
import { type TabResponse } from '../../types/tab';
import { Loading } from '../../components/Loading';
import { SongTable } from '../../components/SongTable/SongTable';
import usePageTitle from '../../hooks/usePageTitle';

const Style: React.FC = () => {

    const { style } = useParams<{ style: string }>();

    const [tabs, setTabs] = useState<TabResponse[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);

    const limitIncrementValue: number = 15;
    const [limit, setLimit] = useState<number>(limitIncrementValue);

    usePageTitle(`${formatTitle(style)} style music tabular sheets` || "Loading...")

    useEffect(() => {
        const handleFetch = async () => {
            if (!style) return;
            setLoading(true);
            try {
                const data = await getTabsByStyle(style, limit);
                setTabs(data);
            } catch (err: any) {
                // setError("");
            } finally {
                setLoading(false);
            }
        }
        handleFetch();
    }, [style, limit])

    const loadMore = () => {
        setLimit(limit+limitIncrementValue)
    }

    if (!style) {
        return <ContentNotFound />
    }

    return (
        <div>
            <div className="w-full h-[300px] sm:h-[280px] mt-5">
                <StyleBanner style={style} loading={loading} />
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
                                        onClick={loadMore}
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

interface StyleBannerProps {
    style: string;
    loading: boolean;
}

const StyleBanner: React.FC<StyleBannerProps> = ({style, loading}) => {

    const getTextColor = (style: string): string => {
        switch (style) {
            case ("finger-picking"):
                return "folk-genre-color"
            case ("strumming"):
                return "primary-color"
            case ("electric"):
                return "surface-color"
            case ("bass"):
                return "surface-color"
            default:
                return ""
        }
    }

    const getBackgroundColor = (style: string): string => {
        switch (style) {
            case ("finger-picking"):
                return "folk-genre-color-bg"
            case ("strumming"):
                return "bg-gray-100"
            case ("electric"):
                return "primary-color-bg "
            case ("bass"):
                return "pop-genre-color-bg"
            default:
                return "darker-primary-color-bg"
        }
    }

    const formattedTitle = formatTitle(style);
    const textColor = getTextColor(style);
    const backgroundColor = getBackgroundColor(style);

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
                <img className="max-h-[220px] w-full object-contain" src={`/images/${style}-banner.png`} alt={`${formattedTitle} banner image`} />
            </div>
        </div>
    )
}


export default Style;