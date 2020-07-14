import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts';

export default configureStore({
  reducer: {
    posts: postReducer,
  },
});