import React,{ useContext, useEffect } from 'react'
import NewsCards from './NewsCards'
import NewsContext from '../Context/News/NewsContext'
import { fetchNews } from '../Context/News/NewsActions'


const NewsList = () => {
  const{allNews, newsDispach}=useContext(NewsContext)

  const getData= async(topic)=>{
    const data= await fetchNews(topic)
    newsDispach({
      type:"GET_NEWS",
      payload: data
    })
  }

  useEffect(()=>{
    getData("India")
  },[])

  if(!allNews || allNews.length === 0){
    return(
      <h1 className='display-5 text-center col-md-8 col-sm-12'>Loading....</h1>
    )
  }

  return (
    <div className='col-md-8 col-sm-12'>
      
      {allNews.map((news, index)=>(<NewsCards key={index} news={news}/>))}
      
    
    </div>
  )
}

export default NewsList
