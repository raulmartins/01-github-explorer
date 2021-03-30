import { useEffect, useState } from "react";
import "./styles.scss";
import RepositoryItem from "../RepositoryItem";

interface Repository {
  name:string, 
  description: string,
  html_url: string
};



function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/raulmartins/repos")
      .then((response) => response.json())
      .then((data) => setRepositories([...data]));
  }, []);

  return (
    <section>
      {repositories.map((repo) => (
        <RepositoryItem key={repo.name} repository={repo} />
      ))}
    </section>
  );
}

export default RepositoryList;
