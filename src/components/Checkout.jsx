import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const course = useLoaderData();
    console.log(course);

    return (
        <div>
            <h2>cehck out page</h2>
        </div>
    );
};

export default Checkout;
