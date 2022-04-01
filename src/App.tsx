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
import ManagerCategory from './pages/layouts/admin/categorys/ManagerCategory';
import { CategoryType } from './types/category';
import { createCates, listCates, removeCates, updateCates } from './api/category';
import CategoryAdd from './pages/layouts/admin/categorys/CategoryAdd';
import CategoryEdit from './pages/layouts/admin/categorys/CategoryEdit';

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
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  const onHandleAdd = async (product: ProductType) => {
    // call api
    const { data} = await add(product);
    console.log(data);
    setProducts([...products, data])
  }
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    setProducts(products.map((item) => (item._id == data._id ? data : item)));
  };
// end product


  const onHandleAddUser = async ( user : UserType) => {
    const {data} = await signup(user);
    console.log(data);
    setUsers([...users, data]);
    
  }
  // end user

  const [categorys, setCategorys] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCategorys = async () => {
      const { data } = await listCates();
      setCategorys(data);
    };
    getCategorys();
  }, []);
  const removeItemCates = async (id: number) => {
    // xoa tren API
    const { data } = await removeCates(id);
    data && setCategorys(categorys.filter((item) => item._id !== data._id));
  };
   const onHandleAddCates = async (category: ProductType) => {
     // call api
     const { data } = await createCates(category);
     setProducts([...categorys, data]);
   };
   const onHandleUpdateCates = async (category: CategoryType) => {
     console.log(category);
     const { data } = await updateCates(category);
     setProducts(categorys.map((item) => (item._id == data._id ? data : item)));
   };
  // end category

 
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
                <Route path=':id' element={<ProductDetailPage data={products}/>}/>
              </Route>
              <Route path='signin' element={<Signin/>}/>
              <Route path='signup' element={<Signup onAdd={onHandleAddUser}/>}/>
            </Route>

            {/*  */}

            <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="product">
                <Route index element={<ManagerProduct  data={products}  onRemoveItem={removeItem}/>}/>
                <Route  path="add"  element={<ProductAdd cates={categorys} onAdd={onHandleAdd} />}/>
                <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate}/>}/>
              </Route>
              <Route path='category'>
                <Route index element={<ManagerCategory data={categorys} removeCates={removeItemCates}/>}/>
                <Route  path="add"  element={<CategoryAdd onAddCates={onHandleAddCates} />}/>
                <Route path=":id/edit" element={<CategoryEdit  updateCates={onHandleUpdateCates}/>}/>
              </Route>
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
}



export default App
