// import { adaptDataToCLient } from '../../mock';
import { adaptDataToCLient } from '@util/adapter';
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

// const postFavoriteOffer = (favoriteStatus, id) => (dispatch, _getState, api) => {
//   // values may be 1 or 0. 0-delete, 1-add
//   const status = favoriteStatus ? 0 : 1;
//   return api.post(`${ServerRoute.FAVORITE_OFFERS}${id}/${status}`)
//     .catch(() => {});
// };

// eslint-disable-next-line import/prefer-default-export
export { fetchUsers };
