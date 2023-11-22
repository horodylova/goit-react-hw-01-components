import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.friend}>
    <img src={avatar} alt={name} className={styles.friendAvatar} />
    <p className={styles.friendName}>{name}</p>
    <p className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
