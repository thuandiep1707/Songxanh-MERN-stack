import React from 'react'
import { ReactSVG } from 'react-svg'

import dot3 from '../assets/svg-icons/dot3.svg'
import profile from '../assets/svg-icons/profile.svg'
import dragon from '../assets/svg-icons/dragon.svg'
import subway from '../assets/svg-icons/subway.svg'
import event1 from '../assets/svg-icons/event1.svg'
import save1 from '../assets/svg-icons/save1.svg'
import memory from '../assets/svg-icons/memory.svg'
import setting1 from '../assets/svg-icons/setting1.svg'
import more from '../assets/svg-icons/more.svg'

const Homepage = () => {
  const test = import.meta.env.VITE_TEST
  console.log(test)
  return (
    <div className='flex gap-[10px] w-[1420px]'>
        <aside className=" bg-white w-[350px] m-[10px] p-[20px] rounded-[6px] basic-shadow">
            <div className='flex items-center justify-between mb-[10px]'>
                <p className="text-[24px] font-bold">Home</p>
                <ReactSVG src={dot3} className='cursor-pointer'/>
            </div>
            <div className="">
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={profile} />
                <p className="grow font-bold">Ngọ Văn Long</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={dragon} />
                <p className="grow font-bold">Dragon mania legend</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={subway} />
                <p className="grow font-bold">Subway surfer</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={event1} />
                <p className="grow font-bold">Các sự kiện</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={save1} />
                <p className="grow font-bold">Danh sách đã lưu</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={memory} />
                <p className="grow font-bold">Ôn lại kỉ niệm</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={setting1} />
                <p className="grow font-bold">Cài đặt & quyền riêng tư</p>
              </div>
              <div className="flex items-center justify-between gap-[13px] p-[6px] cursor-pointer rounded-[6px] hover:bg-[#F0F2F5]">
                <ReactSVG src={more} />
                <p className="grow font-bold">Hỗ trợ người dùng</p>
              </div>
            </div>
        </aside>
        <section className='flex flex-col gap-[10px] grow bg-white m-[10px] p-[20px] rounded-[6px] basic-shadow'>
        </section>
        <section className="bg-white w-[350px] m-[10px] p-[20px] rounded-[6px] basic-shadow"></section>
    </div>
  )
}

export default Homepage