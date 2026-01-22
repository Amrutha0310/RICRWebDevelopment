import React from "react";
import { FaChartLine } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold items-center">User DashBoard</div>
        <hr />

        <div className="grid gap-3 p-6 ">
          <button
            className={`flex gap-3 items-center p-3 rounded-2xl ${
              active === "overview"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/40 "
            }`}
            onClick={() => setActive("overview")}
          >
            {" "}
            <FaChartLine />
            Overview
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-2xl ${
              active === "profile"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/40 "
            }`}
            onClick={() => setActive("profile")}
          >
            <ImProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-2xl ${
              active === "orders"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/40 "
            }`}
            onClick={() => setActive("orders")}
          >
            <TiShoppingCart />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-2xl ${
              active === "transactions"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/40 "
            }`}
            onClick={() => setActive("transactions")}
          >
            <TbTransactionRupee />
            Transactions{" "}
          </button>
          <button
            className={`flex gap-3 items-center p-3 rounded-2xl ${
              active === "help"
                ? "bg-(--color-secondary) text-white"
                : " hover:bg-gray-100/40 "
            }`}
            onClick={() => setActive("help")}
          >
            <RiCustomerService2Line /> Help Desk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
