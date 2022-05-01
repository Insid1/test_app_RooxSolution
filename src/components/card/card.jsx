import { Link } from 'react-router-dom';

function Card() {
  return (
    <div className="user-info-block">
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">ФИО:</p>
        <p className="user-info-block__value">Иван Иванов</p>
      </div>
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">Город:</p>
        <p className="user-info-block__value">какой то город</p>
      </div>
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">Компания:</p>
        <p className="user-info-block__value">Иван Иванов</p>
        <Link to="/user/123">Подробнее</Link>
      </div>
    </div>
  );
}

export default Card;
