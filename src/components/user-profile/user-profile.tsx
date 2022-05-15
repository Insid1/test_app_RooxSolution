import { Link } from 'react-router-dom';
import { AppRoute } from 'util/const';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setIsFormActive } from 'store/interface/interface-slice';
import { selectIsFormActive } from 'store/interface/selectors';
import CardForm from './card-form';
import styles from './user-profile.module.scss';

function UserProfile() {
  const isFormActive = useAppSelector(selectIsFormActive);
  const dispatch = useAppDispatch();
  const handleEditClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch(setIsFormActive(!isFormActive));
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
      <CardForm />
    </section>
  );
}

export default UserProfile;
