interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IUserAddress,
  phone: string[],
  website: string,
  company: IUserCompany,
}

interface IUserAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: number,
    lng: number,
  },
}

interface IUserCompany {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface IServerUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    },
  }
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  },
}

interface IUserPost extends IUser {
  comment: string,
}

export type {
  IUser, IUserAddress, IUserCompany, IServerUser, IUserPost,
};
