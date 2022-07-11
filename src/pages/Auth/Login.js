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
            .max(255, 'email harus maksimal 255 karakter')
            .required('email wajib di isi'),
  password: yup.string()
               .min(8, 'kata sandi harus minimal 8 karakter')
               .required('kata sandi wajib di isi'),
}).required();

const Login = () => {
  const isInitialMount = useRef(true);
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
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
      
      toast.error(`Login gagal! ${errorMsg}`);
    }
  }, [errors, register])
  
  const onSubmit = () => {
    toast.success('Login berhasil.');
  };
  
  return (
    <AppLayout>
      <ToastContainer />
      <div className="container mx-4 mt-2">
        <div className="bg-slate-100 border border-slate-200/50 shadow-md shadow-blue-50 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h1 className="text-teal-500 text-center font-bold text-3xl mt-2 mb-6">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <FormInput id="email" name="email" type="email" label="Email" placeholder="Your Email" required="true" error={errors.email} onChange={e =>  setValue('email', e.target.value)} onClick={() => clearErrors('email')} />
              <FormInput id="password" name="password" type="password" label="Password" placeholder="Your Password" required="true" error={errors.password} onChange={e =>  setValue('password', e.target.value)} onClick={() => clearErrors('password')} />
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
        </div>
      </div>
    </AppLayout>
  )
}

export default Login;
