import defaultImage from '../assets/default.jpg'

const NewsCards = ({news}) => {

  

  return (
    <>
    <div class="card mb-3  p-2 shadow-sm " >
    <div class="row g-0">
      <div class="col-md-4">
        <img
        style={{height:"100%"}}
        src= {news.urlToImage ? news.urlToImage : defaultImage}
        className='img-fluid'
        alt='...' />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{news.title}</h5>
          <p class="card-text">{news.description}</p>
          <p class="card-text"><small class="text-body-secondary">{news.author}</small></p>
          <span className='d-flex justify-content-end '>
          <a href={news.url} target='_blank' className='text-decoration-none' >Know More</a>
          </span>
        </div>
      </div>
    </div>
  </div>
  
      
    </>
  )
}

export default NewsCards
