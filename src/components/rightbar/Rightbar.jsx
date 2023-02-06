import React from 'react';
import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}){

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Hector</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map(u=>(
                            <Online key={u.id} user={u}/>
                        ))
                    }
                </ul>
            </>
        );
    }

    const ProfileRightbar = () => {
        return(
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Junagadh</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Warsaw</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpg" alt="person" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Heet Kothadiya</span>
                    </div>
                </div>
            </>
        );
    }

    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/>:<HomeRightbar/>}
            </div>
        </div>
    );
}