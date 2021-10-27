import React from 'react';

const Job = () => {
    return (            
        <div class="max-w-lg lg:max-w-screen-lg flex bg justify-between mx-auto bg-red rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 space-x-5">
            <div>
            <div class="space-y-3 lg:w-64">
            <div>
                <div class="uppercase tracking-wide text-sm md:text-base text-indigo-500 font-semibold">Toptal</div>
                <a href="#" class="block mt-1 sm:text-lg text-md leading-tight font-medium text-black hover:underline">Ssr Frontend Developer</a>
            </div>
            <div class="space-x-1">
                <span class="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
                WORLDWIDE
                </span>
                <span class="items-center inline-block sm:text-sm text-xs justify-center px-3 py-2 sm:py-1.5 font-bold leading-none text-white bg-blue-500 rounded-full">
                69K - 80K
                </span>
            </div>
            </div>
            </div>

            <div class="hidden md:grid md:grid-cols-3 lg:w-auto">
                <span class="px-3 py-2 mx-1 text-md self-center text-center font-bold leading-none text-black-100 bg-transparent rounded-lg border-black border-2">
                HTML
                </span>
                <span class="px-3 py-2 mx-1 text-md self-center text-center font-bold leading-none text-black-100 bg-transparent rounded-lg border-black border-2">
                CSS
                </span>            
            </div>

            <div class="self-center px-2">
                8h
            </div>

            <div class="self-center hidden lg:block px-2">
                <button class="bg-red-500 text-white font-bold py-2 px-4 rounded">
                Postular
                </button> 
            </div>
        </div>
    );
}

export default Job;
