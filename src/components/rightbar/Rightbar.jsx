import React from 'react';
import './rightbar.css';

export default function Rightbar(){
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Hector</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Bucky Roger</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Bucky Roger</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/3.jpg" alt="" className="rightbarProfileImg" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Bucky Roger</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}