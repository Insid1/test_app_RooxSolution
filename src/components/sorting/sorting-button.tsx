import { useSelector } from 'react-redux';
import { selectSortingType } from 'store/interface/selectors';
import { SortingType } from 'util/enums';
import { setSortingType } from 'store/interface/interface-slice';
import { useAppDispatch } from 'store/hooks';

const mapToSortingName = {
  [SortingType.BY_CITY]: 'По городу',
  [SortingType.BY_COMPANY]: 'По компании',
};

interface SortingButtonProps {
  itsType: SortingType
}

function SortingButton({ itsType }: SortingButtonProps) {
  const dispatch = useAppDispatch();
  const sortingType = useSelector(selectSortingType);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    dispatch(setSortingType(itsType));
  };
  return (
    <button
      className="button sorting-button"
      type="button"
      onClick={handleClick}
      disabled={sortingType === itsType}
    >
      {mapToSortingName[itsType]}

    </button>
  );
}

export default SortingButton;
