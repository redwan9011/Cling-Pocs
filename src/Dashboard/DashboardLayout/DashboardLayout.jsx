import { Link, Outlet } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";

const DashboardLayout = () => {
    return (
        <div>


            <div className="grid grid-cols-12 gap-5 h-screen mt-5 mx-5 ">
                {/* dashboard left side navbar */}
                <div className="col-span-3 bg-gray-600 text-white rounded-xl overflow-hidden mb-5 text-center">
                    <h1>{"Cling-POC's"}</h1>
                    <div className="divider text-white"></div>

                    <div className="text-center flex  justify-center">
                        <Link className="flex items-center gap-3"><BsBoxSeam /> Dasboard</Link>
                    </div>
                </div>
                {/*Dashboard  Right side  */}
                <div className="col-span-9 bg-blue-50  overflow-y-scroll">
                    <div>
                        {/* nav and search bar */}
                        <div className="flex justify-between">
                            <div>
                                <span>Icon / Dasboard</span>
                                <h1>Dashboard</h1>
                            </div>
                            <div>
                                <input type="text" name="search" id="" placeholder="search here" />
                                <span>icon</span>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center bg-blue-500 py-6 rounded-lg">
                            <h4>Medical Tab</h4>
                            <select name="tableOption" >
                                <option disabled selected value="Selct table">Select Table</option>
                                <option value="Admission Table">Admission Table</option>
                                <option value="Medical Table">Medical Table</option>
                                <option value="Population Table">Medical Table</option>
                                <option value="User Table">Medical Table</option>
                            </select>
                        </div>
                        <Outlet></Outlet>
                    </div>
                  
                </div>
            </div>



        </div>
    );
};

export default DashboardLayout;