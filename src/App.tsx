import "./index.css";
import { Observer } from "mobx-react-lite";
import UsersList from "./components/UsersList";

const App = () => {
  return <Observer>{() => <UsersList />}</Observer>;
};

export default App;
