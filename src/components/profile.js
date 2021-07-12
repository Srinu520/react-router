import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";

function Profile() {
    const [users, setUsers] = useState([]);

    const history = useHistory()
    const location = useLocation()
    console.log(history)
    console.log(location)

    

    // async function  getFetch() {
    //             const fetchUsers = await fetch("https://gorest.co.in/public-api/users");
    //             const data = await fetchUsers.json();
    //             //return data
    //             //console.log(data.data[1].name)
    //             return data
    //        };

    useEffect(() => {
        fetch('https://gorest.co.in/public-api/users')
            .then(res => {
                //console.log(res)
                //setUsers(res.data)
                return res.json()
            })
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })

    }, []);
    console.log(users);

    return (
        <ul>
            {users.map(user => (
                <Link to={`/profile/${user.id}`} key={user.id}>
                    <li >{user.name}</li>
                </Link>
                
                
            ))}
        </ul>
    );
}

export default Profile;
