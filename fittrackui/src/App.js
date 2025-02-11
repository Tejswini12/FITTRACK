
import MyHeader from './components/MyHeader';
import './App.css';
import MyFooter from './components/MyFooter';
import MainNavBar from './components/MainNavBar';
import { Route,Routes,Navigate} from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Admin_Dashboard from './pages/Admin_Dashboard';
import AdminNavBar from './components/AdminNavBar';
import AdminFrontPage from './pages/AdminFrontPage';
import BmiCalculator from './pages/BmiCalculator';
import { useEffect, useState } from 'react';
import MemberNavBar from './components/MemberNavBar';
import Member_dashboard from './pages/Member_dashboard';
import PackagesPage from './pages/PackagesPage';
import TrainerPage from './pages/TrainerPage';
import PackageViewPage from './pages/PackageViewPage';
import PackageEditPage from './pages/PackageEditPage';
import AddNewPackagePage from './pages/AddNewPackagePage';
import MembershipPage from './pages/MembershipPage';
import ProfilePage from './pages/ProfilePage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import AddNewTrainer from './pages/AddNewTrainer';
import TrainerEditForm from './pages/TrainerEditForm';
import TrainerViewPage from './pages/TrainerViewPage';
import OTPVerification from './pages/OTPVerification';
import MemberPage from './pages/MemberPage';
import Payment from './pages/Payment';
import MemberProfile from './pages/MemberProfile';
import FeedbackForm from './pages/FeedbackForm';
import ProfileMemberPage from './pages/ProfileMemberPage';
import ProfileHomePage from './pages/ProfileHomePage';
import MemberDetailsUpdatePage from './pages/MemberDetailsUpdatePage';
import Product from './pages/Products';
import CartPage from './pages/CartPage';
import DummyProduct from './pages/DummyProduct';


function App() {
  const [userRole,SetUserRole]=useState(null);
  useEffect(()=>{
    const role=localStorage.getItem('role');
    SetUserRole(role);
  },[]);
  const renderNavBar=()=>{
    if(userRole==='ADMIN'){
      return <AdminNavBar/>;
    }else if(userRole==="CUSTOMER"){
      return <MemberNavBar/>;
    }else{
      return <MainNavBar/>;
    }
  };
  return (
    <div>
<MyHeader></MyHeader>
<MainNavBar></MainNavBar>
{/* {renderNavBar()} */}
<Routes>
  <Route path="/" element={<Navigate replace to="/home"></Navigate>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
  <Route path="/users/signin" element={<SignIn></SignIn>}></Route>

  <Route path="/admin_Dash" element={<Admin_Dashboard></Admin_Dashboard>}></Route>
    <Route path="/bmicalculator" element={<BmiCalculator></BmiCalculator>}></Route>
    <Route path='/getAllMembers' element={<MemberPage></MemberPage>}></Route>
    <Route path='/getAllPackages' element={<PackagesPage></PackagesPage>}></Route>
    <Route path='/getAllTrainers' element={<TrainerPage></TrainerPage>}></Route>
    <Route path='/packages/:id' element={<PackageEditPage></PackageEditPage>}></Route>
    <Route path='/packages/view/:id' element={<PackageViewPage></PackageViewPage>}></Route>
    <Route path='/packageform' element={<AddNewPackagePage></AddNewPackagePage>}></Route>
    <Route path='/getMemberShip' element={<MembershipPage></MembershipPage>}></Route>
    <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
  {/* <Route path="/Admin_Dashboard" element={<AdminNavBar></AdminNavBar>}></Route> */}
  <Route path='/member_dash' element={<Member_dashboard></Member_dashboard>}></Route>
  <Route path='/users/signup' element={<SignUp></SignUp>}></Route>
  <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path='/trainerform' element={<AddNewTrainer></AddNewTrainer>}></Route>
<Route path='/updatetrainer/:id' element={<TrainerEditForm></TrainerEditForm>}></Route>
<Route path='/trainers/view/:id' element={<TrainerViewPage></TrainerViewPage>}></Route>
<Route path='/getMemberShip' element={<MembershipPage></MembershipPage>}></Route>
<Route path='/otpverification' element={<OTPVerification></OTPVerification>}></Route>
<Route path='/payment' element={<Payment></Payment>}></Route>
<Route path='/memberProfile' element={<MemberProfile></MemberProfile>}></Route>
<Route path='/feedback' element={<FeedbackForm></FeedbackForm>}></Route>
<Route path='/profilePage' element={<ProfileMemberPage></ProfileMemberPage>}></Route>
<Route path='/memeberHomePage' element={<ProfileHomePage></ProfileHomePage>}></Route>
<Route path='/memberupdateprofilepage' element={<MemberDetailsUpdatePage></MemberDetailsUpdatePage>}></Route>
<Route path='/products' element={<Product></Product>}></Route>
<Route path='/cart' element={<CartPage></CartPage>}></Route>
<Route path='/gymproduct' element={<DummyProduct></DummyProduct>}></Route>
</Routes>
<MyFooter></MyFooter>
    </div>
  );
}

export default App;


