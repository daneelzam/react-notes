import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSucsessAC } from '../../../redux/actionCreators/authAC';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }).then((res) => res.json())
      .then((serverData) => {
        if (serverData.user) {
          dispatch(authSucsessAC(serverData.user));
          return history.push('/dashboard');
        }
        return setError('Wrong email or password');
      })
      .catch(() => setError('Wrong email or password'));
  };
  return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input name='email' type='email' required onChange={handleChange} value={ email }/>
            </label>
            <label>
                Password:
                <input name='password' type='password' required onChange={handleChange} value={ password } />
            </label>
            <button type="submit">SignIn</button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}
export default Login;
