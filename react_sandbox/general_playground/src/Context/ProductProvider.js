import React, {useState, useEffect} from "react"
import axios from "axios"


export const ProductContext = React.createContext()


const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function ProductProvider(props){
    
    const [products, setProduct] = useState({allProducts: [], userProducts: []})

        function getAllProducts(){
            // userAxios.get("/api/product")
            // .then(res => {
            //     setProduct(prevState => ({
            //         ...prevState,
            //         allProducts: res.data
            //     }))
            // })
            // .catch(err => console.log(err.response.data.errMsg))
            setProduct(prevState => ({
                ...prevState,
                allProducts: {name: 'all'}
            }))
        }
    
        function getUserProducts(){
            // userAxios.get("/api/product/user")
            // .then(res => {
            //     setProduct(prevState => ({
            //         ...prevState,
            //         userProducts: res.data
            //     }))
            // })
            // .catch(err => console.log(err.response.data.errMsg))
            setProduct(prevState => ({
                ...prevState,
                userProducts: {name: 'user'}
            }))
        }
        
    
        // function addProduct(newProduct) {
        //     console.log(newProduct)
        //     userAxios.post("/api/product", newProduct)
        //     .then(res => {
        //         setProduct(prevState => ({
        //             ...prevState,
        //             product: [...prevState.product, res.data]
        //         }))
        //     })
        //     .catch(err => console.log(err.response.data.errMsg))
        // }
    
        // function deleteProduct(_id) {
        //     axios.delete(`/product/:productId`)
        //     .then(() => {
        //         setProduct(prevProducts => {
        //             return prevProducts.filter((product) =>  product._id !== _id)
        //         })
        //     })
        //     .catch(err => console.log(err))
        // }
    
        // function editProduct(updates, productId) {
        //     axios.put(`/product/${productId}`, updates)
        //     .then(res => {
        //         setProduct(prevProducts => prevProducts.map(product => product._id !== productId ? product : res.data)) 
        //     })
        //     .catch(err => console.log(err))
        // } 
        // useEffect(() => {
        //     getUserProducts()
        //     getAllProducts()
        // })
    
    
    return (

        <ProductContext.Provider
            value={{
                products,
                // addProduct,
                // deleteProduct,
                // editProduct,
                getAllProducts,
                getUserProducts
            }}>

            { props.children }

        </ProductContext.Provider>
    )
}