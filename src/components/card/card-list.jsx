import { useSelector } from 'react-redux';
import { selectSortedUsers } from 'store/data/selectors';
import Card from './card';
import styles from './card-list.module.scss';

function CardList() {
  const users = useSelector(selectSortedUsers);
  return (
    <section>
      <ul>
        <h1>
          Список пользователей
        </h1>
        {users.map((userData) => (
          <li
            className={styles['user-list__element']}
            key={userData.id}
          >
            <Card userData={userData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
