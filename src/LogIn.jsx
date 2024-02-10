import { Link } from 'react-router-dom';
import './index.css';
import { useState } from 'react'; // Importa el hook useState para gestionar el estado

const Login = () => {
  // Define el estado para el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Manejador de evento para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la lógica de autenticación, por ejemplo, enviando una solicitud al servidor
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Autenticación exitosa, puedes redirigir al usuario o realizar otras acciones
        history.push('/')
        console.log('Inicio de sesión exitoso');
      } else {
        // Autenticación fallida, muestra un mensaje de error
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
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
            className="box1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="loginPassword"
            className="box1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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



// import { Link } from 'react-router-dom';
// import './index.css'; 


// const   Login = () => {
//   return (
//     <div className="book1">
//       <h2 className="heading">Iniciar Sesión</h2>
//       <form className='formL reserva-f'>
//         <label htmlFor="loginUsername" className="boxUS">
//           Usuario:
//           <input type="text" id="loginUsername" className="box1" />
//         </label>

//         <label htmlFor="loginPassword" className="boxUS">
//           Contraseña:
//           <input type="password" id="loginPassword" className="box1" />
//         </label>

//         <button type="submit" className="btn">
//           Iniciar Sesión
//         </button>
//       </form>
//       <p className='registro'>
//         ¿No tienes una cuenta?{' '}
//         <Link to="/signup"><hr /> <u> <b>Regístrate aquí!</b></u></Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
