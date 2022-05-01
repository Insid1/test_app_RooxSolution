function Sorting() {
  return (
    <aside className="sorting left-side">
      <ul className="sorting__list">
        <p>
          Сортировка
        </p>
      </ul>
      <li className="sorting__item">
        <button className="button sorting-button" type="button" value="city">По городу</button>
      </li>
      <li className="sorting__item">
        <button className="button sorting-button" type="button" value="company">По компании</button>
      </li>
    </aside>
  );
}

export default Sorting;
