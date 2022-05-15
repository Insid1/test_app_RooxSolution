import { IUser } from 'types/user-types';

const blankUserData: IUser = {
  id: 100,
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: 0,
      lng: 0,
    },
  },
  phone: [],
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

// eslint-disable-next-line import/prefer-default-export
export { blankUserData };
