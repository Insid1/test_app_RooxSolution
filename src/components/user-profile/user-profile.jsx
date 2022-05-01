import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <section className="user-profile">
      <div className="user-profile__info">
        <h1>Профиль пользователя</h1>
        <Link className="button edit-button" to="/">
          На главную
        </Link>
        <button className="button edit-button" type="button">Редактировать</button>
      </div>
      <form className="card-form">
        <fieldset disabled>
          <label className="label-for-input" htmlFor="input-name">
            Name
          </label>
          <input
            type="text"
            id="input-name"
            value="Иван Иванов"
            required
          />
          <label className="label-for-input" htmlFor="input-name">
            User name
          </label>
          <input
            required
            type="text"
            id="input-user-name"
            value="Иван Иванов"
          />
          <label className="label-for-input" htmlFor="input-name">
            E-mail
          </label>
          <input
            required
            type="email"
            id="input-name"
            value="some email"
          />
          <label className="label-for-input" htmlFor="input-street">
            Street
          </label>
          <input
            required
            type="text"
            id="input-street"
            value="some street name"
          />
          <label className="label-for-input" htmlFor="input-city">
            City
          </label>
          <input
            required
            type="text"
            id="input-city"
            value="some city"
          />
          <label className="label-for-input" htmlFor="input-zipcode">
            Zip-code
          </label>
          <input
            type="text"
            id="input-zipcode"
            maxLength={6}
            minLength={6}
            value="123456"
          />
          <label className="label-for-input" htmlFor="input-phone">
            Phone
          </label>
          <input
            required
            type="text"
            id="input-phone"
            maxLength={11}
            minLength={11}
            value="89991112233"
          />
          <label className="label-for-input" htmlFor="input-website">
            WebSite
          </label>
          <input
            required
            type="link"
            id="input-website"
            value="www.example.com"
          />
          <label className="label-for-input" htmlFor="input-comment">
            Comment
          </label>
          <textarea
            rows="2"
            draggable={false}
            type="text"
            placeholder="Enter the comment in the field"
            id="input-comment"
            value=""
            minLength={5}
          />
          <button type="submit" className="button card-form__submit-button">Отправить</button>

        </fieldset>
      </form>
    </section>
  );
}

export default UserProfile;
