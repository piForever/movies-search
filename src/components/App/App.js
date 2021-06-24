import React from "react"; 
import SearchBar from '../SearchBar/SearchBar'; 
import BusinessList from '../BusinessList/BusinessList';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
    <h1>Film seeker</h1>
    <SearchBar />
    <BusinessList />
  </div>
    );
  } 
}

export default App;
