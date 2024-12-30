import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import React, { useState } from 'react'; 
import emailjs from 'emailjs-com';

const Container = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        coisa: '',
        comida: '',
        jogo: '',
        linguagem: '',
        estudos: '',
    })
    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .send('service_2dn58gt', 'template_tdn0ix7', formData, 'bOfHdKpZptqmRrs5o')
        .then((response) => {
            console.log("Email enviado com sucesso", response);
            alert('Enviado ao email!')
        })
        .catch((error) => {
            console.log('Erro ao enviar e-mail: ', error);
            alert("Erro ao enviar o formulário!")
        })
    }

   

    return(
    <section>
        <div className="Title">
            <h1>Formulário feito em React</h1>
        </div>
    <form onSubmit={handleSubmit}>
        <div className="textField">
          <TextField
            id="nome"
            label="Nome"
            variant="standard"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <TextField
            id="email"
            label="E-mail"
            variant="standard"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            id="coisa"
            label="Coisa Preferida"
            variant="standard"
            name="coisa"
            value={formData.coisa}
            onChange={handleChange}
            required
          />
          <TextField
            id="Comida Preferida"
            label="Comida Preferida"
            variant="standard"
            name="comida"
            value={formData.comida}
            onChange={handleChange}
            required
          />
          <TextField
            id="idade"
            label="Jogo Favorito"
            variant="standard"
            name="jogo"
            value={formData.jogo}
            onChange={handleChange}
            required
          />
          <TextField
            id="idade"
            label="Linguagem Favotira"
            variant="standard"
            name="linguagem"
            value={formData.linguagem}
            onChange={handleChange}
            required
          />
          <TextField
            id="idade"
            label="Estudos Atuais"
            variant="standard"
            name="estudos"
            value={formData.estudos}
            onChange={handleChange}
            required
          />
        </div>
        <div className='buttonClass'>
            <Button type="submit" variant="contained" color="primary">
              Enviar para o E-Mail
            </Button>
        </div>
      </form>
    </section>
    )
    
}


export default Container