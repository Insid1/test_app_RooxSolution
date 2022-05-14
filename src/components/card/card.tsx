import { Link } from 'react-router-dom';
import { IUser } from 'types/user-types';
import { AppRoute } from 'util/const';
import styles from './card.module.scss';

interface CardProps {
  userData: IUser
}

function Card({ userData } : CardProps) {
  const {
    id, name, company, address,
  } = userData;
  const companyName = company.name;
  const { city } = address;
  return (
    <div className={styles['user-info-block']}>
      <div className={styles['user-info-block__inner-item']}>
        <p className={styles['user-info-block__key']}>ФИО:</p>
        <p>{name}</p>
      </div>
      <div className={styles['user-info-block__inner-item']}>
        <p className={styles['user-info-block__key']}>Город:</p>
        <p>{city}</p>
      </div>
      <div className={styles['user-info-block__inner-item']}>
        <p className={styles['user-info-block__key']}>Компания:</p>
        <p>{companyName}</p>
        <Link to={AppRoute.USER + id}>Подробнее</Link>
      </div>
    </div>
  );
}

export default Card;
