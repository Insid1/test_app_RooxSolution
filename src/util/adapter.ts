import { IFormDataUser } from 'types/form-data-user';
import type { IServerUser, IUser, IUserPost } from 'types/user-types';

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

const adaptFormDataToClient = (formData: IFormDataUser, user: IUser) : IUserPost => {
  const adaptedData = {
    id: user.id,
    name: formData.name,
    username: formData.username,
    email: formData.email,
    address: {
      street: formData.street,
      suite: user.address.suite,
      city: formData.city,
      zipcode: formData.zipcode,
      geo: user.address.geo,
    },
    phone: [formData.phone, user.phone[2]],
    website: formData.website,
    company: user.company,
    comment: formData.comment,
  };
  return adaptedData;
};

export { adaptDataToCLient, adaptDataToServer, adaptFormDataToClient };
