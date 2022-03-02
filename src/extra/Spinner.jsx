import React from 'react';
import { HashLoader } from "react-spinners";
const Spinner = () => {
    return (
        <div className='loader'>
            <HashLoader color='#329687' size={50} />

        </div>
    );
};

export default Spinner;