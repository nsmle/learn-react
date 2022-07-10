export default function ButtonPrimary({ type, children, className, onClick }) {
  return (
    <button type={ type ?? 'button'}
       className={ (className ?? '') + " text-white bg-teal-600 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-200 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-90"}
         onClick={onClick}>
      {children}
    </button>
  )
}