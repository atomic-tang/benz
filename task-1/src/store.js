import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';

const Store = () => createStore(
    reducer,
    devToolsEnhancer()
)


export default Store