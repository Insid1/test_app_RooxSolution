import type { IUser } from 'types/user-types';
import { SortingType } from './enums';

const sortUsers = (users: IUser[], sortingType: SortingType): IUser[] => {
  const usersCopy = users.slice();
  switch (sortingType) {
    case SortingType.BY_CITY: {
      return usersCopy.sort((a, b) => {
        const aCity = a.address.city;
        const bCity = b.address.city;
        if (aCity > bCity) { return 1; }
        if (aCity < bCity) { return -1; }
        return 0;
      });
    }
    case SortingType.BY_COMPANY: {
      return usersCopy.sort((a, b) => {
        const aCompany = a.company.name;
        const bCompany = b.company.name;
        return aCompany.localeCompare(bCompany);
      });
    }
    default: {
      return usersCopy;
    }
  }
};

// eslint-disable-next-line import/prefer-default-export
export { sortUsers };
