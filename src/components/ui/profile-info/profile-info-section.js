import React, { memo } from 'react'
import PropTypes from 'prop-types';
import ProfileInfoCoverImg from './profile-info-cover-img';
import ProfileInfoDescrption from './profile-info-description';
import styles from './profile-info-section.module.scss';
const MaterialSection = memo((props)=>{
    return (
        <div className={styles.profileInfo__section}>
            <aside>
                <ProfileInfoCoverImg />
            </aside>
            <article>
                <ProfileInfoDescrption />
            </article>
        </div>
    )
})

MaterialSection.propTypes = {

}

export default MaterialSection;