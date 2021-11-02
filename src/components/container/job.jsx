import React, { useState } from 'react';
import Image from '../pure/company_logo';
import Company from '../pure/company_name'
import Position from '../pure/job_position';
import Badges from '../pure/badges';
import Technologies from '../pure/job_technologies';
import AgeOfOffer from '../pure/age_of_offer';
import Button from '../pure/apply_button';

/**
 * Job
 * @returns Container of components with information of the job
 */
const Job = ({offer}) => {
   
    const { urlImagen, nombre, empresa, salarioMaximo, salarioMinimo, tecnologias, fechaPublicacion, localidad } = offer || {};
    
    return (
        <div className="collapsible select-none max-w-xl lg:max-w-screen-xl mx-auto md:max-w-3xl p-5">
            <div className="max-w-lg hover:bg-gray-100 cursor-pointer lg:max-w-screen-lg flex bg justify-between rounded-xl border overflow-hidden md:max-w-2xl p-5">

                <Image image={urlImagen.length > 0 ? urlImagen : "https://remoteok.io/assets/img/jobs/376af38d16bf762263aef1f70ed885ef1633445669.png?1633445670"}/>
                <div className="space-y-1 lg:w-64">
                    <Company company={empresa} />
                    <Position position={nombre} />
                    <Badges 
                        location={localidad}
                        minSalary={salarioMinimo}
                        maxSalary={salarioMaximo}
                    />
                </div>

                <Technologies technologies={tecnologias}/>
                <AgeOfOffer date={fechaPublicacion} />
                <Button />

            </div>

        </div>
    )
}

export default Job;