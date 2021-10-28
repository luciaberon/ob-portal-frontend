import React, { useState } from 'react';
import Section from '../pure/section';
import Button from '../pure/apply_button'
import AgeOfOffer from '../pure/age_section';
import Technologies from '../pure/technologies';
import JobDetails from './job_details';



const Job = (job) => {

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
                <JobDetails />
        </div>

        </div>
    )
}


export default Job;