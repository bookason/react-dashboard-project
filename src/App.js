// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Userlist from './pages/Userlist';
import User from './pages/User';
import "./App.scss"
import NewUser from './pages/NewUser';
import { useRef, useState } from 'react';

function App() {
  const myForm = useRef(null);

  const userdata = [
    {
      fistname: "",
      lastname: "",
      email: "",
      role: "",
      profileurl: "",
    },
  ];

  const [users, setUsers] = useState(userdata);

  const [data, setData] = useState([]);

  const [showuser, setShowUser] = useState(false);

  const [displayname, setDisplayName] = useState("");

  const [displayImage, setDisplayImage] = useState("");

  const postUsers = (e) => {

    e.preventDefault();

    myForm.current.reset();

    setData((prev) => [...prev, users]);

    setShowUser(true);

    setDisplayName(users.firstname);

    setDisplayImage(users.profileurl);
    console.log("users: ", users);

    console.log("data", data);
  };

  const handleUpdate = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log("users: ", users);
  };

  
  return (
   <div>
      <Navbar/>
      <div className="appContainer">
        <Sidebar className/>
        <div className="appContent">
          <Routes>
            <Route path = "/" element ={<Home/>}/>
            <Route path = "/users" element ={<Userlist data ={data}/>}/>
            <Route path = "/users/:id" element ={<User/>}/>
            <Route path = "/newuser" element ={<NewUser postUsers ={postUsers} handleUpdate ={handleUpdate} displayname={displayname} displayImage={displayImage} myForm={myForm} showuser ={showuser}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
