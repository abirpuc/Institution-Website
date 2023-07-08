import React from 'react';
import './navbar.css'
import { NavItems } from '../../Data/Navbar';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='nav-bar-container'>
            <div className='nav-bar'>
                <Link className='nav-item home' to="/"><i className="fa-sharp fa-solid fa-house-chimney"></i></Link>
                <Link className='nav-item nav-item-campus' to="/">ক্যাম্পাস
                    <div className='hover-items-container dropdown-campus'>
                        <div className="hover-items">
                            <Link to="/collage" className='hover-item'>আমাদের কলেজ</Link>
                            <Link to="/history" className='hover-item'>ইতিহাস</Link>
                            <Link to="/academic-structure" className='hover-item'>লক্ষ্য ও উদ্দেশ্য</Link>
                            <Link to="/academic-infrastructure" className='hover-item'>প্রাতিষ্ঠানিক কাঠামো</Link>
                            <Link to="/academic-infrastructure" className='hover-item'>প্রাতিষ্ঠানিক অবকাঠামো</Link>
                            <Link to="/information-of-purity" className='hover-item'>শুদ্ধাচার সংক্রান্ত তথ্য</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item vorthi' to="/">ভর্তি
                    <div className='hover-items-container dropdown-vorthi'>
                        <div className="hover-items">
                            <Link className='hover-item' to="/application-process">আবেদন প্রক্রিয়া</Link>
                            <Link className='hover-item' to="/admission-test">ভর্তি পরীক্ষা</Link>
                            <Link className='hover-item' to="/admission-rule">ভর্তি নীতি</Link>
                            <Link className='hover-item' to="/registration-system">রেজিস্ট্রেশন সিস্টেম</Link>
                            <Link className='hover-item' to="/current-education">বর্তমান শিক্ষা ব্যবস্থা</Link>
                            <Link className='hover-item' to="/annual-plane">বাৎসরিক পরিকল্পনা</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item course' to="/">কোর্সসমূহ
                    <div className='hover-items-container dropdown-course'>
                        <div className="hover-items">
                        <Link className='hover-item' to="/ssc-vocational">এসএসসি (ভোকেশনাল)</Link>
                        <Link className='hover-item' to="/hsc-vocational">এইচএসসি (ভোকেশনাল)</Link>
                        <Link className='hover-item'>বেসিক কোর্স</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item management' to="/">ব্যবস্থাপনা
                    <div className='hover-items-container dropdown-management'>
                        <div className="hover-items">

                        <Link className='hover-item' to="/director-general">মহাপরিচালক</Link>
                        <Link className='hover-item' to="/director-vocational">পরিচালক (ভোকেশনাল)</Link>
                        <Link className='hover-item' to="/principal">অধ্যক্ষ</Link>
                        <Link className='hover-item' to='/faculty-member'>আমাদের শিক্ষকমন্ডলী</Link>
                        <Link className='hover-item' to="/staff">আমাদের কর্মীরা</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item academy' to="/">একাডেমিক পেপার
                    <div className='hover-items-container dropdown-academy'>
                        <div className="hover-items">

                        <Link className='hover-item' to="/academic-syllabus">একাডেমিক সিলেবাস</Link>
                        <Link className='hover-item' to="/academic-prospectus">একাডেমিক প্রসপেক্টাস</Link>
                        <Link className='hover-item' to="/education-calendar">শিক্ষা বর্ষপঞ্জি</Link>
                        <Link className='hover-item' to="/exam-schedule">পরীক্ষার সময়সূচি</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item student' to="/">শিক্ষার্থী
                    <div className='hover-items-container dropdown-student'>
                        <div className="hover-items">

                        <Link className='hover-item' to="/student-salary">বেতন</Link>
                        <Link className='hover-item' to="/student-uniform">ছাত্র ইউনিফর্ম</Link>
                        <Link className='hover-item' to="/exam-system">রীক্ষার ব্যবস্থা</Link>
                        <Link className='hover-item' to="/rules-regulation">নিয়ম এবং প্রবিধান</Link>
                        <Link className='hover-item' to="/our-student">আমাদের ছাত্র-ছাত্রী</Link>
                        <Link className='hover-item' to="/success-story">শিক্ষার্থীদের সাফল্যের গল্প</Link>
                        <Link className='hover-item' to="/innovative-project">উদ্ভাবনী প্রকল্প</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item result' to="/">ফলাফল
                    <div className='hover-items-container dropdown-result'>
                        <div className="hover-items">
                            <Link className='hover-item' to="/board-result">বোর্ড পরীক্ষার ফলাফল</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item resource' to="/">রিসোর্স
                    <div className='hover-items-container dropdown-resource'>
                        <div className="hover-items">

                        <Link className='hover-item' to="/digital-classroom">ডিজিটাল ক্লাস কনটেন্ট</Link>
                        <Link className='hover-item' to="/library">গ্রন্থাগার</Link>
                        <Link className='hover-item' to="/computer-lab">কম্পিউটার ল্যাব</Link>
                        <Link className='hover-item' to="/play-ground">খেলার মাঠ</Link>
                        <Link className='hover-item' to="/co-curricular-activities">সহ-পাঠক্রম সংক্রান্ত কার্যক্রম</Link>
                        <Link className='hover-item' to="/citizen-chart">সিটিজেন চার্টার</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item gallery-item' to="/">গ্যালারী
                    <div className='hover-items-container dropdown-gallery-item'>
                        <div className="hover-items">

                        <Link className='hover-item' to="/photo-gallery">ফটো গ্যালারী</Link>
                        <Link className='hover-item' to="/video-gallery">ভিডিও গ্যালারী</Link>
                        </div>
                    </div>
                </Link>
                <Link className='' to="/"> </Link>
                <Link className='nav-item communication' to="/communication">যোগাযোগ</Link>
                <a target="_blank" rel="noopener noreferrer" className='nav-item payment' href="https://live.academyims.com/Student_Portal?fbclid=IwAR2QO6Ew_frUxmFQ8655ApCEZnZu6g9s6G7OPvuguNjP24P9MzaNHzq4YDE">ফি পেমেন্ট</a>
            </div>
        </div>
    );
};

export default NavBar;