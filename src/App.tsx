import "./index.css";
import { Observer } from "mobx-react-lite";
import UsersList from "./components/UsersList";
import Container from "./components/Container";

const App = () => {
  return (
    <Container>
      <Observer>{() => <UsersList />}</Observer>
    </Container>
  );
};

export default App;
