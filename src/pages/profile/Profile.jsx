import React from 'react';
import './profile.css';
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
    return(
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="./assets/post/p5.jpg" alt="CoverImg" className="profileCoverImg" />
                            <img src="./assets/person/1.jpg" alt="ProfileImg" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Heet Kumar Kothadiya</h4>
                            <span className="profileInfoDesc">Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />             
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;