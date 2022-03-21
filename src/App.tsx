import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/Product';
import { Route, Routes } from 'react-router-dom';
import ProductManager from './pages/ProductManager';
import axios from 'axios';
import ProductAdd from './pages/ProductAdd';


function App() {
  const [products,setProducts] = useState<ProductType[]>();

  useEffect(() =>{
    const getProducts = async () => {
      const {data} = await axios.get('http://localhost:3001/products');
      setProducts(data);
      
    };
    getProducts();
  },[]);

  const onHandleRemove = (id:number) => {
    axios.delete('http://localhost:3001/products/' +id);
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: ProductType) => {
    const {data} = await axios.post('http://localhost:3001/products', product);
    setProducts({...products,data})
  }
  return (
    
    <div>
      <Routes>
        <Route path="/admin/product" element={<ProductManager products={products} onRemove={onHandleRemove}/>}/>
        <Route path="/admin/product/add" element={<ProductAdd onRemove={onHandleAdd}/>}/>
      </Routes>
    </div>
  )
}

export default App
