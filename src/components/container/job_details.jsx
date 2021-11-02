import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveOfferById } from '../../features/offers/offersSlice';

const JobDetails = ({id}) => {

    const [offer, setOffer] = useState({});
    const [loading, isLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(async() => {
        const i = await dispatch(retrieveOfferById(id));
        setOffer(i.payload)        
        isLoading(false)
    }, []);



    return (
        <div>
            { loading ||

            <div className="mx-auto mt-10 details py-7 w-11/12 space-y-8">

                <h1 className="mb-5 title text-2xl font-bold">{offer.empresa} está buscando un {offer.nombre} </h1>

                <h3 className="text-xl title font-bold">Empresa:</h3>
                {offer.empresa}

                <div>
                    <h3 className="text-xl title font-bold">Tecnologías:</h3>
                    {
                        offer.tecnologias.map((item) => 
                            <li key={item.id}>{item.nombre}</li>
                        )
                    }
                </div>
                <h3 className="text-xl title my-2 font-bold">Años de experiencia:</h3>
                {offer.anyosExperiencia}

                <h3 className="text-xl title font-bold">Tipo de contrato</h3>
                {offer.tipoContrato}

                <h3 className="text-xl title font-bold">Modalidad:</h3>
                {offer.modalidad}

                <h3 className="text-xl title font-bold">Localidad: </h3>
                {offer.localidad}

                <h3 className="text-xl title font-bold">Vacantes: </h3>
                {offer.numeroVacantes}

                <h3 className="text-xl title font-bold">Rango Salarial: </h3>
                {offer.salarioMinimo} - {offer.salarioMaximo}
            </div>
        }
             
        </div>
    );
}

export default JobDetails;
