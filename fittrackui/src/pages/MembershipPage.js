import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MembershipPage() {
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        fees: ''
    });
    const navigate=useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/member/addMember', formData);
           // alert(response.data);
                  navigate("/payment");
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Fees:</label>
                <input
                    type="number"
                    name="fees"
                    value={formData.fees}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Add Member</button>
        </form>
    );
}

export default MembershipPage;

