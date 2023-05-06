import { useState,useContext } from "react"

import showContext from "../context/shows/showContext";
import alertsContext from "../context/alerts/alertContext";

import Alert from "./Alert";


const Searchbar = () => {
    const[searchTerm,setsearchTerm]=useState("");
    const {searchShows}=useContext(showContext) ;

    const {alert,setAlert}=useContext(alertsContext);


    const onSearchHandler = (e)=>{
        e.preventDefault();

        if(searchTerm===""){
          setAlert("please enter something","danger");
        }else{
        searchShows(searchTerm);
        }
    };
  return (
    <div className="searchbar">
      {alert ? <Alert  message={alert.message} type={alert.type}/> : null}
        
        <form className="searchbar__form">
            <input type="text" placeholder="Search for Movie Show" 
            value={searchTerm}
            onChange={(e)=> setsearchTerm(e.target.value)}
            /><button className="btn btn-block"
            onClick={onSearchHandler}>Search</button>
    
        </form>
    </div>
  )
}

export default Searchbar