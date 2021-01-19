import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authSucsessAC } from '../../../redux/actionCreators/authAC';

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({ email: '', username: '', password: '' });
  const { email, username, password } = inputs;
  const handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://notes-dz.herokuapp.com/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, username })
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
                Username:
                <input name='username' type='text' required onChange={handleChange} value={ username }/>
            </label>
            <label>
                Email:
                <input name='email' type='email' required onChange={handleChange} value={ email }/>
            </label>
            <label>
                Password:
                <input name='password' type='password' required onChange={handleChange} value={ password } />
            </label>
            <button type="submit">SignUp</button>
            <div className='error'>
                {error}
            </div>
        </form>
  );
}
export default SignUp;
