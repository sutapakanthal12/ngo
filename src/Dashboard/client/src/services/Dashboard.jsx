import React, { useState } from 'react';
import { FaRegUser, FaUserAlt, FaHandsHelping, FaSeedling, FaUsers, FaHome } from 'react-icons/fa'; // Icons
import '../css/Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Toggle sidebar visibility
  const [selectedLogin, setSelectedLogin] = useState(null); // Track login selection (Admin/Donor)
  const [donorName, setDonorName] = useState(''); // Donor's name
  const [donorEmail, setDonorEmail] = useState(''); // Donor's email
  const [donorPassword, setDonorPassword] = useState(''); // Donor's password
  const [donorLoggedIn, setDonorLoggedIn] = useState(false); // Track if donor is logged in
  const [donorFoodSelection, setDonorFoodSelection] = useState({ foodType: '', quantity: 0 }); // Donor's food selection
  const [donorsList, setDonorsList] = useState([]); // List of all donors and their donations
  const [adminLoggedIn, setAdminLoggedIn] = useState(false); // Track if admin is logged in
  const [showDonorDetails, setShowDonorDetails] = useState(false); // Toggle donor details table visibility

  // Handle Admin Login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    setAdminLoggedIn(true); // Admin is logged in
    alert('Admin logged in successfully!');
  };

  // Handle Donor Login
  const handleDonorLogin = (e) => {
    e.preventDefault();
    if (donorEmail && donorPassword) {
      setDonorLoggedIn(true); // Donor is logged in
      alert('Donor logged in successfully!');
    } else {
      alert('Please provide email and password.');
    }
  };

  // Handle Donor Food Selection Change
  const handleFoodChange = (e) => {
    const { name, value } = e.target;
    setDonorFoodSelection({ ...donorFoodSelection, [name]: value });
  };

  // Handle Donor Food Donation
  const handleSubmitDonation = (e) => {
    e.preventDefault();
    if (!donorFoodSelection.foodType || donorFoodSelection.quantity <= 0) {
      alert('Please select food type and enter a valid quantity.');
      return;
    }

    // Add donor details and donation to the donors list
    const donor = {
      name: donorName,
      email: donorEmail,
      foodType: donorFoodSelection.foodType,
      quantity: donorFoodSelection.quantity,
    };

    setDonorsList([...donorsList, donor]); // Add donor's donation to the list

    // Clear the form fields after submission
    setDonorFoodSelection({ foodType: '', quantity: 0 });

    // Log out the donor after donation is submitted
    setDonorLoggedIn(false); // Donor logs out
    setDonorName('');
    setDonorEmail('');
    setDonorPassword('');

    alert(`Thank you ${donorName} for donating ${donorFoodSelection.quantity} kg of ${donorFoodSelection.foodType}`);
  };

  // Render Donor Details Table (for Admin and Donor)
  const renderDonorDetailsTable = () => {
    if (donorsList.length === 0) {
      return <p>No donations yet.</p>;
    }

    return (
      <table border="1" style={{ width: '100%', padding: '10px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Email</th>
            <th style={{ padding: '10px' }}>Food Type</th>
            <th style={{ padding: '10px' }}>Quantity (kg)</th>
          </tr>
        </thead>
        <tbody>
          {donorsList.map((donor, index) => (
            <tr key={index}>
              <td style={{ padding: '10px' }}>{donor.name}</td>
              <td style={{ padding: '10px' }}>{donor.email}</td>
              <td style={{ padding: '10px' }}>{donor.foodType}</td>
              <td style={{ padding: '10px' }}>{donor.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? '250px' : '60px',
          backgroundColor: '#2C3E50',
          height: '100vh',
          color: '#fff',
          transition: '0.3s',
        }}
      >
        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            padding: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            fontSize: '1.5rem',
          }}
        >
          {isSidebarOpen ? 'Close' : 'Open'} Sidebar
        </div>

        <ul style={{ padding: 0, listStyleType: 'none' }}>
          <li
            onClick={() => setSelectedLogin('admin')}
            style={{
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: selectedLogin === 'admin' ? '#34495E' : 'transparent',
            }}
          >
            <FaRegUser style={{ marginRight: '10px' }} /> Admin Login
          </li>
          <li
            onClick={() => setSelectedLogin('donor')}
            style={{
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: selectedLogin === 'donor' ? '#34495E' : 'transparent',
            }}
          >
            <FaUserAlt style={{ marginRight: '10px' }} /> Donor Login
          </li>

          {/* Donor List Section */}
          <li
            style={{
              padding: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => {
              // Show donor details when clicked
              setShowDonorDetails(true);
            }}
          >
            <FaUsers style={{ marginRight: '10px' }} /> Donor List
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>NGO Waste Food Management Dashboard</h1>

        {/* Render login forms based on selected login */}
        {selectedLogin === 'admin' && !adminLoggedIn && (
          <div>
            <h3>Admin Login</h3>
            <form onSubmit={handleAdminLogin}>
              <div style={{ marginBottom: '10px' }}>
                <label>Username:</label>
                <input type="text" placeholder="Enter admin username" style={{ width: '100%' }} />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Password:</label>
                <input type="password" placeholder="Enter admin password" style={{ width: '100%' }} />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {selectedLogin === 'donor' && !donorLoggedIn && (
          <div>
            <h3>Donor Login</h3>
            <form onSubmit={handleDonorLogin}>
              <div style={{ marginBottom: '10px' }}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={{ width: '100%' }}
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter donor email"
                  style={{ width: '100%' }}
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Password:</label>
                <input
                  type="password"
                  placeholder="Enter donor password"
                  style={{ width: '100%' }}
                  value={donorPassword}
                  onChange={(e) => setDonorPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        )}

        {selectedLogin === 'donor' && donorLoggedIn && (
          <div>
            <h3>Food Donation</h3>
            <form onSubmit={handleSubmitDonation}>
              <div style={{ marginBottom: '10px' }}>
                <label>Food Type:</label>
                <select
                  name="foodType"
                  value={donorFoodSelection.foodType}
                  onChange={handleFoodChange}
                  style={{ width: '100%' }}
                  required
                >
                  <option value="">Select Food Type</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Grains">Grains</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Quantity (kg):</label>
                <input
                  type="number"
                  name="quantity"
                  value={donorFoodSelection.quantity}
                  onChange={handleFoodChange}
                  min="1"
                  style={{ width: '100%' }}
                  required
                />
              </div>
              <button type="submit">Donate</button>
            </form>
          </div>
        )}

        {/* Donor List */}
        {(adminLoggedIn || showDonorDetails) && (
          <div>
            <h3>Donor Details</h3>
            {renderDonorDetailsTable()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
