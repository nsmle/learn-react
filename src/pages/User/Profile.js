import AppLayout from './../../layouts/AppLayout'

const Profile = ({ user }) => {
  
  return (
    <AppLayout>
      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-8">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-6/12 p-4 pt-6 lg:order-2 flex justify-center">
                  <div className="relative h-36 w-36 md:h-64 md:w-64">
                    <img alt={user.name} src={user.picture.large} className="shadow-xl rounded-full h-full w-full align-middle border-none" />
                  </div>
                </div>
              </div>
              <div className="py-6">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-semibold leading-normal mb-2 text-slate-700 mb-2">
                    {user?.name}
                  </h3>
                  <div className="text-sm leading-normal -mt-2 mb-2 text-slate-400 font-bold">
                    {user.email}
                  </div>
                </div>
                <div className="mb-2 mt-10">
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Age
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.dob?.age}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Gender
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.gender}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Phone
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.phone}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Cell
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.cell}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Country
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.location.country}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      City
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.location.city}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      State
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.location.state}
                    </p>
                  </div>
                  <div className="flex">
                    <span className="w-4/12 text-md text-slate-400">
                      Post Code
                    </span>
                    <p className="w-8/12 text-base text-slate-600">
                      {user.location.postcode}
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Profile;
