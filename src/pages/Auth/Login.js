import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import AppLayout from './../../layouts/AppLayout'
import { ButtonPrimary } from './../../components/Buttons'
import * as yup from "yup";
import FormInput from './../../components/Form/FormInput'
import { useAuthContext } from './../../context/AuthContext'

const loginSchema = yup.object({
  email: yup.string().email().max(255).required(),
  password: yup.string().min(8).required(),
}).required();

const Login = () => {
  const AuthContext = useAuthContext()
  const methods = useForm({
    resolver: yupResolver(loginSchema)
  });
  
  const onSubmit = (user) => {
    toast.success('Login successful.');
    AuthContext.setUser(user)
  };
  
  return (
    <AppLayout>
      <ToastContainer />
      <div className="mx-4 mt-2">
        <div className="bg-slate-100 border border-slate-200/50 shadow-md shadow-blue-50 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h1 className="text-teal-500 text-center font-bold text-3xl mt-2 mb-6">Login</h1>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="my-4">
                <FormInput id="email" name="email" type="email" label="Email" placeholder="Your Email" required="true" />
                <FormInput id="password" name="password" type="password" label="Password" placeholder="Your Password" required="true"/>
              </div>
              <div className="w-full">
                <p className="items-center text-base text-slate-500/80">
                  Don't have an account?
                  <Link className="mx-1 my-4 font-bold inline-block underline align-baseline text-base text-teal-500 hover:text-teal-600 active:scale-90" to="/register">
                    Register
                  </Link>
                </p>
                <ButtonPrimary className="w-full" type="submit">
                  Login
                </ButtonPrimary>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </AppLayout>
  )
}

export default Login;
