/*import React from 'react'

import { useContext } from 'react';

import ShowContext from '../context/shows/showContext';

import Searchbar from '../components/Searchbar';
import Listitem from '../components/Listitem';
const Homepage = () => {
  const showContext=useContext(ShowContext);
  const {loading,show}=showContext;
  return (
    <div className='homepage'>
        <Searchbar />
    {loading ? (
    <h2> loading... </h2>
    ):(
     <div>
      {show.map((item) => ( 
      <Listitem 
      key={item.show.id}
      id={item.show.id}
      image={item.show.image ? item.show.image.medium : "https://www.google.com/search?q=no+image&rlz=1C1CHBD_enIN994IN994&oq=no+image&aqs=chrome..69i57j0i512l9.4306j0j15&sourceid=chrome&ie=UTF-8#imgrc=KDNppyUHocvEWM"}
      name={item.show.name}
      />))}
      </div>
     )}
    </div>
  )
}

export default Homepage*/
import { useContext } from "react";

// Context
import showContext from "../context/shows/showContext";

// Components
import Searchbar from "../components/Searchbar";
import ListItem from "../components/Listitem";

//import Loader from "../components/Loader";

const Homepage = () => {
  const showsContext = useContext(showContext);
  const { loading, shows } = showsContext;

  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (
        //<Loader />
        <h2>loading</h2>
      ) : (
        <div className="homepage__list">
          {shows.map((item) => (
            <ListItem
              key={item.show.id}
              id={item.show.id}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "no image"
                }
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "No rating"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;