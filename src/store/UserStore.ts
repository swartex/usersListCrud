import { types } from "mobx-state-tree";
import UserModel from "../models/User";
import { IUser } from '../types/user';

const UserStore = types
  .model("UserStore", {
    users: types.array(UserModel),
  })
  .actions((self) => ({
    addUser(user: IUser) {
      self.users.push(user);
    },
    removeUser(user: IUser) {
      self.users.remove(user);
    },
  }));

export default UserStore;
