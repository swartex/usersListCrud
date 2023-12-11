import { observer, useLocalObservable } from "mobx-react-lite";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import UserStore from "../../store/UserStore";
import UserModel from "../../models/User";
import usersData from "../../data/users.json";
import { randomId } from "../../utils/randomId";
import { Button } from "../ui/button";
import { IUser } from "@/types/user";

const UsersList = observer(() => {
  const [newUserName, setNewUserName] = useState("");

  const defaultUsers = usersData.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email || "",
    phone: user.phone || "",
    website: user.website || "",
    isBlocked: user.isBlocked || false,
  }));

  const state = useLocalObservable(() =>
    UserStore.create({ users: defaultUsers })
  );

  const handleAddUser = () => {
    const newUser = UserModel.create({
      id: randomId(),
      name: newUserName,
      email: "",
      phone: "",
      website: "",
      isBlocked: false,
    });
    state.addUser(newUser);
  };

  const onEdit = (editedUser: any) => {
    const newName = prompt("Enter new name:", editedUser.name);
    if (newName) editedUser.editName(newName);
  };
  return (
    <>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.users.map((user: IUser) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.website}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell className="flex gap-4">
                <Button
                  disabled={user.isBlocked}
                  variant="default"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </Button>
                <Button
                  disabled={user.isBlocked}
                  variant="destructive"
                  onClick={() => state.removeUser(user)}
                >
                  Delete
                </Button>
                <Button variant="outline" onClick={() => user.toggleBlock()}>
                  {user.isBlocked ? "Unblock" : "Block"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
});

export default UsersList;
