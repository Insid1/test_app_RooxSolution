import { SortingType } from 'util/enums';
import SortingButton from './sorting-button';

function Sorting() {
  return (
    <aside className="sorting left-side">
      <ul className="sorting__list">
        <p>
          Сортировка
        </p>
      </ul>
      {Object.values(SortingType).map((itsType) => (
        <li className="sorting__item" key={itsType}>
          <SortingButton itsType={itsType} />
        </li>

      ))}
    </aside>
  );
}

export default Sorting;
