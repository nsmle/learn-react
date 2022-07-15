import { useRef, useState, useEffect } from 'react'
import AppLayout from './../layouts/AppLayout'
import CardProductsSwipeable from './../components/Cards/CardProductsSwipeable'

const Home = () => {
  const isInitialMount = useRef(true);
  const [foods, setFoods] = useState([])
  
  useEffect(() => {
    const handleGetFoods = async (foodCount) => {
      let foodList = []
      
      for (let i = 0; i <= foodCount; i++) {
        const apiUrl = 'https://foodish-api.herokuapp.com/api/'
        
        const food = await getFood(apiUrl);
        foodList = [
          ...foodList,
          food
        ]
      }
      
      setFoods(foodList);
    }
    
    
    if (isInitialMount.current) {
      handleGetFoods(2)
      isInitialMount.current = false;
    }
  }, [])
  
  const getFood = async (foodApiUri) => {
    const data = await fetch(foodApiUri)
      .then(res  => res.json())
      .then(data => data)
      .catch(error => console.Error(error))
      
    return data
  }
  
  return (
    <AppLayout>
      <div className="block my-8">
        <div className="flex justify-center grid grid-cols-1">
          <h1 className="my-4 text-center text-3xl text-teal-500 font-bold">
            Menu
          </h1>
          { foods.length > 0 ?
            (<CardProductsSwipeable products={foods} />) :
            (<div className="flex justify-center">
              <div className="block float-center h-64 w-8/12 md:w-96 rounded-lg bg-gray-200/80"></div>
            </div>)
          }
        </div>
        
        <div className="flex w-full justify-center mt-12">
          <div className="inline-flex w-10/12 justify-center grid grid-cols-1">
            <h1 className="my-4 text-center text-2xl text-teal-500 font-bold">
              Official Video
            </h1>
            <iframe className="w-full aspect-video bg-red-400 shadow-md rounded-lg" src="https://www.youtube.com/embed/uXWycyeTeCs" title="YouTube Embed Video"></iframe>
          </div>
        </div>
        
      </div>
    </AppLayout>
  )
}

export default Home;
