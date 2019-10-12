import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistReducers = persistReducer(
        {
            key: 'barber',
            storage,
            whitelist: ['auth', 'user'],
        },
        reducers
    );
    return persistReducers;
};
