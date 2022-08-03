import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { bookContext } from "./Components/Context/BookContext";
import Navigation from "./Components/Navigation/Navigation";
import DetailsPage from "./Components/Pages/DetailsPage";
import HomePage from "./Components/Pages/HomePage";
import SearchPage from "./Components/Pages/SearchPage";

function App() {

  // const {setUser} = useContext(bookContext)

  // useEffect(()=>{
  //   const getUserData = () =>{
    
  //       fetch("http://localhost:5000/auth/login/success",{
  //         method:"GET",
  //         credentials:'include',
  //         headers:{
  //           Accept:"application/json",
  //           "Content-Type":"application/json",
  //           "Access-Control-Allow-Credentials":true
  //         }
  //     }).then(response => {
  //       if(response.status===200)
  //       return response.json();
  //       throw new Error("auth failed")
  //     }).then(resObj => {
  //       setUser(resObj.user)
  //       console.log(resObj.user)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  //   }
  //   getUserData()
  // },[])

  
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;