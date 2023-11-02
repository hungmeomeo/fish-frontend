import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import LOGO from "../../assets/img/footerIcon.svg"


const UserCart = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    phoneNumber: "-----",
    address: "-----",
    receiver: "-----",
  });


  const addressInputRef = useRef();
  const phoneNumInputRef = useRef();
  const receiverInputRef = useRef();

  let subTotalCost = 0;
  subTotalCost.toFixed(2);

  const tax = 1.99;
  const deliveryFee = 2.99;
  let totalPrice = (subTotalCost + tax + deliveryFee + 88.99).toFixed(3);

  const confirmInfoHandler = (e) => {
    e.preventDefault();

    setUserInfo({
      phoneNumber: phoneNumInputRef.current.value,
      address: addressInputRef.current.value,
      receiver: receiverInputRef.current.value,
    });
  };



  const sendOrderHandler = () => {
    setIsShowModal(true);
  };

  return (
    <Fragment>
      <header className="bg-[#79DCF1] sticky top-0 z-10">
        <div className="container max-w-[75rem] mx-auto flex items-center justify-between p-4">
          <img
            src={LOGO}
            alt="logo"
            className="w-[128px]"
          />
        </div>
      </header>
      <main className="container max-w-[75rem] mx-auto px-6 my-6">
        <Link to="/home" className="flex items-center">
          <FontAwesomeIcon icon={faArrowLeft} className="px-2" />
          <span>Back</span>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form onSubmit={confirmInfoHandler} className="flex flex-col mt-10">
            <h1 className="text-center md:text-left text-2xl pb-4 border-b border-gray-500">
              Deliver Detail
            </h1>
            <input
              className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
              type="text"
              placeholder="Your address"
              ref={addressInputRef}
              required
            />
            <input
              className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
              type="text"
              placeholder="Phone number"
              ref={phoneNumInputRef}
              required
            />
            <input
              className="focus:outline-none p-3 border border-slate-300 rounded-md mt-4"
              type="text"
              placeholder="Deliver to"
              ref={receiverInputRef}
              required
            />
            <button className="rounded-md bg-[#F91944] p-3 mt-4 focus:outline-none text-white transform transition duration-200 hover:sacle-150 hover:shadow-lg">
              Save & continue
            </button>
          </form>
          <div className="p-6 border border-slate-200 shadow-md rounded-lg">
            <h1 className="text-2xl pb-4 text-center">Order summary</h1>
            <p className="text-gray-500">
              {"Receiver: "}
              <span className="font-semibold text-gray-700">
                {userInfo.receiver}
              </span>
            </p>
            <p className="text-gray-500 mt-4">
              {"Address: "}
              <span className="font-semibold text-gray-700">
                {userInfo.address}
              </span>
            </p>
            <p className="text-gray-500 mt-4">
              {"Phone number: "}
              <span className="font-semibold text-gray-700">
                {userInfo.phoneNumber}
              </span>
            </p>
            <p className="text-gray-500 mt-4">
              {`Delivering time: `}
              <span className="font-semibold text-gray-700">
                1-2 days
              </span>
            </p>
            <div className="mt-2 max-h-[224px] overflow-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-100">
              <div
                className="flex items-center justify-between pt-4"
              >
                <img
                  src='src/assets/img/fishing_rod.webp'
                  alt='test'
                  className="w-[96px] h-[96px] rounded-full"
                />
                <div className="text-gray-500 px-2 w-[202px]">
                  <h5 className="line-clamp-1">Fishing Rod</h5>
                  <h1>$88.99</h1>
                  <span>{`Brand: SHIMANO`}</span>
                </div>
                <div className="flex flex-col mr-4">
                  <p className="text-gray-500 line-clamp-1 mb-2">
                    items: 1
                  </p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="text-gray-700 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-bold text-gray-700">{`$${subTotalCost}`}</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-gray-500">Tax:</span>
                <span className="font-bold text-gray-700">{`$${tax}`}</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-gray-500">Delivery fee:</span>
                <span className="font-bold text-gray-700">{`$${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between mt-4 text-xl">
                <span className="text-gray-500">Total price:</span>
                <span className="font-bold text-gray-700">{`$${totalPrice}`}</span>
              </div>
            </div>
            <div>
              <button
                onClick={sendOrderHandler}
                disabled={
                  userInfo.phoneNumber === "-----" &&
                  userInfo.phoneNumber === "-----" &&
                  userInfo.phoneNumber === "-----"
                }
                className="disabled:opacity-40 w-full rounded-md bg-[#F91944] p-3 mt-4 focus:outline-none text-white transform transition duration-200 enabled:hover:sacle-150 enabled:hover:shadow-lg"
              >
                <Link to="/">Order now</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default UserCart;
