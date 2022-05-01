import { adaptDataToCLient } from 'util/adapter';
import { loadUsers, setIsUsersLoaded } from './action';

const fetchUsers = () => (dispatch, _getState, api) => api.get()
  .then(({ data }) => {
    const adaptedData = (data.map(adaptDataToCLient));
    dispatch(loadUsers(adaptedData));
    return adaptedData;
  })
  .then(() => {
    dispatch(setIsUsersLoaded(true));
  })
  .catch(() => {
  });

// eslint-disable-next-line import/prefer-default-export
export { fetchUsers };
