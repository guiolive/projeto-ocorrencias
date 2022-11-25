import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Divider, Input } from "@mui/material";


function OcorrenciaDetalhe(){
    const [ocorrencias, setOcorrencias] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const [form , setForm] = useState({
       
      name: '',
      campus: '',
      categoria: '',
      descricao: '',
      status: '',

  });


  const [showEdit, setShowEdit] = useState(false);
  const [reload, setReload] = useState(false);

  function handleChange(event) {
    setForm({
        ...form,
        [event.target.name]: event.target.value,

    })
}

async function handleSubmit(event) {
  console.log('')

  event.preventDefault();
  let clone = {...form};
  delete clone._id;
  await axios.put(`https://ironrest.cyclic.app/projetoOcorrencias/${id}`, clone);
  setShowEdit(false);
  setReload(!reload);
  
 

}
console.log(form);

  useEffect(() =>{
    setLoading(false);
    async function getOcorrencias() {
    try { const response = await axios.get(`https://ironrest.cyclic.app/projetoOcorrencias/${id}`);
    setOcorrencias(response.data);
    setForm(response.data);
    setLoading(true);   
    } catch (error) {
      
    }
    

  } getOcorrencias();
},[reload])

    async function handleDelete() {
        await axios.delete(`https://ironrest.cyclic.app/projetoOcorrencias/${id}`);
        navigate('/')
    }

    
    return (
      <>
        <div className="ocorrencia" >
      <h4>ID: {ocorrencias._id}</h4>
      <p>Categoria: {ocorrencias.categoria}</p>
      <p>Descrição: {ocorrencias.descricao}</p>
      <p>Vigilante: {ocorrencias.name}</p>
      <p>Campus: {ocorrencias.campus}</p>
      <p>Status: {ocorrencias.status}</p>
      <button onClick={handleDelete} >Deletar</button> 
      <button onClick={()=> setShowEdit(!showEdit)} >Editar</button>
        </div>
        <div>
        {
          loading === true && showEdit === true && (
            <form>
        <div className="form-group">
          <label>Vigilante </label>
          <Input
            name="name"
            value= {form.name}
            type="text"
            className="form-control"
            placeholder="Digite o nome do Vigilante"
            onChange={handleChange}
          />
        </div>

        <Divider> - </Divider>
        <select  
         name="campus"    
         className="form-control form-control" id="campus"
         onChange={handleChange}
         defaultValue={form.campus}>
          <option value={'Escolha o Câmpus'}>Escolha o Câmpus</option>
          <option value={'Câmpus Samambia'}>Câmpus Samambia</option>
          <option value={'Câmpus Colemar'}>Câmpus Colemar</option>
          
        </select>

        <Divider> - </Divider>
        <select
         name="categoria"        
         className="form-control form-control"
         onChange={handleChange}
         defaultValue={form.categoria}>
          <option value={'Selcione a categoria'}>Selcione a categoria</option>
          <option value={'Furto'}>Furto</option>
          <option value={'Assédio'}>Assédio</option>
          <option value={'Acidente'}>Acidente</option>
       
        </select>

        <Divider> - </Divider>
        <div className="form-group">
          <label>Descrição do Fato</label>
          <textarea
            value={form.descricao}
            name="descricao"
            className="form-control"
            rows="5"
            onChange={handleChange}/>
        </div>

        <Divider> - </Divider>
       
        <select
         name="status"        
         className="form-control form-control"
         onChange={handleChange}
         defaultValue={form.status}>
         

          <option value={'Status'}>Status</option>
          <option value={'Em Andamento'}>Em Andamento</option>
          <option value={'Concluído'}>Concluído</option>
         
        </select>
     
        <Divider> - </Divider>
        <div>
        
            <button type="button" className="btn btn-primary"
             onClick={handleSubmit}>
              Salvar
            </button>   
        </div>

            </form> 
          ) 
        }
       

        </div>
        </>
    )
}

export default OcorrenciaDetalhe