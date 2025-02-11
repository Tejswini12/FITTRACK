import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function ProfileHomePage() {
  // Sample workout activity data
  const workoutData = [
    { day: 'Mon', workouts: 2 },
    { day: 'Tue', workouts: 3 },
    { day: 'Wed', workouts: 1 },
    { day: 'Thu', workouts: 4 },
    { day: 'Fri', workouts: 2 },
    { day: 'Sat', workouts: 5 },
    { day: 'Sun', workouts: 3 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🏋️ User Gym Profile</h2>

      {/* Membership Section */}
      <div style={styles.section}>
        <h3>Membership Details</h3>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Joining Date:</strong> January 15, 2023</p>
        <p><strong>Plan:</strong> Premium (6 Months)</p>
      </div>

      {/* Workout Progress Graph */}
      <div style={styles.section}>
        <h3>Workout Progress (Weekly)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={workoutData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="workouts" fill="#007bff" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Diet Plan Section */}
      <div style={styles.section}>
        <h3>Diet Plan</h3>
        <p><strong>Calories Intake:</strong> 2200 kcal/day</p>
        <p><strong>Protein:</strong> 150g</p>
        <p><strong>Carbs:</strong> 200g</p>
        <p><strong>Fats:</strong> 70g</p>
      </div>

      {/* Fitness Goals */}
      <div style={styles.section}>
        <h3>Fitness Goals</h3>
        <ul>
          <li>🏆 Gain 5kg Muscle Mass</li>
          <li>🏃 Run 10km in 45 mins</li>
          <li>💪 Bench Press 100kg</li>
        </ul>
      </div>

      {/* Recent Activities */}
      <div style={styles.section}>
        <h3>Recent Activities</h3>
        <ul>
          <li>✅ Completed Chest & Triceps Workout (Yesterday)</li>
          <li>✅ Attended Yoga Session (2 Days Ago)</li>
          <li>✅ Personal Training Session with Coach (3 Days Ago)</li>
        </ul>
      </div>
    </div>
  );
}

// CSS Styles (Inline)
const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    color: '#007bff',
  },
  section: {
    backgroundColor: '#fff',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
};

