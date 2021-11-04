import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { retrieveOfferById } from '../../features/offers/offersSlice';

// EXPLICAR ******************
const JobDetails = ({id}) => {

    const [offer, setOffer] = useState({});
    const [loading, isLoading] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch()
    useEffect(async() => {
        const data = await dispatch(retrieveOfferById(id));
        setOffer(data.payload) 
        isLoading(false)
    }, []);

    return (
        <div>
            <span className="text-2xl ml-52 font-bold text-blue-500" onClick={() => history.push('/ofertas')}>ATRÁS</span>
            { Object.keys(offer).length !== 0 &&

            <div className="mx-auto appear mt-10 details py-7 px-6 shadow-2xl border rounded-sm w-11/12 space-y-8">

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
                ${offer.salarioMinimo} - ${offer.salarioMaximo}
            </div>
        }
             
        </div>
    );
}

export default JobDetails;
