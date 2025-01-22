import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import { RiTodoLine } from "react-icons/ri";
import { FiCalendar } from "react-icons/fi";
import { SlStar } from "react-icons/sl";
import { CiMap } from "react-icons/ci";
import { GrAchievement } from "react-icons/gr";
import profile_pic from '../assets/gitprofile.jpg';
import TaskProgress from './TaskProgress';
import { BsInfoCircle } from "react-icons/bs";
import { HiPlus } from "react-icons/hi2";
import { useSelector } from 'react-redux';

const Sidebar = ({isbar}) => {
  const tasks = useSelector((state) => state.tasks);
  let totaltask=tasks.length;
  let dummyimg="https://th.bing.com/th/id/OIP.1gGSCDGHNyVPOlwbE-mVkQHaEo?w=749&h=468&rs=1&pid=ImgDetMain"
  return (
    <div className={`sidebar ${isbar?'':` -translate-x-96`} transition-all duration-1000 ease-in-out max-sm:bg-green-300`} >
    <div className="profile">
      <div className="pic"><img src={dummyimg} alt="profile pic"/></div>
      <div className="name">Hello, Pritesh </div>
    </div>
    <nav className="navs">
      <Link to="/" className='linkstyle'><div><RiTodoLine/>  All Tasks</div></Link>
      <Link to="/today" className='linkstyle'><div><FiCalendar/> Today</div></Link>
      <Link to="/important" className='linkstyle'><div><SlStar/> Important</div></Link>
      <Link to="/scheduled" className='linkstyle'><div><CiMap/>Planned</div></Link>
      <Link to="/completed" className='linkstyle'><div><GrAchievement/>Completed</div></Link>
    </nav>
    <div className="add_list">
      <div className="plus"><HiPlus/></div>
      <div className="desc">Add List</div>
    </div>
    <div className="progress">
      <div className="cnt-task">
        <div className='row-1'>
          <div>Todays Task</div>
          <div><BsInfoCircle/></div>
        </div>
        <div className='row-2'>
        <span>{totaltask}</span>
        </div>
      </div>
      <div className='radial-bar'>
      <TaskProgress/>
      </div>
      <div className="bar_index">
        <div>
          <div className="clr clr1"></div>
          <p>Pending</p>
        </div>
        <div>
          <div className="clr clr2"></div>
          <p>Done</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;