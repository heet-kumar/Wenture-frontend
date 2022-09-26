import React from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import {Posts} from '../../dummyData';

export default function Feed(){
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/* <Post /> */}
                {
                    Posts.map(p => {
                        return <Post key={p.id} value={p} />
                    })
                }
            </div>
        </div>
    );
}