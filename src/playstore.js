import GooglePlay from './photos/GooglePlay.png';
import Microsoft from './photos/Microsoft.png';
import React from 'react';

const playstore = () =>{
    return(
        <div className="flex justify-center mt-4">
                <img src={GooglePlay} alt="Get it on Google Play" className="w-32 mr-2" />
                <img src={Microsoft} alt="Get it from Microsoft" className="w-32" />
              </div>
    );
};
export default playstore;