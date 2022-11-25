import { Divider, Input } from "@mui/material";
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function FormOcorrencia() {

    const navigate = useNavigate();
    const [form , setForm] = useState({
       
        name: '',
        campus: '',
        categoria: '',
        descricao: '',
        status: '',

    });

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,

        })
    }
    
    async function handleSubmit(event) {
        console.log('')

        event.preventDefault();
        await axios.post('https://ironrest.cyclic.app/projetoOcorrencias', form);
        navigate('/')
       

    }





    return (
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
         onChange={handleChange}>
          <option value={'Escolha o Câmpus'}>Escolha o Câmpus</option>
          <option value={'Câmpus Samambia'}>Câmpus Samambia</option>
          <option value={'Câmpus Colemar'}>Câmpus Colemar</option>
          
        </select>

        <Divider> - </Divider>
        <select
         name="categoria"        
         className="form-control form-control"
         onChange={handleChange}>
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
         onChange={handleChange}>
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
    );
        
}

export default FormOcorrencia