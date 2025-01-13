
import './App.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import About from './components/About';
import RootLayout from './layout/RootLayout';
import Login from './components/Login';
import ContactLayout from './layout/ContactLayout';
import Info from './components/Info';
import Form from './components/Form';
import NotFound from './components/NotFound';
import UserLayout from './layout/UserLayout';
import Users,{userLoader} from './components/Users';
import User from './components/User';




function App() {
  //creating browserrouotre
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path="contact" element={<ContactLayout/>}>
            <Route path="info" element={<Info/>}/>
            <Route path="form" element={<Form/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path="users" element={<UserLayout/>}>
         
          {/* before loading the uses componenent the loader will call after loading it will render the component */}
          <Route index element={<Users/>} loader={userLoader}/>
          {/* //:params */}
          <Route path=":id" element={<User/>}/>

          </Route>
    </Route>
    

  ))

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
