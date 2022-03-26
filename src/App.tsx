import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { add, list, remove } from './api/product';
import { ProductType } from './types/product'
import axios from 'axios'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layouts/client/WebsiteLayout';
import Home from './pages/Home';
import ProductPage from "./pages/layouts/client/products/ProductPage";
import AdminLayout from './pages/layouts/admin/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/layouts/admin/products/ManagerProduct';
import ProductAdd from './pages/layouts/admin/products/ProductAdd';
import Signin from './pages/layouts/client/users/Signin';
import Signup from './pages/layouts/client/users/Signup';
import { UserType } from './types/user';
import { signin, signup } from './api/user';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  // const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      setProducts(data);
    }
    getProducts();
  },[])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }

  const onHandleAdd = async (product: ProductType) => {
    // call api
    const { data} = await add(product);
    setProducts([...products, data])
  }
  const onHandleAddUser = async ( user : UserType) => {
    const {data} = await signup(user);
    console.log(data);
    setUsers([...users, data]);
    
  }
  
  return (
    <div className="App">
      <hr></hr>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home />} />
              <Route path="product">
                <Route index element={<ProductPage />} />
              </Route>
              <Route path='/signin' element={<Signin/>}/>
              <Route path='/signup' element={<Signup onAdd={onHandleAddUser}/>}/>
            </Route>
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product" element={<ManagerProduct data={products} />}/>
              <Route  path="/admin/product/add"  element={<ProductAdd onAdd={onHandleAdd} />}/>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}



export default App
