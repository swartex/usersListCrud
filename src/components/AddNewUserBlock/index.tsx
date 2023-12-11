import { FC, useContext } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface AddNewUserBlockProps {}

const AddNewUserBlock: FC<AddNewUserBlockProps> = () => {
  conts ctx = useContext()

  return (
    <>
      <div className="flex items-center gap-10">
        <Input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <Button variant="secondary" onClick={handleAddUser}>
          Add User
        </Button>
      </div>
    </>
  );
};

export default AddNewUserBlock;
