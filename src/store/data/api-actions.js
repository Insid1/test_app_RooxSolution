import { adaptDataToCLient, adaptDataToServer } from 'util/adapter';
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

const postUser = (userData) => (dispatch, _getState, api) => {
  const adaptedUserData = adaptDataToServer(userData);
  return api.put(`${userData.id}`, { adaptedUserData })
    .then((response) => {
      console.log(JSON.stringify(adaptedUserData));
    })
    .catch((err) => {
      throw Error(err);
    });
};

export { fetchUsers, postUser };
