import React, { useState } from 'react';


const Section = () => {
    return (
        <div className="space-y-3 lg:w-64">
        <div>
            <div className="uppercase tracking-wide text-sm md:text-base text-indigo-500 font-semibold">Toptal</div>
            <a href="#" className="block mt-1 sm:text-lg text-md leading-tight font-medium text-black hover:underline">Ssr Frontend Developer</a>
        </div>
        <div className="space-x-1">
            <span className="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
            WORLDWIDE
            </span>
            <span className="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
            69K - 80K
            </span>
        </div>
      </div>
    )
}

const Technologies = () => {
    return (
        <div className="hidden md:grid md:grid-cols-3 lg:w-auto">
            <span className="px-2 py-2 mx-1 text-md self-center text-center font-bold leading-none text-black-100 bg-transparent rounded-lg border-black border-2">
            HTML
            </span>
            <span className="px-2 py-2 mx-1 text-md self-center text-center font-bold leading-none text-black-100 bg-transparent rounded-lg border-black border-2">
            CSS
            </span>            
        </div>
    )
}


const AgeOfOffer = () => {
    return (
        <div className="self-center px-2">
        8h
        </div>
    )
}

const Button = () => {
    return (
        <div className="self-center hidden lg:block px-10">
            <button className="bg-red-500 text-white font-bold py-2 px-10 rounded">
            Postular
            </button> 
        </div>
    )
}



const Job = () => {

    const [view, setView] = useState("hidden");

    const updateView = () => {
        const change = (view === "hidden" ? "block" : "hidden");
        setView(change);
    }

    

    return (
        <div className="collapsible select-none max-w-lg lg:max-w-screen-lg mx-auto md:max-w-2xl p-8">
            <div onClick={updateView} className="max-w-lg hover:bg-gray-100 cursor-pointer lg:max-w-screen-lg flex bg justify-between rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 space-x-5">
                <Section/>
                <Technologies />
                <AgeOfOffer />
                <Button />
            </div>
            <div className={`p-4 border rounded-lg ${view}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}


export default Job;