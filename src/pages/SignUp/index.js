import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    senha: Yup.string()
        .min('No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    senhaConfirmacao: Yup.string()
        .min('No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
});
// import { Container } from './styles';
export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="Barber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu email" />
                <Input name="senha" type="password" placeholder="Sua senha" />
                <Input
                    name="senhaConfirmacao"
                    type="password"
                    placeholder="Sua senha"
                />
                <button type="submit">Criar conta</button>
                <Link to="/">Já tenho login</Link>
            </Form>
        </>
    );
}
