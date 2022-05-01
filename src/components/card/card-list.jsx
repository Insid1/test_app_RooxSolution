import Card from './card';

function CardList() {
  return (
    <section className="user-list">
      <ul>
        <h1>
          Список пользователей
        </h1>
        <li className="user-list__element">
          <Card />
        </li>

      </ul>
    </section>
  );
}

export default CardList;
