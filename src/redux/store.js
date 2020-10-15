import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { tvShowService, episodeService } from '../services';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = compose(
    composeEnhancers(
        applyMiddleware(
            thunk.withExtraArgument({
                tvShowService,
                episodeService
            })
        ),
    )
);
const store = createStore(rootReducer, enhancers);

if (module.hot) {
    module.hot.accept('./rootReducer', () => {
        store.replaceReducer(require('./rootReducer').default);
    });
}

export default store;
