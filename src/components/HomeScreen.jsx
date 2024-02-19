import DevamsLogo from "../assets/images/DevamsLogoTransparent.png"
import { NAV_MENU } from "../assets/constants/Constant"

function HomeScreen() {
    return (
        <div>
            <div className="header flex py-2 px-20 md:py-4 md:px-25 lg:px-40 justify-between items-center self-stretch">
                <img
                    src={DevamsLogo}
                    alt="Devams"
                    className="w-28 h-16"
                />

                <div className="md:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">
                            <span className="material-symbols-outlined text-white">
                                menu
                            </span>
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-white"
                        >
                            {
                                NAV_MENU.map(menu => (
                                    <li key={menu}>
                                        <a>{menu}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="font-medium text-white hidden md:flex justify-between items-center w-100">
                    {
                        NAV_MENU.map(menu => (
                            <span
                                key={menu}
                                className="md:text-lg lg:text-xl"
                            >
                                {menu}
                            </span>
                        ))
                    }
                </div>
            </div>

            <div className="coming__soon__container text-white">
                <div className="animate__animated animate__pulse animate__infinite text-5xl md:text-6xl lg:text-7xl">
                    Coming Soon
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
