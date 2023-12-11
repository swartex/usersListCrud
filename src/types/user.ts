export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  isBlocked: boolean;
  toggleBlock: () => void;
  editName: (newName: string) => void;
}
