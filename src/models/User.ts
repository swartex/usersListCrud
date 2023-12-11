import { types } from "mobx-state-tree";
import { randomId } from '../utils/randomId';

const UserModel = types
  .model("User", {
    id: types.optional(types.number, randomId()),
    name: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    website: types.optional(types.string, ""),
    phone: types.optional(types.string, ""),
    isBlocked: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    toggleBlock() {
      self.isBlocked = !self.isBlocked;
    },
    editName(name: string) {
      self.name = name;
    },
  }));

export default UserModel;
