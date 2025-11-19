import React, { useEffect, useState } from 'react'

import { getTabs } from '../../api/tabs';
import { type TabResponse } from '../../types/tab';
import { Loading } from '../../components/Loading';
import { SongTable } from '../../components/SongTable/SongTable';
import { Logo } from '../../components/Logo';

const Browse: React.FC = () => {

    const [tabs, setTabs] = useState<TabResponse[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);

    const limitIncrementValue: number = 15;
    const [limit, setLimit] = useState<number>(limitIncrementValue);

    useEffect(() => {
        const handleFetch = async () => {
            setLoading(true);
            try {
                const data = await getTabs(limit);
                setTabs(data);
            } catch (err: any) {
                // setError("");
            } finally {
                setLoading(false);
            }
        }
        handleFetch();
    }, [limit])

    const nextPage = () => {
        setLimit(limit+limitIncrementValue)
    }

    return (
        <div>
            <div className="w-full h-[300px] sm:h-[280px] mt-5">
                <Banner />
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

const Banner: React.FC = () => {

    return (
        <div
            className={`w-full h-[300px] sm:h-[280px] flex flex-row items-center rounded-xl p-12 sm:p-20 gap-6 primary-color-bg surface-color`}
        >
            <div
                className={`flex-4 flex flex-col gap-6 sm:gap-12 `}
            >
                <div className='flex flex-col justify-center gap-4 sm:gap-6'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight'>Browse all guitar songs</h1>
                    <h4 className='text-lg sm:text-lg lg:text-xl font-normal'>Browse our selection of guitar tabs. </h4>
                </div>
            </div>
            <div
                className='flex-2 hidden md:flex justify-center h-full'
            >
                <Logo />
            </div>
        </div>
    )
}


export default Browse;