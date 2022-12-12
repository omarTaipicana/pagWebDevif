import React, { useState } from 'react';
import FAMILIA2 from "../assets/images/FAMILIA2.png";
import YVSV from "../assets/images/YVSV.png";
import info_1 from "../assets/images/img-ig-c/info_1.jpeg";
import info_2 from "../assets/images/img-ig-c/info_2.jpeg";
import info_3 from "../assets/images/img-ig-c/info_3.jpeg";
import info_4 from "../assets/images/img-ig-c/info_4.jpeg";
import info_5 from "../assets/images/img-ig-c/info_5.jpeg";
import info_6 from "../assets/images/img-ig-c/info_6.jpeg";
import info_7 from "../assets/images/img-ig-c/info_7.jpeg";
import info_8 from "../assets/images/img-ig-c/info_8.jpeg";
import info_9 from "../assets/images/img-ig-c/info_9.jpeg";
import info_10 from "../assets/images/img-ig-c/info_10.jpeg";

const Home = () => {
    const [index, setIndex] = useState(0)

    const info = [info_1, info_2, info_3, info_4, info_5, info_6, info_7, info_8, info_9, info_10]
    return (
        <div className='home'>
            <div>
                <h2 className='home-title'>D E V I F</h2>             
                <div className='home-content'>
                    <div>
                        <img className='home-family' src={FAMILIA2} alt="" />
                    </div>
                    <div className='home-image'>
                        <i className="fa-solid fa-caret-left" onClick={index == 0 ? () => setIndex(0) : () => setIndex(index - 1)}></i>
                        <img src={info[index]} alt="" />
                        <i className="fa-solid fa-caret-right" onClick={index == info.length - 1 ? () => setIndex(0) : () => setIndex(index + 1)}></i>
                    </div>
                </div>
                <div className='yvsv-content'>
                <img className='yvsv' src={YVSV} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;