import { Link, Outlet } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const DashboardLayout = () => {
    return (
            <div className="grid grid-cols-12 gap-5 h-screen mt-5 mx-5 ">
                {/* dashboard left side navbar */}
                <div className="col-span-3 bg-gray-600 text-white rounded-xl overflow-hidden mb-5 text-center">
                    <h1>{"Cling-POC's"}</h1>
                    <div className="divider text-white"></div>

                    <div className="text-center flex flex-col justify-center">
                        <Link className="flex items-center gap-3"><BsBoxSeam /> Dasboard</Link>
                        <Link to='/dashboard/admissionTable'>Admissiontable</Link>
                        <Link to='/dashboard/medicalTable'>MedicalTable</Link>
                    </div>
                </div>
                {/*Dashboard  Right side  */}
                <div className="col-span-9   overflow-y-scroll">
                    <div>
                        {/* nav and search bar */}
                        <div className="flex justify-between">
                            <div>
                                <span>Icon / Dasboard</span>
                                <h1>Dashboard</h1>

                            </div>
                            <div className="flex items-center">
                                <input type="text" name="search" id="" placeholder="search here" />
                                <span>< CgProfile></CgProfile></span>
                            </div>
                        </div>
                    
                      
                    </div>
                 <div>
                 <div className="flex gap-6 items-center bg-blue-500 py-6 rounded-lg relative -bottom-10">
                            <h4>Medical Tab</h4>
                            <select name="tableOption" >
                                <option disabled selected value="Selct table">Select Table</option>
                                <option value="Admission Table">Admission Table</option>
                                <option value="Medical Table">Medical Table</option>
                                <option value="Population Table">Medical Table</option>
                                <option value="User Table">Medical Table</option>
                            </select>
                        </div>
                        <div className="bg-white shadow-xl h-72">
                        <Outlet></Outlet>
                        </div>
                 </div>
                </div>
            </div>
    );
};

export default DashboardLayout;