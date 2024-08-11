// src/components/InstaHeader.js
import React from 'react';
import { Link } from 'react-router-dom';

const profiles = [
  { id: 1, name: 'RomanRains...', img: 'https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/10/1109-Top-WWE-Superstars-Roman-Reigns.jpg?quality=86&strip=all' },
  { id: 2, name: 'Rock', img: 'https://cdn.wallpapersafari.com/25/26/DNRIx5.jpg' },
  { id: 3, name: 'Batista...', img: 'https://img.bleacherreport.net/img/images/photos/002/400/672/Batista_crop_exact.jpg?w=584&h=388&q=75' },
  { id: 4, name: 'John Cena...', img: 'https://m.media-amazon.com/images/M/MV5BMTQ5MzkzNTIyN15BMl5BanBnXkFtZTYwNzUzOTA2._V1_FMjpg_UX1000_.jpg' },
  { id: 5, name: 'Undertaker...', img: 'https://www.thesun.co.uk/wp-content/uploads/2018/09/NINTCHDBPICT000003896798.jpg' },
  { id: 6, name: 'Randy Orton...', img: 'https://www.wwe.com/f/styles/wwe_large/public/all/2024/01/RAW_11272023RC_63140--938cbd0f2e33a73f726e521767322a1f.JPG' },
  { id: 7, name: 'Ray Mysterio...', img: 'https://m.media-amazon.com/images/M/MV5BNGRhNmFhNjQtMGEwNi00NWZiLTk2NzAtNjVlMWU3MWJjMDczXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg' },
  { id: 8, name: 'Hulk...', img: 'https://m.media-amazon.com/images/M/MV5BMjAxMDQ1MDE0Ml5BMl5BanBnXkFtZTcwOTc0MTIyMw@@._V1_.jpg' },
  { id: 9, name: 'BatMan...', img: 'https://www.nzherald.co.nz/resizer/v2/J5DWYMRIVTMAWJR2PQ5DYFLTE4.jpg?auth=40b78c30ea9fc6134d7dc8f4ab9c926b19aa8db6b64490fcd5fd1adc79e00b29&width=576&height=613&quality=70&smart=true' },
  { id: 10, name: 'SuperGirl...', img: 'https://media.cnn.com/api/v1/images/stellar/prod/161010100828-supergirl-2.jpg?q=x_0,y_0,h_619,w_1100,c_fill/h_833,w_1480' },
 
];

const InstaHeader = () => {
  return (
    <div className="flex justify-start space-x-4 ml-4 p-4 bg-white">
      {profiles.map(profile => (
        <Link to={`/profile/${profile.name}`} key={profile.id}>
          <div className="flex flex-col items-center">
            <img
              src={profile.img}
              alt={profile.name}
              className="h-14 w-14 rounded-full border-2 border-pink-500 p-0.5"
            />
            <p className="text-xs mt-1 truncate max-w-[60px]">{profile.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InstaHeader;
