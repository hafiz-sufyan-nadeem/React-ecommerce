import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
    const [data,setData] = useState()

    // fetching all products from api
    const fetchAllProducts = async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.noksha.dev/api/products')
            console.log(res)
            const productsData = res.data.data
            setData(productsData)
        } catch(error) {
            console.log(error)
        }
    }

    const getUniqueCategory = (data, property) => {
            let newVariable = data?.map((curElem) =>{
                return curElem[property]
            })
            newVariable = ["All",...new Set(newVariable)]
            return newVariable
        }
    
        const categoryOnlyData = getUniqueCategory(data, "category")
    
    return <DataContext.Provider value={{data,setData, fetchAllProducts, categoryOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext)