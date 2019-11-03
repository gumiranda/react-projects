import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);
    function handleSubmit(data) {}
    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de email"
                />
                <hr />
                <Input
                    type="password"
                    name="oldPassword"
                    placeholder="Sua senha"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme a nova senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button">Sair do Barber</button>
        </Container>
    );
}
