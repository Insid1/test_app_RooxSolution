import type { IServerUser, IUser } from 'types/user-types';

const adaptDataToCLient = (user: IServerUser): IUser => {
  const adaptedUser = {
    ...user,
    address: {
      ...user.address,
      geo: {
        lat: +user.address.geo.lat,
        lng: +user.address.geo.lng,
      },
    },
    id: +user.id,
    phone: user.phone.split(' '),
  };
  return adaptedUser;
};

const adaptDataToServer = (user: IUser): IServerUser => {
  const adaptedUser = {
    ...user,
    address: {
      ...user.address,
      geo: {
        lat: `${user.address.geo.lat}`,
        lng: `${user.address.geo.lng}`,
      },
    },
    phone: user.phone.join(' '),
  };
  return adaptedUser;
};

export { adaptDataToCLient, adaptDataToServer };
