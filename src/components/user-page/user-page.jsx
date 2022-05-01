import Loader from 'components/loader/loader';
import { useSelector } from 'react-redux';
import { selectIsUsersLoaded } from 'store/data/selectors';
import Sorting from '../sorting/sorting';
import UserProfile from '../user-profile/user-profile';

function UserPage() {
  const setIsUsersLoaded = useSelector(selectIsUsersLoaded);
  if (!setIsUsersLoaded) {
    return <Loader />;
  }
  return (
    <main>
      <Sorting />
      <div className="right-side">
        <UserProfile />
      </div>
    </main>
  );
}

export default UserPage;
