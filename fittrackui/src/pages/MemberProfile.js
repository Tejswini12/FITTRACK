import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function UserProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear user data
    navigate("/users/signin"); // Redirect to login
  };

  // Static user activity data
  const activityData = [
    { name: 'Mon', activity: 5 },
    { name: 'Tue', activity: 8 },
    { name: 'Wed', activity: 12 },
    { name: 'Thu', activity: 7 },
    { name: 'Fri', activity: 15 },
    { name: 'Sat', activity: 10 },
    { name: 'Sun', activity: 6 },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h3 style={styles.sidebarHeader}>User Menu</h3>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>
            <a href="/memeberHomePage" style={styles.sidebarLink}>Home</a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="/profilePage" style={styles.sidebarLink}>Profile</a>
          </li>
          <li style={styles.sidebarItem}>
            <a href="/memberupdateprofilepage" style={styles.sidebarLink}>Edit Profile</a>
          </li>
          <li style={styles.sidebarItem}>
            <Button onClick={handleLogout} variant="danger" style={styles.logoutButton}>Logout</Button>
          </li>
        </ul>
      </div>

      {/* Activity Graph */}
      <div style={styles.content}>
        <h2>Fitness Tracker</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="activity" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#343a40',
    color: 'white',
    padding: '20px',
  },
  sidebarHeader: {
    fontSize: '20px',
    marginBottom: '20px',
  },
  sidebarList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  sidebarItem: {
    marginBottom: '15px',
  },
  sidebarLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
  logoutButton: {
    width: '100%',
    padding: '10px',
  },
  content: {
    flex: '1',
    padding: '30px',
    backgroundColor: '#f8f9fa',
  },
};

