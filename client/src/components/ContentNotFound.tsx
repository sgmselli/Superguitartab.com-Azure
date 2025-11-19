import React from "react";
import { LogoAndTextBlue } from "./Logo";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ContentNotFound: React.FC = () => {

  return (
    <div className="flex flex-col items-center w-full mt-20">
      <div className="w-[300px]">
        <LogoAndTextBlue />
      </div>
      <h1 className="text-3xl primary-color font-bold mt-10">
        Sorry, we couldn't find what you were looking for.
      </h1>
      <div className="mt-10">
        <Link to="/"><button className='btn btn-md sm:btn-xl rounded-lg primary-color-bg surface-color'>Back to home <span className='ml-1'><MoveRight size={20} /></span></button></Link>
      </div>

    </div>
  );
};