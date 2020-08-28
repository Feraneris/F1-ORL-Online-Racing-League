import React from 'react';
import '../styles/DropdownBox.css';

const DropdownBox = (p) => {
        var boxContent;
        switch(p.boxPosition){
            case 'menu-results':
                boxContent = ['F1 - A LEAGUE', 'F1 - B LEAGUE', 'DIRT RALLY', 'AC COMPETIZIONE', 'PROJECT CARS'];
                break;
            case 'menu-standings':
                boxContent = ['F1 - A LEAGUE', 'F1 - B LEAGUE', 'DIRT RALLY', 'AC COMPETIZIONE', 'PROJECT CARS'];
                break;
            case 'menu-schedule':
                boxContent = ['F1 - A LEAGUE', 'F1 - B LEAGUE', 'DIRT RALLY', 'AC COMPETIZIONE', 'PROJECT CARS'];
                break;
            case 'menu-join-us':
                boxContent = ['FORMULA 1 (open)', 'DIRT RALLY (open)', 'AC COMPETIZIONE', 'PROJECT CARS'];
                break;
            case 'menu-info':
                boxContent = ['FORMULA 1 rules', 'DIRT RALLY rules', 'AC COMPETIZIONE rules', 'PROJECT CARS rules', "Coordinators & Hosts", 'About ORL', 'Help', 'Contact Us'];
                break;
            default:
                boxContent = [];
        }
 
    return (
        <ul className='menu'>
            {boxContent.map((value, index) => {
                return <li className='menu-item' key={index}>{value}</li>
            })}
        </ul>
    );
};

// DropdownBox.defaultProps = {
//     boxPosition:'hidden',
//     boxMenu: null
// }

export default DropdownBox;