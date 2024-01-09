import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch songs from your API endpoint
    axios.get('http://localhost:8091/')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container-fluid" style={{ backgroundColor: 'white' }}>
      <div className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">Song List</span>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
      <div className="container mt-4" style={{ backgroundColor: 'skyblue' }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Artist Id</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
              <tr key={song.sid}>
                <td>{song.sname}</td>
                <td>{song.aid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
