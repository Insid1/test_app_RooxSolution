import Card from './card';
import { adaptDataToCLient, data } from '../../mock';

const adaptedData = data.map(adaptDataToCLient);

function CardList() {
  return (
    <section className="user-list">
      <ul>
        <h1>
          Список пользователей
        </h1>
        {adaptedData.map((userData) => (
          <li className="user-list__element" key={userData.id}>
            <Card userData={userData} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardList;
