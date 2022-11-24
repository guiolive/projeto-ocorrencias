import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function CardConteiner() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(false);
    async function getOcorrencias() {
    try { const response = await axios.get('https://ironrest.cyclic.app/projetoOcorrencias');
    setOcorrencias(response.data);
      
    } catch (error) {
      
    }
    setLoading(true);

  } getOcorrencias();
},[])


  return (
    <>
    {
      loading&& (ocorrencias.map((element) => {
        return (
          <Card style={{ width: 'rem' }}>
      
      <Card.Body className='cards' >
        <Card.Title>Número Ocorrência: {element.numeroOcorrencia}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Vigilante: {element.nome}</Card.Subtitle>
        <Card.Text>Status Ocorrência: {element.status}</Card.Text>
        <Card.Text>Contato: {element.email}</Card.Text>
        
        <Link to={`/ocorrenciaDetalhe/${element._id}`}>
        <Card.Link className='detalhes'>Detalhes </Card.Link>
        </Link>
      
      </Card.Body>
    </Card>
          
        )
      }
        )

   ) }
    </>
  );
}

export default CardConteiner;