import Input from './Input'
import { useFormContext } from 'react-hook-form'

const FormInput = ({name, type, label, placeholder, required}) => {
  const { formState: { errors } } = useFormContext()
  
  return (
    <div className="mb-4">
      <label className="block text-slate-500 text-sm font-bold mb-2" htmlFor={name}>
        {label}
        { required && (<span className="mx-1 text-red-500">*</span>) }
      </label>
      <Input name={name} type={type} placeholder={placeholder}/>
      <p className="mt-2 text-red-500 text-xs italic">{errors?.[name]?.message}</p>
    </div>
  )
}

export default FormInput;