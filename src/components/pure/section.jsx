import React from 'react';

const Section = () => {

    return (
        <div className="space-y-3 lg:w-64">
            <div>
                {/* Cambiar datos con los recibidos de la API call */}
                <div className="uppercase tracking-wide text-sm md:text-base text-indigo-500 font-semibold">Toptal</div>
                <a href="#" className="block mt-1 sm:text-lg text-md leading-tight font-medium text-black hover:underline">Ssr Frontend Developer</a>
            </div>
            <div className="space-x-1">
                <span className="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
                España
                </span>
                <span className="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
                14K - 20K
                </span>
            </div>
       </div>
    )
}

export default Section;