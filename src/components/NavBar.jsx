import { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { fetchNews } from '../Context/News/NewsActions'
import NewsContext from '../Context/News/NewsContext'

const NavBar = () => {

  const[search, setSearch]=useState('')

  const {newsDispach}=useContext(NewsContext)

  const handleSearch=async (e)=>{
    e.preventDefault()
    const data = await fetchNews(search)
    

    newsDispach({
      type : "GET_NEWS",
      payload : data
    })
    setSearch("")
  }
   

  return (
    <>
     <nav class="navbar  bg-dark-subtle  d-flex justify-content-center">
       <h4 className="display-6 text-body-tertiary">Fifty Shades of News</h4>
    </nav>

<nav class="navbar navbar-expand-lg bg-transparent">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
      
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/About">About</Link>
        </li>
      
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/Contact">Contact</Link>
        </li>
      
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Politics</a></li>
            <li><a class="dropdown-item" href="#">Entertanment</a></li>
            <li><a class="dropdown-item" href="#">Sports</a></li>
            <li><a class="dropdown-item" href="#">Business</a></li>
            <li><a class="dropdown-item" href="#">International</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search" onSubmit={handleSearch}>
        <input class="form-control me-2" 
        type="search" 
        value={search}
        placeholder="Search" 
        aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}/>
        <button class="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar
