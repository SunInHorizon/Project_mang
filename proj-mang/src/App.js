import './App.css';
import {React, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router";


function App() {
  const[adminData, setAdminData] = useState({
    name: '',
    email: '',
    contact: '',
    gender: '',
    password:'',
  })

  const[errors, setError] = useState({});
  const[data, setData] = useState({});
  const[user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser)
      if (currentuser) {
        fetchData();
      } else {
        setData([]);
      }
    });
  }, []);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(database, "users"));
    const documents = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    setData(documents);
  }
}
export default App;
