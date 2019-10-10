import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});
// import { Container } from './styles';
export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="Barber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Acessar</button>
                <Link to="/register">
                    Ainda não tem conta? Clique aqui para criar
                </Link>
            </Form>
        </>
    );
}
