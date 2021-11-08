import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import { retrieveOfferById } from '../../features/offers/offersSlice';

// EXPLICAR ******************
const JobDetails = ({id}) => {

    const history = useHistory();
    const offer = useSelector(state => state.offers.offer)
    const loading = useSelector(state => state.offers.isLoading)
    const dispatch = useDispatch()
    console.log(offer)
    useEffect(() => {
        dispatch(retrieveOfferById(id));
    }, []);

    const goBack = () => {
        history.push('/ofertas')
        history.go(0)
    }

    return (
        <div>
            <button  onClick={goBack} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Volver
            </button>
            { loading ? 

            <ReactLoading className="spinner" type={"spin"} color={"blue"} height={50} width={50} />
                
            :

            <div className="mx-auto appear mt-10 details py-7 px-6 shadow-2xl border rounded-sm md:w-11/12 w-full space-y-8">

                <h1 className="mb-5 title text-2xl font-bold">{offer.empresa} está buscando un {offer.nombre} </h1>

                <h3 className="text-xl title font-bold">Empresa:</h3>
                {offer.empresa}

                <div>
                    <h3 className="text-xl title font-bold">Tecnologías:</h3>
                    {   offer.tecnologias &&

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
                ${offer.salarioMinimo} - ${offer.salarioMaximo}
            </div>
        }
             
        </div>
    );
}

export default JobDetails;
