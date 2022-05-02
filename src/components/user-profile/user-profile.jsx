import { Link } from 'react-router-dom';
import { useRef } from 'react';
import CardForm from './card-form';

function UserProfile() {
  const fieldRef = useRef();

  const handleEditClick = (evt) => {
    evt.preventDefault();
    fieldRef.current.disabled = !fieldRef.current.disabled;
  };

  return (
    <section className="user-profile">
      <div className="user-profile__info">
        <h1>Профиль пользователя</h1>
        <Link className="button edit-button" to="/">
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
