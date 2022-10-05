import React, {useState} from 'react';
import './post.css';
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../dummyData";

const Post = ({value}) => {
    const [like,setlike] = useState(value.like);
    const [islike,setIsLiked] = useState(false);

    const likeHandler = () => {
        // console.log("before change : "+islike);
        setIsLiked(!islike);
        // console.log("testing : "+islike);
        islike? setlike(like-1):setlike(like+1);
    }

    // console.log(value);
    // const user = Users.filter(u => u.id===value.userId);    // like this we call data for the user from map
    // console.log(user)
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u => u.id===value.userId)[0].profilePicture} alt=""/>
                        <span className="postUserName">{Users.filter(u => u.id===value.userId)[0].username}</span>
                        <span className="postDate">{value.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{value?.desc}</span>
                    <img src={value.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.jpeg" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="likeCounter">{like} people liked it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{value.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;