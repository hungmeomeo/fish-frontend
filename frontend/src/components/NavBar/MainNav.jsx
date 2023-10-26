import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import LOGO from "../../assets/img/footerIcon.svg"


const MainNav = () => {
  return (
    <div className="sticky top-0 bg-[#79DCF1] p-4 z-10">
      <div className="container h-[40px] mx-auto flex flex-wrap items-center max-w-[75rem]">
        <div className="top-[-12px] w-[128px] md:top-[14px] md:w-[150px] mr-[2rem] relative">
          <img
            src={LOGO}
            alt="logo"
          />
        </div>

        <div className="flex flex-row-reverse md:flex-row flex-wrap justify-between flex-1 items-center relative bottom-[18px]">
          <ul className="hidden md:flex flex-wrap">
            <li className="pr-[1.5rem] pl-[1rem] font-bold text-[1.375rem] text-[#222222] hover:underline underline-offset-4 decoration-[3px]">
              <Link to="/home">
                <span>Home</span>
              </Link>
            </li>

            <li className="pr-[1.5rem] pl-[1rem] font-bold text-[1.375rem] text-[#222222] hover:underline underline-offset-4 decoration-[3px]">
              <Link to="/user-cart">
                <span>Cart</span>
              </Link>
            </li>
          </ul>

          <SearchInput addition={`hidden`} />

        </div>
      </div>
    </div>

  );
};

export default MainNav;
