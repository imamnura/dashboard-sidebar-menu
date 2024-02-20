import { useState } from "react";
import IconBxMenu from "../assets/icons/Menu";
import IconBxMenuAltRight from "../assets/icons/Menu-Right";
import IconBxSearch from "../assets/icons/Search";
import IconBxGridAlt from "../assets/icons/Grid";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`fixed left-0 top-0 h-full ${
        open ? "w-[250px]" : "w-[78px]"
      } bg-[#11101D] px-[14px] py-[6px] z-[-1] [transition:all_0.5s_ease]`}
    >
      <div className="h-[60px] flex items-center justify-between relative">
        <div
          className={`text-white text-xl font-semibold [transition:all_0.5s_ease] ${
            open ? "block" : "hidden"
          }`}
        >
          Menu
        </div>
        {open ? (
          <IconBxMenuAltRight
            className="absolute top-2/4 right-0 -translate-y-1/2 text-[22px] text-center cursor-pointer [transition:all_0.5s_ease] text-white h-[60px] min-w-[50px] leading-[60px]"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <IconBxMenu
            className="absolute top-2/4 right-0 -translate-y-1/2 text-[22px] text-center cursor-pointer [transition:all_0.5s_ease] text-white h-[60px] min-w-[50px] leading-[60px]"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <div>
        <ul className="mt-[20px] h-full">
          <li className="relative mx-0 my-2 [list-style:none]">
            <IconBxSearch
              className={`absolute top-2/4 left-[0] -translate-y-1/2 text-[22px] bg-[#1d1b31] text-[#fff] h-[50px] leading-[50px] text-center min-w-[50px] not-italic [font-variant:normal] inline-block normal-case antialiased `}
            />
            <input
              type="text"
              placeholder="Search"
              className={`text-[15px] text-white font-normal outline-0 h-[50px] w-full border-none rounded-xl [transition:all_0.5s_ease] bg-[#1d1b31] hover:pl-[50px] hover:pr-[20px] hover:py-[0] ${
                open && "pl-[50px] pr-[20px] py-[0] w-full"
              }`}
            />
            <span
              className={`absolute -top-[20px] left-[calc(100% + 15px)] bg-[#fff] [box-shadow:0_5px_10px_rgba(0,_0,_0,_0.3)] px-[12px] py-[6px] rounded-[4px] text-[15px] font-normal opacity-0 whitespace-nowrap pointer-events-none [transition:0s] hover:opacity-100 hover:pointer-events-auto hover:[transition:all_0.4s_ease] hover:top-2/4 hover:-translate-y-1/2 ${
                open ? "hidden" : "block"
              }`}
            >
              Tootlip Search
            </span>
          </li>
          <li className="relative mx-0 my-2 [list-style:none] hover:text-yellow-300">
            <a
              href="#"
              className="flex h-full w-full rounded-xl items-center no-underline transition-all duration-150 ease-linear bg-[#11101D]  hover:[transition:all_0.5s_ease] hover:text-yellow-300 hover:bg-white"
            >
              <IconBxGridAlt className="text-white h-[50px] leading-[50px] text-xl rounded-xl min-w-[50px] hover:[transition:all_0.5s_ease] hover:text-yellow-300" />
              <span
                className={`text-white text-[15px] font-normal whitespace-nowrap opacity-0 pointer-events-none [transition:0.4s] ${
                  open
                    ? "opacity-100 cursor-pointer"
                    : "opacity-0 pointer-events-none delay-150"
                } hover:[transition:all_0.5s_ease] hover:text-yellow-300`}
              >
                Dashboard
              </span>
            </a>
            {/* <span
              className={`absolute -top-[20px] left-[calc(100% + 15px)] bg-[#fff] [box-shadow:0_5px_10px_rgba(0,_0,_0,_0.3)] px-[12px] py-[6px] rounded-[4px] text-[15px] font-normal opacity-0 whitespace-nowrap pointer-events-none [transition:0s] hover:opacity-100 hover:pointer-events-auto hover:[transition:all_0.4s_ease] hover:top-2/4 hover:-translate-y-1/2 ${
                open ? "hidden" : "block"
              }`}
            >
              Tooltip Dashboard
            </span> */}
          </li>
        </ul>
      </div>
    </div>
  );
}
