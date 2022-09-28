import React from 'react';
import "./sidebar.css";
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from '@mui/icons-material';
import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../dummyData';

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
                    {
                        Users.map(u=>{
                            return(
                                <CloseFriend key={u.id} user={u} />
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

