import {React, useState} from "react"

const AdminRegistration = () => {

    const[admin, setAdmin] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        gender: '',
        password: '',
    });

    const[errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setAdmin({
            ...admin,
            [name]: value,
        });
    };

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>LOGIN</h2>
                <br />
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={setAdmin.firstName} onChange={handleChange}/>
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={setAdmin.lastName} onChange={handleChange}/>
            </form>
        </div>
    );
} 