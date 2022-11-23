import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function OcorrenciaDetalhe(){
    const [ocorrencias, setOcorrencias] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

  useEffect(() =>{
    setLoading(false);
    async function getOcorrencias() {
    try { const response = await axios.get(`https://ironrest.cyclic.app/projetoOcorrencias/${id}`);
    setOcorrencias(response.data);
      
    } catch (error) {
      
    }
    setLoading(true);

  } getOcorrencias();
},[])

    return (
        <>


        </>
    )
}

export default OcorrenciaDetalhe