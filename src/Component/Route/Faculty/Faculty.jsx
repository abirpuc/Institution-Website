import React from 'react';
import { teachers } from '../../../Data/teachersData';
import FacultyData from './FacultyData';
const Faculty = () => {
    return (
        <div>
            <h1>আমাদের শিক্ষকমন্ডলী</h1>
            <table>
                {
                    teachers.map(teacher => <FacultyData key={teacher.id} teacher={teacher}/>)
                }
            </table>
        </div>
    );
};

export default Faculty;