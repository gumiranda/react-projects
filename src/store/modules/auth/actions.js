export function signInRequest(email, senha, senhaConfirmacao) {
    return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, senha, senhaConfirmacao },
    };
}

export function signInSuccess(token, user) {
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
    };
}
export function signUpRequest(nome, email, senha, senhaConfirmacao) {
    return {
        type: '@auth/SIGN_UP_REQUEST',
        payload: { nome, email, senha, senhaConfirmacao },
    };
}

export function signFailure() {
    return {
        type: '@auth/SIGN_FAILURE',
    };
}
