export default function ButtonDangerOutline({ type, children, className, onClick }){
  return (
    <button type={ type ?? 'button'}
       className={ (className ?? '') + " text-red-600 border border-red-600 hover:bg-red-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-90"}
         onClick={onClick}>
      {children}
    </button>
  )
}