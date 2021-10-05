import React from "react" ; 
import "./Business.css";


class Business extends React.Component {
  render () {
    const {business} = this.props 
      return (
          <div className="Business">
<div className="image-container">
  <img src={`https://www.themoviedb.org/t/p/h100/${business.imageSrc}`} alt=''/>


</div>
<h2>{business.name}</h2>
<div className="Business-information">
  <div className="Business-address">
    
    <p>{business.date}</p>
    
  </div>
  <div className="Business-reviews">

    <h3 className="rating">Vote count {business.reviewCount}</h3>
    <p>Average vote  {business.rating}  </p>
  </div>
</div>
</div>
      )
  }
}

export default Business; 