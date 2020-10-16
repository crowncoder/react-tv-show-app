import React, { memo } from 'react'
import PropTypes from 'prop-types';
import ProfileInfoCoverImg from './profile-info-cover-img';
import ProfileInfoDescrption from './profile-info-description';
import styles from './profile-info-section.module.scss';
const ProfileInfoSection = memo((props) => {
    const { sectionInfo: { image, summary: description } } = props;
    return (
        <div className={styles.profileInfo__section}>
            <aside>
                <ProfileInfoCoverImg image={image} />
            </aside>
            <article>
                <ProfileInfoDescrption description={description} />
            </article>
        </div>
    )
})

ProfileInfoSection.propTypes = {
    sectionInfo: PropTypes.shape({
        image: PropTypes.shape({
            meidium: PropTypes.string
        }),
        summary: PropTypes.string
    })
}

export default ProfileInfoSection;