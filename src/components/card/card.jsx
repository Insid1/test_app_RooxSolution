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
        <button type="button">Подробнее</button>
      </div>
    </div>
  );
}

export default Card;
