import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
    try {
        const { nome, email, ...rest } = payload.data;
        const profile = { nome, email, ...(rest.oldPassword ? rest : {}) };
        const response = yield call(api.put, 'usuario', profile);
        toast.success('Perfil atualizado com sucesso');
        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        toast.error('Erro ao atualizar o perfil, confira seus dados!');
        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
