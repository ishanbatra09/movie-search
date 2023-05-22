import {useReducer} from "react";
import axios from "axios";
import ShowContext from './showContext';
import ShowReducer from './showReducer';
import{
    SEARCH_SHOWS,
    SET_LOADING,
    SET_SINGLE_SHOW,
    CLEAR_SINGLE_SHOW
} from '../types';
import React from 'react'

const ShowState = (props) => {
    const initialState={ 
        shows :[],
        singleShow:{},
        loading:false
    }
    
    const [state, dispatch] = useReducer(ShowReducer, initialState)
    const searchShows = async(searchTerm)=>{
        dispatch({type:SET_LOADING});
        
        const{data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

        console.log(data);
        dispatch({
            type:SEARCH_SHOWS,
            payload: data
        });
    };
    const getSingleShow = async (id) => {
        dispatch({
          type: SET_LOADING,
        });
    
        const { data } = await axios.get(`https://api.tvmaze.com/search/shows?q=${id}`);
    
        console.log(data);
    
        dispatch({
          type: SET_SINGLE_SHOW,
          payload: data,
        });
      };
      const clearSingleShow = () => {
        dispatch({
          type: CLEAR_SINGLE_SHOW,
        });
      };

  return (
    <ShowContext.Provider
    value={{
        shows:state.shows,
        singleShow:state.singleShow,
        loading:state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow
    }}
    >
        {props.children}
    </ShowContext.Provider>
  )
}

export default ShowState