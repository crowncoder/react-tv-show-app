import { getRequest } from './networkService';
export default {
    getEpisodeList(tvShowId) {
        return getRequest(`/shows/${tvShowId}/episodes`);
    },
    getEpisode(episodeId) {
        return getRequest(`/episodes/${episodeId}`);
    }
};
