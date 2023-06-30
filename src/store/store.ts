import {combineReducers, configureStore} from '@reduxjs/toolkit';
import renderReducer from './reducers/renderSlice';

const rootReducer = combineReducers({
    renderReducer
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export default setupStore;
