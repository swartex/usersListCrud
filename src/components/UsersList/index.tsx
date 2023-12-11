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
import UserStore from "../../store/UserStore";
import usersData from "../../data/users.json";
import { Button } from "../ui/button";
import { IUser } from "@/types/user";
import AddNewUserBlock from "../AddNewUserBlock";
import { Lock, Unlock } from "lucide-react";

const UsersList = observer(() => {
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

  const onEdit = (editedUser: any) => {
    const newName = prompt("Enter new name:", editedUser.name);
    if (newName) editedUser.editName(newName);
  };
  return (
    <>
      <div className="mb-6 mt-11">
        <AddNewUserBlock state={state} />
      </div>
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            {/* <TableHead>Email</TableHead> */}
            {/* <TableHead>Website</TableHead> */}
            {/* <TableHead>Phone</TableHead> */}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.users.map((user: IUser) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              {/* <TableCell>{user.email}</TableCell> */}
              {/* <TableCell>{user.website}</TableCell> */}
              {/* <TableCell>{user.phone}</TableCell> */}
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
                <Button
                  title={user.isBlocked ? "Unlock" : "Block"}
                  variant="outline"
                  onClick={() => user.toggleBlock()}
                >
                  {user.isBlocked ? <Unlock /> : <Lock />}
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
