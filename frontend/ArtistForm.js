import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArtistForm = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({ aid:'',aname: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the artist data to your API endpoint for creation
      await axios.post('http://localhost:8091/addartist', formData);

      // Redirect to the admin home page upon successful addition
      history('/adminhome');
    } catch (error) {
      console.error('Error adding artist:', error);
      // Handle errors if needed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Artist</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="aid" className="form-label">Artist id</label>
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
        <div className="mb-3">
          <label htmlFor="aname" className="form-label">Artist Name</label>
          <input
            type="text"
            className="form-control"
            id="aname"
            name="aname"
            value={formData.aname}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Artist</button>
      </form>
    </div>
  );
};

export default ArtistForm;
