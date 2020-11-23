import React from 'react'
import { useParams } from 'react-router-dom';

const User1 = () => {
    let { id } = useParams();
    console.log("🚀 ~ file: User1.js ~ line 6 ~ User1 ~ id", id)
    return (
        <div>
            {id}
        </div>
    )
}

export default User1
