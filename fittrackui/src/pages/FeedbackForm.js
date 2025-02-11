import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    email: '',
    memberName: '',
    description: '',
    ratings: '1',
  });

  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/member/addFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Feedback submitted successfully!');
            navigate("/memberProfile");
      } else {
        alert('There was an issue submitting your feedback.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="memberName" style={styles.label}>Member Name:</label>
        <input
          type="text"
          id="memberName"
          name="memberName"
          value={formData.memberName}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="description" style={styles.label}>Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
          required
        ></textarea>

        <label htmlFor="ratings" style={styles.label}>Ratings (1-5):</label>
        <select
          id="ratings"
          name="ratings"
          value={formData.ratings}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          type="submit"
          value="Submit Feedback"
          style={styles.submitButton}
        />
      </form>
    </div>
  );
}

const styles = {
  formContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: 'auto',
    marginTop: '100px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  label: {
    display: 'block',
    margin: '8px 0 4px',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
    height: '100px',
  },
  select: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
    borderRadius: '4px',
  },
};

export default FeedbackForm;
