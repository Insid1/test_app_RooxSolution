const adaptDataToCLient = (user) => {
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

// eslint-disable-next-line import/prefer-default-export
export { adaptDataToCLient };
