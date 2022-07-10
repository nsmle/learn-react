const Input = (({id, name, type, placeholder, error, onChange}) => {
  return (
    <input className={ (error && 'border-red-500 ') + "border focus:border-teal-400 focus:placeholder:text-teal-600 bg-gray-50 shadow shadow-blue-50 outline-none appearance-none border rounded w-full py-2 px-3 text-slate-700 focus:bg-white" }
                  id={id}
                name={name}
                type={type}
         placeholder={placeholder}
            onChange={onChange} />
  )
})

export default Input;