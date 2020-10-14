import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ProfileInfoHeader, ProfileInfoSection } from '../ui';


const EpisodeDetail = memo((props) => {
    return (
        <>
            <ProfileInfoHeader />
            <ProfileInfoSection />
        </>
    )
})

EpisodeDetail.propTypes = {

}

export default EpisodeDetail;
