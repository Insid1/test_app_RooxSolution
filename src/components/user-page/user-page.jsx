import Loader from 'components/loader/loader';
import { useSelector } from 'react-redux';
import { useParams, Navigate } from 'react-router-dom';
import { selectIsUsersLoaded } from 'store/data/selectors';
import Sorting from 'components/sorting/sorting';
import UserProfile from 'components/user-profile/user-profile';

function UserPage() {
  const { id } = useParams();
  const setIsUsersLoaded = useSelector(selectIsUsersLoaded);

  if (id > 10 || id < 1 || isNaN(+id)) {
    return <Navigate to="/error" replace />;
  }

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
