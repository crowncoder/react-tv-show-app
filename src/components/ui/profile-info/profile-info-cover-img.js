import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './profile-info-cover-img.module.scss'

const MaterialCoverImg = memo((props) => {
    return (
        <figure className={styles.profileInfo__figure}>
            <img src="//static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg" alt="The Powerpuff Girls"></img>
        </figure>
    )
})

MaterialCoverImg.propTypes = {

}

export default MaterialCoverImg;