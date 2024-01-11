// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImages = () => {
fetch(
      `https://api.unsplash.com/search/photos?client_id=mtmVjlZVowBLDttrAKdnfNw3HbJ4AhFHfGufiNWaYKM&query=${value}&orientation=squarish&username&html`
    )

      .then((res) => res.json())

      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  };

  return (
    <>
      <div className="App">
        <div className="myDiv">
          <span className="heading">Search</span>


          <input 
            style={{ width: "100%" }}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <br/>
          <br/>

          <button 
            className="btn btn-primary"
            onClick={() => fetchImages()}
          >
            Send
          </button>
          
        
        </div>



        <div className="container mt-3">
          <div className="row mb-5">
          
              {results.map((item) => {
                return (
                  
                  <div className="col-md-4 mb-5">
                    <div className="card">
                    <img 
                      className="card-img-top"
                      alt="image not found"
                      key={item.id}
                      src={item.urls.regular}
                      
                      />

                    <div className="card-body">

                    <h5 className="card-title user-1">
                      Photographer:  {item.user.username}
                    </h5>

                    <h5 className="card-text user-2">
                      Username: {item.user.username}
                    </h5>

                    <h5 className="card-text user-3">
                      User Profile:  <a href="..." className="link-1">
                        {item.user.links.html}
                        </a> 
                      
                    </h5>
                    
                  </div>
                  </div>
                    </div>
                  
                );
              })}
          
              </div>
              </div>
        
          </div>
    
    </>
  );
}

export default App;
