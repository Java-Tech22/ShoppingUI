import React from 'react';
import '../styles.css';

export default function Header () {
    return (

        <div className='header'>
            <img className='logo' src='/images/headerImage.png' alt="product_image"/>
            <p className='app-subtitle'> Lets begin shopping</p>
        </div>

    );
}