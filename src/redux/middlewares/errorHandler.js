const errorHandler = (error, getState, lastAction) => {
	console.error(error.stack || error);
	console.debug('current state', getState());
	console.debug('last action was', lastAction);
};

const errorHandlerMiddleware = onError => ({ dispatch, getState }) => next => action => {
	if (!action.error) {
		next(action);
	} else {
		onError(action.error, getState, action);
	}
};

export default errorHandlerMiddleware(errorHandler);
