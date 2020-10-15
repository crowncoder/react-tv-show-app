import {getRequest} from './networkService';
export default {
	getTvShowInfo(tvShowId) {
		return getRequest(`/shows/${tvShowId}`);
	}
};
