import { useDispatch, useSelector } from 'react-redux';
import { setSortingType } from 'store/interface/action';
import { selectSortingType } from 'store/interface/selectors';
import { SortingType } from 'util/const';
import PropTypes from 'prop-types';

const mapToSortingName = {
  [SortingType.BY_CITY]: 'По городу',
  [SortingType.BY_COMPANY]: 'По компании',
};

function SortingButton({ itsType }) {
  const dispatch = useDispatch();
  const sortingType = useSelector(selectSortingType);

  const handleClick = (evt) => {
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

SortingButton.propTypes = {
  itsType: PropTypes.string.isRequired,
};

export default SortingButton;
