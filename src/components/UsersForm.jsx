import React, { useEffect, useState } from 'react';
import axios from 'axios'

const UsersForm = ({ getuser, userSelected, deselectUser }) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")


    useEffect(() => {
        if (userSelected !== null) {
            setFirstName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }
    }, [userSelected])


    const submit = (e) => {
        e.preventDefault();
        alert('hice submit')
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }
        if (userSelected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getuser()
                    deselectUser()
                    reset()
                })
                .catch(error => console.log(error.response))
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => {
                    getuser()
                    reset()
                })
                .catch(error => console.log(error.response))
        }


        const reset = () => {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }

    }
    return (
        <div className='container-form'>
            <form onSubmit={submit}>
                <h1>New User</h1>
                <div>
                    <label htmlFor="firstName"><i class="fa-solid fa-user"></i></label>
                    <input
                        className='name'
                        type="text"
                        id='firstName'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input
                        className='lastname'
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />

                </div>
                <div>
                    <label htmlFor="email"><i class="fa-solid fa-square-envelope"></i></label>
                    <input
                        className='helper'
                        type="text"
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                    >
                        <i class="fa-solid fa-lock"></i>
                    </label>
                    <input
                        className='helper'
                        type="text"
                        id='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="birthday">
                        <i class="fa-solid fa-cake-candles"></i>
                    </label>
                    <input
                        className='helper'
                        type="date"
                        id='birthday'
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />
                </div>
                <button className='helper'>Submit</button>
            </form>
        </div>
    );
};

export default UsersForm;