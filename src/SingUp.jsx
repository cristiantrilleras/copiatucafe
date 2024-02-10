import React, { useState } from 'react';
import { Link} from 'react-router-dom'; // Importa useHistory
import './index.css';


const SignUp = () => {
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la solicitud al backend aquí usando fetch o axios
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      // Maneja la respuesta del backend según sea necesario
      const data = await response.json();
      console.log(data);

      // Si la respuesta indica éxito, redirige al usuario
      if (response.ok) {
       
        console.log('Registro exitoso, redirigiendo al inicio de sesión');
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Registrar</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="signupUsername" className="boxUS">
          Usuario:
          <input
            type="text"
            id="signupUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupEmail" className="boxUS">
          Correo electrónico:
          <input
            type="email"
            id="signupEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="signupPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
      <p className='registro'>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login">
          <hr />
          <u><b>Inicia sesión aquí</b></u>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;





/*


import { Link } from 'react-router-dom';
import './index.css'; 

const SignUp = () => {
  return (
    <div className="book1"> 
      <h2 className="heading">Registrar</h2>
      <form className='formL reserva-f'>
        <label htmlFor="signupUsername" className="boxUS">
          Usuario:
          <input type="text" id="signupUsername" className="box1" />
        </label>

        <label htmlFor="signupEmail" className="boxUS">
          Correo electrónico:
          <input type="email" id="signupEmail" className="box1" />
        </label>

        <label htmlFor="signupPassword" className="boxUS">
          Contraseña:
          <input type="password" id="signupPassword" className="box1" />
        </label>

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
      <p className='registro'>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login"><hr /><u><b>Inicia sesión aquí</b></u></Link>
      </p>
    </div>
  );
};

export default SignUp;

*/
