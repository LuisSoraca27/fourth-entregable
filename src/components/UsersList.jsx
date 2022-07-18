import React from 'react';

const UsersList = ({ users, selectUser, deleteUser }) => {
    return (
        <div className='container-users'>
            {
                users.map(user => (
                    <div key={user.id} className='users'>
                        <div className='data-user'>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p><i class="fa-solid fa-envelope"></i>  {user.email}</p>
                            <p><i class="fa-solid fa-cake-candles"></i> {user.birthday}</p>
                        </div>
                        <div className='button-user'>
                            <button onClick={() => selectUser(user)}>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onClick={() => deleteUser(user.id)}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersList;