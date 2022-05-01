import { useSelector } from 'react-redux';
import { selectUsers } from 'store/data/selectors';
import Card from './card';

function CardList() {
  const users = useSelector(selectUsers);
  return (
    <section className="user-list">
      <ul>
        <h1>
          Список пользователей
        </h1>
        {users.map((userData) => (
          <li className="user-list__element" key={userData.id}>
            <Card userData={userData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
