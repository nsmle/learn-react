import Input from './Input'

const FormInput = ({id, name, type, label, placeholder, error, onChange, onClick, required}) => {
  return (
    <div className="mb-4">
      <label className="block text-slate-500 text-sm font-bold mb-2" htmlFor={id}>
        {label}
        { required && (<span className="mx-1 text-red-500">*</span>) }
      </label>
      <Input id={id} name={name} type={type} placeholder={placeholder} error={error} onChange={onChange} onClick={onClick}/>
      <p className="mt-2 text-red-500 text-xs italic">{error?.message}</p>
    </div>
  )
}

export default FormInput;