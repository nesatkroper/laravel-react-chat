import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "@/app/counter/counterSlice";
import userReduce from "@/app/user/userSlice";

export default configureStore({
  reducer: {
    user: userReduce,
  },
});
