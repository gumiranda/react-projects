import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    try {
        const { email, senha } = payload;
        const senhaConfirmacao = senha;

        const response = yield call(api.post, 'usuario/autenticar', {
            email,
            senha,
            senhaConfirmacao,
        });
        const { token, usuario } = response.data;
        /* if(!user.provider){
        console.tron.error('Usuario nao eh prestador');
        return;
    }
    */
        yield put(signInSuccess(token, usuario));
        history.push('/dashboard');
    } catch (err) {
        toast.error('Falha na autenticação, verifique usuário e senha');
        yield put(signFailure());
    }
}
export function* signUp({ payload }) {
    try {
        const { nome, email, senha, senhaConfirmacao } = payload;
        yield call(api.post, 'usuario/register', {
            nome,
            email,
            senha,
            senhaConfirmacao,
        });
        history.push('/');
    } catch (err) {
        toast.error('Falha no cadastro, verifique os dados');
        yield put(signFailure());
    }
}

export default all([
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
