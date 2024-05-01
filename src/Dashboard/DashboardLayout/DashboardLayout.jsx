import { Link, Outlet } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
const DashboardLayout = () => {
    return (
           <div className="bg-gray-100">
             <div className="grid grid-cols-12 gap-5  mt-5 mx-5 
             ">
                {/* dashboard left side navbar */}
           <div className="col-span-3 h-[95vh] sticky top-5 bg-gray-600 ">
           <div className="  text-white rounded-xl   mb-5 text-center">
                    <h1 className="pt-5 font-semibold text-md">{"Cling-POC's"}</h1>
                    <div className="divider text-white"></div>

                    <div className="text-center flex  justify-center">

                    <Link className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 w-2/3 font-semibold" to='/dashboard/admissionTable'><BsBoxSeam /> Dasboard</Link>
                    </div>
                </div>
           </div>
      {/*Dashboard  Right side  */}
      
                <div className="col-span-9 ">
                    <div className="sticky top-5 bg-white opacity-85 rounded-xl  shadow-lg z-50">
                        {/* nav and search bar */}
                        <div className="flex justify-between py-5  px-3  ">
                            <div>
                                <span className="flex items-center text-xl text-gray-600"><Link to='/'><IoMdHome ></IoMdHome></Link> / Dasboard</span>
                                <h1 className="text-xl font-semibold">Dashboard</h1>

                            </div>
                            <div className="flex items-center gap-3">
                                <input type="text" name="search" id="" placeholder="search here" className="input border border-gray-400" />
                                <span className="text-2xl cursor-pointer">< CgProfile></CgProfile></span>
                            </div>
                        </div>
                    
                      
                    </div>
                 <div>
              
                    <div className="bg-white shadow-2xl rounded-xl p-6 mt-14  ">
                        <Outlet></Outlet>
                        </div>
                 </div>
                </div>
            </div>
           </div>
    );
};

export default DashboardLayout;








// <div className="grid grid-cols-12 gap-5 mt-5 mx-5">
//   {/* dashboard left side navbar */}
//   <div className="col-span-3 h-screen bg-gray-600 fixed left-0 top-0 bottom-0 overflow-y-auto">
//     <div className="text-white rounded-xl mb-5 text-center">
//       <h1 className="pt-5 font-semibold text-md">{"Cling-POC's"}</h1>
//       <div className="divider text-white"></div>
//       <div className="text-center flex justify-center">
//         <Link className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 w-2/3 font-semibold" to='/dashboard/admissionTable'><BsBoxSeam /> Dashboard</Link>
//       </div>
//     </div>
//   </div>
//   {/*Dashboard Right side */}
//   <div className="col-span-9 ml-auto">
//     <div className="sticky top-0 bg-white rounded-xl shadow-lg z-50">
//       {/* nav and search bar */}
//       <div className="flex justify-between py-5 px-3">
//         <div>
//           <span className="flex items-center text-xl text-gray-600"><Link to='/'><IoMdHome ></IoMdHome></Link> / Dasboard</span>
//           <h1 className="text-xl font-semibold">Dashboard</h1>
//         </div>
//         <div className="flex items-center gap-3">
//           <input type="text" name="search" id="" placeholder="search here" className="input border border-gray-400" />
//           <span className="text-2xl cursor-pointer"><CgProfile></CgProfile></span>
//         </div>
//       </div>
//     </div>
//     <div>
//       <div className="bg-white shadow-2xl rounded-xl p-6 mt-10 h-[1000px] ">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   </div>
// </div>
