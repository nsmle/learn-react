const PublicRoute = (props) => {
  const { Page, ...prop } = props;
  
  return (<Page {...prop} />);
}

export default PublicRoute