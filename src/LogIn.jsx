import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Login = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar solicitud al backend aquí usando fetch o axios
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      // Manejar la respuesta del backend según sea necesario
      const data = await response.json();
      console.log(data);

      // Si la respuesta indica éxito, puedes redirigir al usuario o realizar alguna acción adicional
      if (response.ok) {
        console.log('Inicio de sesión exitoso');
        // Puedes redirigir aquí si es necesario
      } else {
        console.error('Inicio de sesión fallido');
        // Puedes manejar errores de inicio de sesión aquí
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Iniciar Sesión</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="loginUsername" className="boxUS">
          Usuario:
          <input
            type="text"
            id="loginUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Iniciar Sesión
        </button>
      </form>
      <p className='registro'>
        ¿No tienes una cuenta?{' '}
        <Link to="/signup">
          <hr /> <u> <b>Regístrate aquí!</b></u>
        </Link>
      </p>
    </div>
  );
};

export default Login;




/* codigo origen

import { Link } from 'react-router-dom';
import './index.css'; 


const   Login = () => {
  return (
    <div className="book1">
      <h2 className="heading">Iniciar Sesión</h2>
      <form className='formL reserva-f'>
        <label htmlFor="loginUsername" className="boxUS">
          Usuario:
          <input type="text" id="loginUsername" className="box1" />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input type="password" id="loginPassword" className="box1" />
        </label>

        <button type="submit" className="btn">
          Iniciar Sesión
        </button>
      </form>
      <p className='registro'>
        ¿No tienes una cuenta?{' '}
        <Link to="/signup"><hr /> <u> <b>Regístrate aquí!</b></u></Link>
      </p>
    </div>
  );
};

export default Login;
*/