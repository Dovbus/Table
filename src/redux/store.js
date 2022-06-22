import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import valueTableReducer from "./valueTableSlice";
import positionReducer from "./positionSlice";
import mainTableValuesReducer from "./mainTableValuesSlice";

const persistConfig = {
  key: "root",
  storage,
  //blacklist: [mainTableValuesReducer],
};

const rootReducer = combineReducers({
  valueTable: valueTableReducer,
  position: positionReducer,
  mainTableValues: mainTableValuesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
