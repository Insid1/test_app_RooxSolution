import CardList from 'components/card/card-list';
import Loader from 'components/loader/loader';
import Sorting from 'components/sorting/sorting';
import { selectIsUsersLoaded } from 'store/data/selectors';
import { useAppSelector } from 'store/hooks';

function MainPage() {
  const setIsUsersLoaded = useAppSelector(selectIsUsersLoaded);

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
