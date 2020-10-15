import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash';
import styles from './profile-info-cover-img.module.scss'

const ProfileInfoCoverImg = memo((props) => {
    const imgsSrc = get(props, 'image.medium', undefined);
    return (imgsSrc &&
        <figure className={styles.profileInfo__figure}>
            <img src={imgsSrc} alt="The Powerpuff Girls"></img>
        </figure>
    )
})

ProfileInfoCoverImg.propTypes = {

}

export default ProfileInfoCoverImg;