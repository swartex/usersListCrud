import { ChangeEvent, FC, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import UserModel from "@/models/User";
import { randomId } from "@/utils/randomId";

interface AddNewUserBlockProps {
  state: any;
}

const AddNewUserBlock: FC<AddNewUserBlockProps> = ({ state }) => {
  const [newUserName, setNewUserName] = useState("");
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
    setNewUserName("");
  };

  return (
    <>
      <div className="flex items-center gap-10">
        <Input
          type="text"
          value={newUserName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNewUserName(e.target.value)
          }
        />
        <Button variant="secondary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
    </>
  );
};

export default AddNewUserBlock;
