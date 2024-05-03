/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => (isActive ? 'bg-slate-500 rounded-md text-white' : '') + ' block py-2 px-4'}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;