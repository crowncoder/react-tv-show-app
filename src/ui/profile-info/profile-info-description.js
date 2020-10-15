import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './profile-info-description.module.scss';
const ProfileInfoDescrption = memo(({ description }) => {
    return (
        <div className={styles.profileInfo__des} dangerouslySetInnerHTML={{ __html: description }} />
    )
})

ProfileInfoDescrption.propTypes = {

}

export default ProfileInfoDescrption;