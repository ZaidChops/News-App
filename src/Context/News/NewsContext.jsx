import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext=createContext()

export const NewsProvider=( {children})=>{

    const initialState={
        allNews:[]
    }

    const[state, newsDispach]=useReducer(NewsReducer, initialState)

    return(
        <NewsContext.Provider value={{...state, newsDispach}} >
            {children}
        </NewsContext.Provider> 
    )
}

export default NewsContext