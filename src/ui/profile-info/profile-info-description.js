import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './profile-info-description.module.scss';
const ProfileInfoDescrption = memo(({ description }) => {
    return (
        description ? <div className={styles.profileInfo__des} dangerouslySetInnerHTML={{ __html: description }} />
            : <>
                <Skeleton className={styles.skeleton_des} />
                <Skeleton className={styles.skeleton_des} />
                <Skeleton className={styles.skeleton_des} />
            </>
    )
})

ProfileInfoDescrption.propTypes = {
    description: PropTypes.string
}

export default ProfileInfoDescrption;