import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);
    function handleSubmit(data) {
        dispatch(updateProfileRequest(data));
        // console.tron.log(data);
    }
    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="nome" placeholder="Nome completo" />
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
                <Input type="password" name="senha" placeholder="Nova senha" />
                <Input
                    type="password"
                    name="senhaConfirmacao"
                    placeholder="Confirme a nova senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button">Sair do Barber</button>
        </Container>
    );
}
