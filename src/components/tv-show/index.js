import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ProfileInfoHeader, ProfileInfoSection } from '../ui';
import EpisodeList from './episode-list';


const TVShowInfo = memo((props) => {
    return (
        <>
            <ProfileInfoHeader />
            <ProfileInfoSection />
            <EpisodeList />
        </>
    )
})

TVShowInfo.propTypes = {

}

export default TVShowInfo;
