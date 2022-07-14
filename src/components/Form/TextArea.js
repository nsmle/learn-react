import { useFormContext } from 'react-hook-form'

const TextArea = (({name, rows, placeholder}) => {
  const { register, formState: { errors } } = useFormContext()
  
  return (
    <textarea className={ (errors?.[name] && 'border-red-500 placeholder:text-red-400') + " border focus:border-teal-400 focus:placeholder:text-teal-600 bg-gray-50 shadow shadow-blue-50 outline-none appearance-none border rounded w-full py-2 px-3 text-slate-700 focus:bg-white" }
                  id={name}
                rows={rows}
         placeholder={placeholder}
         {...register(name)}></textarea>
  )
})

export default TextArea;