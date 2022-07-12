import AppLayout from './../../layouts/AppLayout'
import { withAuth } from './../../context/AuthContext'

const Profile = ({ user : { email } }) => {
  return (
    <AppLayout>
      <div className="block">
        <h1 className="mt-12 text-center text-3xl text-teal-500 font-bold underline">
          Your Account
        </h1>
        <p className="mt-4 text-center text-sm text-teal-700 font-bold">
          Email : 
          <span className="mx-1 text-teal-600 font-base">{ email }</span>
        </p>
      </div>
    </AppLayout>
  )
}

export default withAuth(Profile);
