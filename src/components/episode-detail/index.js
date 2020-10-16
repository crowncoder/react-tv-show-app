import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom'
import { get, isUndefined } from 'lodash';
import { ProfileInfoHeader, ProfileInfoSection } from '../../ui';
import { getEpisode } from '../../redux/modules/episodes';


const EpisodeDetail = memo(() => {
    const { state } = useLocation();
    const { episodeId } = useParams();
    const dispatch = useDispatch();

    // get historical episode data from location
    const historicalEpisodeData = get(state, 'episode', undefined);
    // get episode data from redux store
    const episode = useSelector(state => state.episodes.episode);

    // side effect to get episode details 
    useEffect(() => {
        // if historical episode data not found, send the request to retrieve data
        if (isUndefined(historicalEpisodeData)) {
            dispatch(getEpisode(episodeId));
        }
    }, [dispatch, episodeId, historicalEpisodeData]);

    const { name, ...sectionInfo } = historicalEpisodeData || episode;
    return (
        <>
            <ProfileInfoHeader name={name} />
            <ProfileInfoSection sectionInfo={sectionInfo} />
        </>
    )
})


export default EpisodeDetail;
