import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    const { email, senha } = payload;
    const senhaConfirmacao = senha;

    const response = yield call(
        api.post,
        'usuario/autenticar',
        {
            email,
            senha,
            senhaConfirmacao,
        },
        { mode: 'no-cors' }
    );
    const { token, usuario } = response.data;
    /* if(!user.provider){
        console.tron.error('Usuario nao eh prestador');
        return;
    }
    */
    yield put(signInSuccess(token, usuario));
    history.push('/dashboard');
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
