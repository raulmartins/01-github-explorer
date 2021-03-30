import { useEffect, useState } from "react";
import "./styles.scss";
import RepositoryItem from "../RepositoryItem";

const repository = {
  name: "name repository",
  description: "description repository",
  link: "link repository",
};

function RepositoryList() {
  const [repositories, setRespositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/raulmartins/repos")
      .then((response) => response.json())
      .then((data) => setRespositories([...data]));
  }, []);

  return (
    <section>
      {repositories.map((repo, index) => (
        <RepositoryItem key={index} repository={repo} />
      ))}
    </section>
  );
}

export default RepositoryList;
