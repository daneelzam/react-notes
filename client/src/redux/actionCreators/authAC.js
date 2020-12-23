import { AUTH_SUCSESSFULLY, LOGOUT } from '../types';

export const authSucsessAC = (user) => ({ type: AUTH_SUCSESSFULLY, payload: user });
export const logoutAC = () => ({ type: LOGOUT });
