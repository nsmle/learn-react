import { useRef, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import AppLayout from './../../layouts/AppLayout'
import { ButtonPrimary } from './../../components/Buttons'
import * as yup from "yup";
import FormInput from './../../components/Form/FormInput'

const loginSchema = yup.object({
  email: yup.string()
            .email('email harus berupa alamat email yang valid')
            .max(255, 'kata sandi harus maksimal 255 karakter')
            .required('email wajib di isi'),
  password: yup.string()
               .min(8, 'kata sandi harus minimal 8 karakter')
               .required('kata sandi wajib di isi'),
}).required();

const Login = () => {
  const isInitialMount = useRef(true);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });
  
  useEffect(() => {
    // Register ref of react-hook-from
    if (isInitialMount.current) {
      register('email')
      register('password')
      isInitialMount.current = false
    }
    
    // Show toast message error if any errors
    if (Object.entries(errors).length > 0) {
      const errorMsg = Object.entries(errors).map(error => {
        return ` ${error[1].message}`
      })
      
      toast.error(`Login gagal. ${errorMsg}`);
    }
  }, [errors, register])
  
  const onSubmit = () => {
    toast.success('Login berhasil');
  };
  
  return (
    <AppLayout>
      <ToastContainer />
      <div className="container mx-4 mt-2">
        <div className="bg-slate-100 border border-slate-200/50 shadow-md shadow-blue-50 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h1 className="text-teal-500 text-center font-bold text-2xl mt-2 mb-6">Please Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <FormInput id="email" name="email" type="email" label="Email" placeholder="Your Email" error={errors.email} onChange={e =>  setValue('email', e.target.value)}/>
              <FormInput id="password" name="password" type="password" label="Password" placeholder="Your Password" error={errors.password} onChange={e =>  setValue('password', e.target.value)}/>
            </div>
            <div className="w-full">
              <Link className="my-4 inline-block underline align-baseline text-sm text-blue-500 hover:text-blue-700" to="/register">
                Don't have an account?
              </Link>
              <ButtonPrimary className="w-full" type="submit">
                Login
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

export default Login;
