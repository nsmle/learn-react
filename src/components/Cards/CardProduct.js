const CardProduct = ({ image }) => {
  return (
    <div className="aspect-video bg-gray-300 rounded-md shadow-md">
        <img className="w-full h-full object-cover" src={image} alt="" />
    </div>
  )
}

export default CardProduct