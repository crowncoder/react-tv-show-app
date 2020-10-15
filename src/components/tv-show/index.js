import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from './profile-info';
import EpisodeList from './episode-list';


const TVShowInfo = memo((props) => {
    return (
        <>
            <ProfileInfo />    
            <EpisodeList />
        </>
    )
})

TVShowInfo.propTypes = {

}

export default TVShowInfo;
