import { useSelector } from 'react-redux';
import { selectIsUsersLoaded } from 'store/data/selectors';
import CardList from '../card/card-list';
import Loader from '../loader/loader';
import Sorting from '../sorting/sorting';

function MainPage() {
  const setIsUsersLoaded = useSelector(selectIsUsersLoaded);

  if (!setIsUsersLoaded) {
    return <Loader />;
  }

  return (
    <main>
      <Sorting />
      <div className="right-side">
        <CardList />
      </div>
    </main>
  );
}

export default MainPage;
