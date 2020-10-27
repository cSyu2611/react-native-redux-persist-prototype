import { createStore, compose, applyMiddleware} from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import sampleState from './sampleReducer';

const persistConfig = {
    key: 'primary',
    storage: AsyncStorage, // 端末のストレージを指定
    // whiteList: [], // ホワイトリスト形式で永続化するreducerを指定
    // blackList: [] // ブラックリスト形式で...
};

const middlewares = [];
const appliedMiddlewares = [applyMiddleware(...middlewares)];
const persistMiddlewares = {appliedMiddlewares}
const persistCombinedReducers = persistCombineReducers(persistConfig, {
    sampleState: sampleState
    // reducer2, // 複数reducerなら以下に追加していく
    // reducer3,
    // ...,
});
const store = createStore(persistCombinedReducers, undefined, compose(...appliedMiddlewares));

const persistedStore = persistStore(store, persistMiddlewares, null, ()=>{
    // console.log(store.getState());
})

const storeConfig = () => {
    return {
        persistedStore,
        store
    }
}

export default storeConfig;