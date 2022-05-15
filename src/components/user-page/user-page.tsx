import Loader from 'components/loader/loader';
import { useParams, useNavigate } from 'react-router-dom';
import { selectIsCurrentUserLoaded } from 'store/data/selectors';
import Sorting from 'components/sorting/sorting';
import UserProfile from 'components/user-profile/user-profile';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useEffect } from 'react';
import { fetchUser } from 'store/data/api-actions';

function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();
  const isCurrentUserLoaded = useAppSelector(selectIsCurrentUserLoaded);

  useEffect(() => {
    if (id) {
      dispatch(fetchUser(+id));
    }
  }, [dispatch, id]);

  if (!id || (+id > 10 || +id < 1 || isNaN(+id))) {
    navigate('error');
  }

  return (
    !isCurrentUserLoaded
      ? (<Loader />)
      : (
        <main>
          <Sorting />
          <div className="right-side">
            <UserProfile />
          </div>
        </main>
      )
  );
}

export default UserPage;
