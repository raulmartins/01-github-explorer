import "./styles.scss";


interface RepositoryItemProps {
  repository: {
    name: string,
    description: string, 
    html_url: string
  }
}



function RepositoryItem(props:RepositoryItemProps) {
  return (
    <ul>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>
      <a target="_blank" href={props.repository?.html_url}>
        {props.repository?.html_url}
      </a>
    </ul>
  );
}

export default RepositoryItem;
