import { combineReducers } from "redux";
import TodoSlice from "./TodoSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import { configure } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
    todoData : TodoSlice
})

const persistConfig ={
    key:'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer)

const store= configureStore({reducer: persistedReducer})
const persistor = persistStore(store)
export {store, persistor}