import React, { useState,useEffect } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";
import UserTransactions from "../../components/userDashboard/UserTransactions";
import USerHelpDesk from "../../components/userDashboard/USerHelpDesk";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  
  useEffect(()=>{
    if(!isLogin){
      navigate("/login");
    }
   });

    if(role !== "customer"){
      return(
        <>
        div
        </>
      )
    }

  return (
    <div className=" w-full h-[90vh] flex">
      <div className="bg-(--color-background) w-2/10">
        <UserSideBar  active={active} setActive={setActive}/>
      </div>
      <div className="border border-red-500 w-8/10">
      {active === 'overview' && <UserOverview/> }
      {active === 'profile' && <UserProfile/> }
      {active === 'orders' && <UserOrders/> }
      {active === 'transactions' && <UserTransactions/> }
      {active === 'help' && <USerHelpDesk/> }
      </div>
    </div>
  );
};

export default UserDashboard;
