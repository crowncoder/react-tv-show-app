import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './profile-info-header.module.scss'
const ProfileInfoHeader = memo(({ name }) => {
    return (
        <h1 className={styles.profileInfo__title}>{name}</h1>
    )
})

ProfileInfoHeader.propTypes = {
    name: PropTypes.string
}

export default ProfileInfoHeader;