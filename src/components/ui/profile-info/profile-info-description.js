import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './profile-info-description.module.scss';
const ProfileInfoDescrption= memo((props)=>{
    return (
        <p className={styles.profileInfo__title}>The Powerpuff Girls</p>
    )
})

ProfileInfoDescrption.propTypes = {

}

export default ProfileInfoDescrption;