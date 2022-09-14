import React from 'react';
import "./sidebar.css";
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@mui/icons-material';

const arr = [
    {
        icon: <RssFeed className="sidebarIcon"/>,
        text: 'Feed'
    },
    {
        icon: <Chat className="sidebarIcon"/>,
        text: 'Chats'
    },
    {
        icon: <PlayCircleFilledOutlined className="sidebarIcon"/>,
        text: 'Videos'
    },
    {
        icon: <Group className="sidebarIcon"/>,
        text: 'Groups'
    },
    {
        icon: <Bookmark className="sidebarIcon"/>,
        text: 'Bookmarks'
    },
    {
        icon: <HelpOutline className="sidebarIcon"/>,
        text: 'Questions'
    },
    {
        icon: <WorkOutline className="sidebarIcon"/>,
        text: 'Jobs'
    },
    {
        icon: <Event className="sidebarIcon"/>,
        text: 'Events'
    },
    {
        icon: <School className="sidebarIcon"/>,
        text: 'Courses'
    }
];

export default function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    {
                        arr.map(id =>{
                            return(
                                <li key={id.text} className="sidebarListItem">
                                    {id.icon}
                                    <span className="sidebarListItemText">{id.text}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/person/2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

