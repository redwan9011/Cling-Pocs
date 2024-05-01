import {  Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div>
          

        <div className="grid grid-cols-12 gap-5 h-screen mt-5 mx-5 ">
            {/* dashboard left side navbar */}
            <div className="col-span-3 bg-gray-600 text-white rounded-xl overflow-hidden mb-5">
                <h1>{"Cling-POC's"}</h1>
                <div className="divider text-white"></div>

                <div>
                    <Link >Dasboard</Link>
                </div>
            </div>
            <div className="col-span-9 bg-blue-50  overflow-y-scroll">
                <div>
                    {/* nav and search bar */}
                    <div>
                       <div> 
                        <span>Icon / Dasboard</span>
                        <h1>Dashboard</h1>
                        </div>
                        <div>
                            <input type="text" name="search" id=""  placeholder="search here"/>
                            <span>icon</span>
                        </div>
                    </div>
                </div>
            <Outlet></Outlet>
            </div>
        </div>


            
        </div>
    );
};

export default DashboardLayout;