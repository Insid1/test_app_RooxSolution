import Loader from 'components/loader/loader';
import { useParams, Navigate } from 'react-router-dom';
import { selectIsUsersLoaded } from 'store/data/selectors';
import Sorting from 'components/sorting/sorting';
import UserProfile from 'components/user-profile/user-profile';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setCurrentUserId } from 'store/interface/interface-slice';
import { useEffect } from 'react';
import { fetchUsers } from 'store/data/api-actions';

function UserPage() {
  const { id } = useParams();
  const isUsersLoaded = useAppSelector(selectIsUsersLoaded);
  // const dispatch = useAppDispatch();

  if (!id || (+id > 10 || +id < 1 || isNaN(+id))) {
    return <Navigate to="/error" replace />;
  }
  // setTimeout(() => {
  //   dispatch(setCurrentUserId(+id));
  // }, 500);
  // // dispatch(setCurrentUserId(+id));

  return (
    !isUsersLoaded
      ? (<Loader />)
      : (
        <main>
          <Sorting />
          <div className="right-side">
            <UserProfile id={+id} />
          </div>
        </main>
      )
  );
}

export default UserPage;
