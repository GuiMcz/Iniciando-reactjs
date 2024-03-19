import styles from '../css/Avatar.module.css';

export function Avatar({ withoutBorder = false, src }) {
  return (
    <img
      className={withoutBorder ? styles.avatar : styles.avatarBorder}
      src={src}
      alt=""
    />
  );
}
