import React, { memo } from 'react';
import ProfileInfo from './profile-info';
import EpisodeList from './episode-list';


const TVShowInfo = memo(() => {
    return (
        <>
            <ProfileInfo />    
            <EpisodeList />
        </>
    )
})

export default TVShowInfo;
