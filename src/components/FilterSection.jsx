import { getData } from '../context/DataContext'

const FilterSection = () => {

  const {categoryOnlyData} = getData()

  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
      <input type="text" placeholder='Search...' className='bg-white p-2 rounded-md border-gray-400 border-2' />

      {/* category only */}
      <h1 className='mt-5 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
          categoryOnlyData?.map((item,index)=>{
            return <div key={index} className='flex gap-2 '>
              <input type="checkbox" />
              <button className='cursor-pointer uppercase'>{item}</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default FilterSection