import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
// import { Container } from './styles';
export default function SignIn() {
    return (
        <>
            <img src={logo} alt="Barber" />
            <form>
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha" />
                <button type="submit">Acessar</button>
                <Link to="/register">
                    Ainda não tem conta? Clique aqui para criar
                </Link>
            </form>
        </>
    );
}
