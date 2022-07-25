import { withGuest } from './../context/AuthContext'

const GuestRoute = (props) => {
  const { Page, ...prop } = props;
  
  return (<Page {...prop} />);
}

export default withGuest(GuestRoute)