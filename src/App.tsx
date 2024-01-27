import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  // },[])

  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
