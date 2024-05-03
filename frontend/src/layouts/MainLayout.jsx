import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

const MainLayout = () => {

    const menuItems = [
        {
            name: "Products",
            path: "/",
        },
        {
            name: "Order",
            path: "/order",
        },
        {
            name: "Payment",
            path: "/card",
        },

        {
            name: "About",
            path: "/about",
        },
        {
            name: "Contact",
            path: "/contact",
        },
        {
            name: "Setting",
            path: "/setting",
        },
    ];

    return (
        <div className="grid grid-cols-5 gap-2 container mx-auto">
            {/* menu section  */}
            <div className="col-span-1 bg-slate-300 h-full">
                <ul className="text-2xl p-4 font-semibold">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <ActiveLink to={item.path}>{item.name}</ActiveLink>
                        </li>
                    ))
                    }
                </ul>
            </div>
            {/* content section  */}
            <div className="col-span-4 py-10 px-4 bg-slate-100">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;