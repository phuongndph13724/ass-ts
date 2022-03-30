import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { add, list, remove, update } from './api/product';
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
import ProductEdit from './pages/layouts/admin/products/ProductEdit';
import ProductDetailPage from './pages/layouts/client/products/ProductDetailPage';
import PrivateRouter from './components/PrivateRouter';

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
    console.log(data);
    // reRender
    data && setProducts(products.filter(item => item.id !== data._id));
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
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map((item) => (item.id == data.id ? data : item)));
  };
  return (
    <div className="App">
      <hr></hr>
      <div>
        <main>
          
          <Routes>
            <Route path="/" element={<WebsiteLayout />}>
              <Route index element={<Home  data={products}/>} />
              <Route path="product">
                <Route index element={<ProductPage data={products} />} />
                <Route path=':id' element={<ProductDetailPage/>}/>
              </Route>
              <Route path='signin' element={<Signin/>}/>
              <Route path='signup' element={<Signup onAdd={onHandleAddUser}/>}/>
            </Route>
            <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product">
                <Route index element={<ManagerProduct  data={products}  onRemoveItem={removeItem}/>}/>
                <Route  path="add"  element={<ProductAdd onAdd={onHandleAdd} />}/>
                <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}



export default App
