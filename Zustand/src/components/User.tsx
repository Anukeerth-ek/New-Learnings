import React, { useEffect } from "react";
import { userDetails } from "../userDetails";

const User = () => {
     const { user, loading, error, fetch }:any = userDetails();
    useEffect(() => {
            fetch(1)
    }, [fetch])
    console.log('user', user)
    if (loading) return <div>Loading..</div>
    if(error) return <div>Failed to load content</div>
    return (
        <div>
            {user&& user.map((item:any) => {
                <div>
                    <h2>{item.firstName}</h2>
                    <p>{ item.email}</p>
                    </div>
            })}
         </div>
     );
};

export default User;
