import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import thunk from 'redux-thunk';

import reducers from './reducer';

const history = createBrowserHistory();
const routerML = routerMiddleware(history);

export { history };

const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
});

export default function configureStore() {
    if(process.env.NODE_ENV === 'production'){
        return createStore(
            rootReducer,
            compose(
                applyMiddleware(thunk, routerML)
            )
        );
    }else{
        return createStore(
            rootReducer,
            compose(
                applyMiddleware(thunk, routerML),
                window.devToolsExtension ? window.devToolsExtension() : f=>f
            )

        );
    }


}