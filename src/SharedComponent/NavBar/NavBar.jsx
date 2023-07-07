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
                        <Link className='hover-item'>এসএসসি (ভোকেশনাল)</Link>
                        <Link className='hover-item'>এইচএসসি (ভোকেশনাল)</Link>
                        <Link className='hover-item'>বেসিক কোর্স</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item management' to="/">ব্যবস্থাপনা
                    <div className='hover-items-container dropdown-management'>
                        <div className="hover-items">

                        <Link className='hover-item'>মহাপরিচালক</Link>
                        <Link className='hover-item'>পরিচালক (ভোকেশনাল)</Link>
                        <Link className='hover-item'>অধ্যক্ষ</Link>
                        <Link className='hover-item'>আমাদের শিক্ষকমন্ডলী</Link>
                        <Link className='hover-item'>আমাদের কর্মীরা</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item academy' to="/">একাডেমিক পেপার
                    <div className='hover-items-container dropdown-academy'>
                        <div className="hover-items">

                        <Link className='hover-item'>একাডেমিক সিলেবাস</Link>
                        <Link className='hover-item'>একাডেমিক প্রসপেক্টাস</Link>
                        <Link className='hover-item'>শিক্ষা বর্ষপঞ্জি</Link>
                        <Link className='hover-item'>পরীক্ষার সময়সূচি</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item student' to="/">শিক্ষার্থী
                    <div className='hover-items-container dropdown-student'>
                        <div className="hover-items">

                        <Link className='hover-item'>বেতন</Link>
                        <Link className='hover-item'>ছাত্র ইউনিফর্ম</Link>
                        <Link className='hover-item'>রীক্ষার ব্যবস্থা</Link>
                        <Link className='hover-item'>নিয়ম এবং প্রবিধান</Link>
                        <Link className='hover-item'>আমাদের ছাত্র-ছাত্রী</Link>
                        <Link className='hover-item'>শিক্ষার্থীদের সাফল্যের গল্প</Link>
                        <Link className='hover-item'>উদ্ভাবনী প্রকল্প</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item result' to="/">ফলাফল
                    <div className='hover-items-container dropdown-result'>
                        <div className="hover-items">
                            <Link className='hover-item'>বোর্ড পরীক্ষার ফলাফল</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item resource' to="/">রিসোর্স
                    <div className='hover-items-container dropdown-resource'>
                        <div className="hover-items">

                        <Link className='hover-item'>ডিজিটাল ক্লাস কনটেন্ট</Link>
                        <Link className='hover-item'>গ্রন্থাগার</Link>
                        <Link className='hover-item'>কম্পিউটার ল্যাব</Link>
                        <Link className='hover-item'>খেলার মাঠ</Link>
                        <Link className='hover-item'>সহ-পাঠক্রম সংক্রান্ত কার্যক্রম</Link>
                        <Link className='hover-item'>সিটিজেন চার্টার</Link>
                        </div>
                    </div>
                </Link>
                <Link className='nav-item gallery-item' to="/">গ্যালারী
                    <div className='hover-items-container dropdown-gallery-item'>
                        <div className="hover-items">

                        <Link className='hover-item'>ফটো গ্যালারী</Link>
                        <Link className='hover-item'>ভিডিও গ্যালারী</Link>
                        </div>
                    </div>
                </Link>
                <Link className='' to="/"> </Link>
                <Link className='nav-item communication' to="/">যোগাযোগ</Link>
                <Link className='nav-item payment' to="/">ফি পেমেন্ট</Link>
            </div>
        </div>
    );
};

export default NavBar;