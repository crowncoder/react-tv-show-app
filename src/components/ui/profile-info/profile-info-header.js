import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './profile-info-header.module.scss'
const ProfileInfoHeader= memo((props)=>{
    return (
        <h1 className={styles.profileInfo__title}>The Powerpuff Girls</h1>
    )
})

ProfileInfoHeader.propTypes = {

}

export default ProfileInfoHeader;