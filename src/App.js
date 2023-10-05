import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import EmployeeList from './employees/EmployeeList';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './ProductSpecifications';
import RatingReviews from './RatingReviews'
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Users from './users/Users';
import Todo from './Todo';


function App() {
  const employeeInfo = {
    firstName: 'Lokesh',
    lastName: 'L',
    id: 9012,
    location: 'Madhapur',
    company: 'TCS'
  };

  const getInfo = () => {
    console.log('Get Info function is called');
  };

  return (
    <div className="App">
      <Navbar />
      {/* <h3>Fullname: {employeeInfo.firstName} {employeeInfo.lastName}</h3>
      <h3>Id: {employeeInfo.id}</h3>
      <h3>Location: {employeeInfo.location}</h3>
      <h3>Company: {employeeInfo.company}</h3>
      <button onClick={getInfo}>Get Info</button> */}
      <Routes>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product-details/:productId" element={<ProductDetails />}>
          <Route path="product-description" element={<ProductDescription />}></Route>
          <Route path="product-specifications" element={<ProductSpecifications />}></Route>
          <Route path="rating-reviews" element={<RatingReviews />}></Route>
        </Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}>  </Route>
        <Route path="/edit-profile" element={<EditProfile />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/todo' element={<Todo />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
