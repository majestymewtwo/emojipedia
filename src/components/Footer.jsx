import React from 'react'

const date = new Date().getFullYear();

function Footer(){
    return (
        <div className='absolute p-4 left-0 right-0 bottom-0 text-center text-white'>
            Copyright {date}
        </div>
    );
}

export default Footer;