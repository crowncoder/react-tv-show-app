import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './profile-info-cover-img.module.scss'

const ProfileInfoCoverImg = memo((props) => {
    const imgsSrc = get(props, 'image.medium', undefined);
    return (imgsSrc ?
        <figure className={styles.profileInfo__figure}>
            <img src={imgsSrc} alt="The Powerpuff Girls"></img>
        </figure> : <Skeleton variant="rect" className={styles.skeleton_img} />
    )
})

ProfileInfoCoverImg.propTypes = {
    image: PropTypes.shape({
        meidium: PropTypes.string
    })
}

export default ProfileInfoCoverImg;