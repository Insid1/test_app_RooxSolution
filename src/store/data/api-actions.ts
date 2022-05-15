import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import type { IUser } from 'types/user-types';
import { adaptDataToCLient, adaptDataToServer } from 'util/adapter';

const fetchUsers = createAsyncThunk(
  'data/users',
  async () => {
    const response = await api.get('');
    const adaptedData = response.data.map(adaptDataToCLient);
    return adaptedData;
  },
);

const fetchUser = createAsyncThunk(
  'data/currentUser',
  async (id: number) => {
    const response = await api.get(`${id}`);
    const adaptedData = adaptDataToCLient(response.data);
    return adaptedData;
  },
);

const postUser = createAsyncThunk(
  'data/user',
  async (user : IUser) => {
    const adaptedData = adaptDataToServer(user);
    const response = await api.put(`${user.id}`, adaptedData);
    return adaptDataToCLient(response.data);
  },
);

export { fetchUsers, fetchUser, postUser };
