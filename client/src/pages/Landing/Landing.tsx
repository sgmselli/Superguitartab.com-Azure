import React from 'react'
import { MoveRight, StarIcon } from 'lucide-react'
import { TopSongsTable } from './TopSongsTable'
import { Link } from 'react-router-dom'

const Landing: React.FC = () => {

    return (
        <div
        >
            <div className="mt-5">
                <LandingBanner />
            </div>
            <div className="mt-8">
                <LandingTopSongs />
            </div>
            <div className="mt-30">
                <Review />
            </div>
        </div>
    )

}

const LandingBanner: React.FC = () => {

    return (
        <div
            className="w-full h-[350px] sm:h-[400px] flex flex-row items-center bg-gray-100 rounded-xl p-8 sm:p-20 gap-6"
        >
            <div
                className='flex-4 flex flex-col gap-6 sm:gap-12 primary-color'
            >
                <div className='flex flex-col gap-4 sm:gap-6'>
                    <h1 className='text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight'>superguitartab.com</h1>
                    <h4 className='text-md sm:text-lg lg:text-xl font-normal'><span className='underline'>superguitartab.com</span> guarantees high quality, hand-crafted, downloadable guitar music sheets at the click of a button.</h4>
                </div>
                <div>
                    <Link to="/browse"><button className='btn btn-md sm:btn-lg rounded-lg primary-color-bg text-gray-100'>Browse songs <span className='ml-1'><MoveRight size={20} /></span></button></Link>
                </div>
            </div>
            <div
                className='hidden flex-2 md:flex justify-center'
            >
                <img className="w-full object-contain" src="/images/landing_banner_guitar.png" alt="Logo"/>
            </div>
        </div>
    )
}

const LandingTopSongs: React.FC = () => {
    return (
        <div className='flex flex-col'>
            <h5 className='text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-4'>Popular tabs</h5>
            <TopSongsTable />
            <div className='flex justify-center mt-8'>
                <Link to="/browse"><button className='btn btn-md sm:btn-lg rounded-lg primary-color-bg surface-color'>Browse more songs <span className='ml-1'><MoveRight size={20} /></span></button></Link>
            </div>
        </div>
    )
}

const Review: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5 text-center max-w-2xl mx-auto">
      <div className="flex justify-center gap-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>

      <p className="text-sm sm:text-md leading-relaxed text-gray-700">
        I open up <span className="font-semibold">superguitartab.com</span>, save
        the songs I want to learn once, and they’re all there when I pick up my guitar. {" "}
        <span className="bg-yellow-100 px-1 font-medium">
          I don’t have to think — just play.
        </span>
      </p>

      <div className="flex items-center gap-3 mt-2">
        <div className="avatar">
          <div className="w-10 sm:w-12 rounded-full border-1 border-gray-300">
            <img
              src="/images/review-avatar.jpg"
              alt="Reviewer avatar"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-left">
          <h3 className="text-sm md:text-md font-semibold text-gray-900">Matt Sellings</h3>
          <p className="text-xs text-gray-500">
            Playing guitar for <span className="font-semibold">8 months</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;