import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SongForm = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({ sid:'',sname: '', aid: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the song data to your API endpoint for creation
     await axios.post('http://localhost:8091/addsong', formData);

      // Redirect to the admin home page upon successful addition
      history('/adminhome');
    } catch (error) {
      console.error('Error adding song:', error);
      // Handle errors if needed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="sid" className="form-label">Song id</label>
          <input
            type="text"
            className="form-control"
            id="sid"
            name="sid"
            value={formData.sid}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sname" className="form-label">Song sname</label>
          <input
            type="text"
            className="form-control"
            id="sname"
            name="sname"
            value={formData.sname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="aid" className="form-label">aid</label>
          <input
            type="text"
            className="form-control"
            id="aid"
            name="aid"
            value={formData.aid}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Song</button>
      </form>
    </div>
  );
};

export default SongForm;
