export default function ButtonDanger({ type, children, className, onClick }) {
  return (
    <button type={ type ?? 'button'}
       className={ (className ?? '') + " text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-90"}
         onClick={onClick}>
      {children}
    </button>
  )
}