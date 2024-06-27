import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg"

import logo from "../assets/svg-icons/logo.svg"
import search from "../assets/svg-icons/search.svg"
import home from "../assets/svg-icons/home.svg"
import friend from "../assets/svg-icons/friend.svg"
import profile from "../assets/svg-icons/profile.svg"
import mess from "../assets/svg-icons/mess.svg"
import noti from "../assets/svg-icons/noti.svg"
import setting from "../assets/svg-icons/setting.svg"

const Header = () => {
    const nav = useNavigate()
    const [ defaultPath, setDefaultPath ] = useState(window.location.pathname)
    const linkList = [
        {
            svgfile: home,
            path: "/"
        },
        {
            svgfile: friend,
            path: "/friend"
        },
        {
            svgfile: profile,
            path: "/profile"
        },
        {
            svgfile: noti,
            path: "/notification"
        },
        {
            svgfile: mess,
            path: "/message"
        }
    ]
    return (
        <header className="flex items-center justify-center sticky top-0 left-0 w-[100vw] h-[60px] bg-[#ffffff] mb-[10px]" >
            <div className="flex justify-between w-[1420px] h-full">
                <div className="flex items-center justify-center h-full gap-[10px] relative w-[350px]">
                    <ReactSVG src={logo} onClick={() => {nav("/"); setDefaultPath('/')}} className="cursor-pointer" />
                    <input type="text" name="search" id="search" placeholder="Tìm kiếm thông tin" className="border-none outline-none flex-1 h-[40px] bg-[#F0F2F5] rounded-[20px] pl-[42px] text-[10px] font-semibold text-[#00000099]" />
                    <ReactSVG src={search} className="absolute top-[22px] left-[70px]" />
                </div>
                <div className="flex items-center justify-between w-[400px] h-full">
                    {
                        linkList?.map((item, key) => {
                            return (
                                <Link to={`${item.path}`} key={key} onClick={() => setDefaultPath(item.path)} className={`grow h-full pt-[4px] pb-[4px] ${ defaultPath == item.path && "border-b-[3px] border-[#0088FF] header-link"}`}>
                                    <ReactSVG src={item.svgfile} className="flex justify-center items-center w-full h-full hover:bg-[#F0F2F5] rounded-[6px]" />
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-end w-[350px] h-full">
                    <Link to={'/setting'} onClick={() => setDefaultPath('/setting')} className={`flex items-center justify-center w-[40px] h-[40px] bg-[#F0F2F5] ${ defaultPath == '/setting' ? "rounded-none border-b-[3px] border-[#0088FF] bg-[#FFFFFF] header-link" : "rounded-[50%] "}`}>
                        <ReactSVG src={setting} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header