import { Link } from 'react-router-dom';
import { userType } from '../../util/prop-types';

function Card({ userData }) {
  const {
    id, name, company, address,
  } = userData;
  const companyName = company.name;
  const { city } = address;
  return (
    <div className="user-info-block">
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">ФИО:</p>
        <p className="user-info-block__value">{name}</p>
      </div>
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">Город:</p>
        <p className="user-info-block__value">{city}</p>
      </div>
      <div className="user-info-block__inner-item ">
        <p className="user-info-block__key">Компания:</p>
        <p className="user-info-block__value">{companyName}</p>
        <Link to={`/user/${id}`}>Подробнее</Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  userData: userType.isRequired,
};

export default Card;
