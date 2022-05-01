import CardList from '../card/card-list';
import Loader from '../loader/loader';
import Sorting from '../sorting/sorting';

function MainPage() {
  const test = false;

  if (test) {
    return <Loader />;
  }

  return (
    <main>
      <Sorting />
      <div className="right-side">
        <CardList />
        {/* <UserProfile /> */}
      </div>
    </main>
  );
}

export default MainPage;
