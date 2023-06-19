import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/logo-bosch.png";
import homeIcon from "../../assets/home.svg";
import logoutIcon from "../../assets/logout.svg";
import boschColors from "../../assets/bosch-colors.png";

export function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const menuOptions = [
        {
            title: "Colaboradores",
            link: "www.google.com",
        },
        {
            title: "Areas",
            link: "www.google.com",
        },
        {
            title: "Centros de custo",
            link: "www.google.com",
        },
        {
            title: "Relatórios",
            link: "www.google.com",
        },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <img src={boschColors} alt="Header colors" />
            <header className="flex justify-between items-center py-6 px-8 bg-white">
                <div className="flex items-center">
                    <div className="md:hidden mr-4 text-2xl" onClick={toggleSidebar}>
                        <GiHamburgerMenu />
                    </div>
                    <img className="mr-8" width={160} src={logo} alt="Logo bosch" />
                    <span className="hidden md:flex space-x-4">
                        {menuOptions.map((option) => (
                            <a className="text-lg" key={option.link} href={option.link}>
                                <p>{option.title}</p>
                            </a>
                        ))}
                    </span>
                </div>
                <div className="flex space-x-8">
                    <a href="/" className="flex items-center space-x-2 text-lg">
                        <img width={30} src={homeIcon} alt="Home icon" />
                        <p>Home</p>
                    </a>
                    <span className="flex items-center space-x-2 text-lg cursor-pointer">
                        <img width={30} src={logoutIcon} alt="Logout icon" />
                        <p>Logout</p>
                    </span>
                </div>
            </header>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50">
                    <div className="flex flex-col items-center h-screen bg-white w-64 absolute left-0 top-0 transform transition-transform duration-300 ease-in-out">
                        <div className="py-4 px-6 flex justify-between items-center space-x-8">
                            <img width={160} src={logo} alt="Logo bosch" />
                            <div
                                className="cursor-pointer text-sm"
                                onClick={toggleSidebar}
                            >
                                <GrClose size={24} />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 px-6 py-4">
                            {menuOptions.map((option) => (
                                <a
                                    key={option.link}
                                    href={option.link}
                                    className="text-lg hover:text-blue-500"
                                    onClick={toggleSidebar}
                                >
                                    {option.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
