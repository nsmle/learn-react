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
  name: yup.string()
            .min(1, 'nama harus minimal 1 karakter')
            .matches(/^[aA-zZ\s]+$/, "nama harus hanya berisi huruf 'a-z'")
            .required('nama wajib di isi'),
  email: yup.string()
            .email('email harus berupa alamat email yang valid')
            .max(255, 'maksimal email harus 255 karakter')
            .required('email wajib di isi'),
  password: yup.string()
               .min(8, 'kata sandi harus minimal 8 karakter')
               .required('kata sandi wajib di isi'),
  passwordConfirmation: yup.string()
                           .oneOf([yup.ref('password'), null], 'Konfirmasi kata sandi harus sama dengan kata sandi')
                           .required('konfirmasi kata sandi wajib di isi'),
}).required();

const Login = () => {
  const isInitialMount = useRef(true);
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });
  
  useEffect(() => {
    // Register ref of react-hook-from
    if (isInitialMount.current) {
      register('name')
      register('email')
      register('password')
      register('passwordConfirmation')
      isInitialMount.current = false
    }
    
    // Show toast message error if any errors
    if (Object.entries(errors).length > 0) {
      const errorMsg = Object.entries(errors).map(error => {
        return ` ${error[1].message}`
      })
      
      toast.error(`Register gagal! ${errorMsg}`);
    }
  }, [errors, register])
  
  const onSubmit = () => {
    toast.success('Register berhasil.');
  };
  
  return (
    <AppLayout>
      <ToastContainer />
      <div className="container mx-4 mt-2">
        <div className="bg-slate-100 border border-slate-200/50 shadow-md shadow-blue-50 rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <h1 className="text-teal-500 text-center font-bold text-3xl mt-2 mb-6">Create Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-4">
              <FormInput id="name" name="name" type="name" label="Name" placeholder="Name" required="true" error={errors.name} onChange={e =>  setValue('name', e.target.value)} onClick={() => clearErrors('name')} />
              <FormInput id="email" name="email" type="email" label="Email" placeholder="Email" required="true" error={errors.email} onChange={e =>  setValue('email', e.target.value)} onClick={() => clearErrors('email')} />
              <FormInput id="password" name="password" type="password" label="Password" placeholder="Password" required="true" error={errors.password} onChange={e =>  setValue('password', e.target.value)} onClick={() => clearErrors('password')} />
              <FormInput id="passwordConfirmation" name="passwordConfirmation" type="password" label="Password Confirmation" placeholder="Password Confirmation" required="true" error={errors.passwordConfirmation} onChange={e =>  setValue('passwordConfirmation', e.target.value)} onClick={() => clearErrors('passwordConfirmation')}/>
            </div>
            <div className="w-full">
              <p className="items-center text-base text-slate-500/80">
                Already have an account?
                <Link className="mx-1 my-4 font-bold inline-block underline align-baseline text-base text-teal-500 hover:text-teal-600 active:scale-90" to="/login">
                  Login
                </Link>
              </p>
              <ButtonPrimary className="w-full" type="submit">
                Register
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  )
}

export default Login;
