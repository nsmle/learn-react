import { withAuth } from './../context/AuthContext'

const PrivateRoute = (props) => {
  const { Page, ...auth } = props;
  
  return (<Page {...auth} />);
}

export default withAuth(PrivateRoute);