import React from "react"; 
import SearchBar from '../SearchBar/SearchBar'; 
import BusinessList from '../BusinessList/BusinessList';
import './App.css';
import Movies from "../Movies/Movies";

class App extends React.Component {
  constructor(props) {
super(props)  ; 

this.state = {
  businesses: []
};
this.searchMovies = this.searchMovies.bind(this);


  }
  
  searchMovies(term, location){
   Movies.search(term,location).then( businesses => {
     this.setState({ businesses  : businesses })
   });

  }
  render () {
    return (
      <div className="App">
    <h1>Film Seeker</h1>
    <SearchBar searchMovies = {this.searchMovies} />
    <BusinessList businesses = {this.state.businesses} />
  </div>
    );
  } 
}

export default App;

