import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    nome: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um email válido')
        .required('O email é obrigatório'),
    senha: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
    senhaConfirmacao: Yup.string()
        .min(6, 'No mínimo 6 caracteres')
        .required('A senha é obrigatória'),
});
// import { Container } from './styles';
export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ nome, email, senha, senhaConfirmacao }) {
        dispatch(signUpRequest(nome, email, senha, senhaConfirmacao));
        console.tron.log({ nome, email, senha, senhaConfirmacao });
    }
    return (
        <>
            <img src={logo} alt="Barber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="nome" placeholder="Nome completo" />
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
