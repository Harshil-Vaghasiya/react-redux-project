import  todoReducer from  './todoSlice';
import {configureStore} from "@reduxjs/toolkit";
import {getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'TODO',
    storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

const store=configureStore({
    reducer:{
        todo:persistedReducer,
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware({
        //         serializableCheck: false,
        //     }),

    }
})
export  const persistor = persistStore(store)
export  default store;