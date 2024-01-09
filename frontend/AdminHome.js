import React ,{useState,useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

const AdminHome = () => {
const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('username')
    navigate('/');
  };
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
  }, []);
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">Admin Home</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/addartist" className="nav-link">Add Artist</Link>
          </li>
          <li className="nav-item">
            <Link to="/addsong" className="nav-link">Add Songs</Link>
          </li>
        </ul>
        <button className="btn btn-danger ms-auto" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  <div className="container-fluid" style={{ backgroundColor: 'white' }}>
      <div className="navbar navbar-dark bg-primary">
        <span className="navbar-brand mb-0 h1">Song List</span>
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
  </div>
  )
}

export default AdminHome