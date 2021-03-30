import "./styles/global.scss";
import RepositoryList from "./components/RepositoryList";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <h1>Application Github Explorer</h1>
      <RepositoryList />
      <Counter />
    </>
  );
}

export default App;
