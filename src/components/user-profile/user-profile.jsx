import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { AppRoute } from 'util/const';
import CardForm from './card-form';
import styles from './user-profile.module.scss';

function UserProfile() {
  const fieldRef = useRef();

  const handleEditClick = (evt) => {
    evt.preventDefault();
    fieldRef.current.disabled = !fieldRef.current.disabled;
  };

  return (
    <section className={styles['user-profile']}>
      <div className={styles['user-profile__info']}>
        <h1>Профиль пользователя</h1>
        <Link className="button edit-button" to={AppRoute.MAIN}>
          На главную
        </Link>
        <button
          className="button edit-button"
          type="button"
          onClick={handleEditClick}
        >
          Редактировать
        </button>
      </div>
      <CardForm ref={fieldRef} />
    </section>
  );
}

export default UserProfile;
