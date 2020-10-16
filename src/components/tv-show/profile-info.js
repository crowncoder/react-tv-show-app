import React, { useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ProfileInfoHeader, ProfileInfoSection } from '../../ui/index';
import { getTvShowInfo } from '../../redux/modules/tv-show';


const ProfileInfo = memo(() => {
    const {tvShowId} = useParams();
    const dispatch = useDispatch();
    const tVShowInfo = useSelector(state => state.tvShow.tvShowInfo);
    const { name, ...sectionInfo } = tVShowInfo;
    useEffect(() => {
        dispatch(getTvShowInfo(tvShowId));
    }, [dispatch, tvShowId]);

    return (
        <>
            <ProfileInfoHeader name={name} />
            <ProfileInfoSection sectionInfo={sectionInfo} />
        </>
    )
})

export default ProfileInfo;
