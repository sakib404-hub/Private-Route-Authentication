import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Home = () => {

    const userInformation = useContext(AuthContext);
    console.log(userInformation);
    return (
        <div>
            This is the Home!
        </div>
    );
};

export default Home;