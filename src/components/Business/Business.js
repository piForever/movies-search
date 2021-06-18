import React from "react" ; 
import "./Business.css";

const movie = {
    imageSrc: '',
    name: 'Interstellar',
    companies: 'Paramount Pictures / Warner Bros. Pictures',
    city: 'United Kingdom / United States',
    category: 'Science Fiction',
    rating: 4.5,
    reviewCount: 90
};

class Business extends React.Component {
    render () {
        return (
            <div className="Business">
  <div className="image-container">
    <img src={movie.imageSrc} alt=''/>
  </div>
  <h2>{movie.name}</h2>
  <div className="Business-information">
    <div className="Business-companies">
      <p>{movie.companies}</p>
      <p>{movie.city}</p>
    </div>
    <div className="Business-reviews">
      <h3>{movie.category}</h3>
      <h3 className="rating">{movie.rating}</h3>
      <p>{movie.reviewCount} reviews</p>
    </div>
  </div>
</div>
        )
    }
}

export default Business; 