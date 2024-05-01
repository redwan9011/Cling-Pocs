
import { FaSortDown } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const PopulationTable = () => {
    return (


        <div>
       <div className="flex gap-6 items-center bg-blue-500 py-6 mx-5 px-2 rounded-lg relative -top-10">
        <h4 className="text-white text-lg font-semibold">Population Table</h4>
        <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900">Population Table <FaSortDown className="text-white"></FaSortDown></div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  space-y-2 ">
                <Link to='/dashboard/admissionTable' className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200">Admission Table</Link>
                <Link to='/dashboard/medicalTable'  className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200">Medical Table</Link>
                <Link to='/dashboard/populationTable'  className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200">Population Table</Link>
                <Link to='/dashboard/userTable'  className="hover:bg-gray-400 pl-6 py-1 rounded-md w-full duration-200">User Table</Link>
            </ul>
        </div>
    </div>


<div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Name</th>
                            <th>Address </th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                          
                            <td> Sandeep chauhan</td>
                            <td> adajdbajda sdajdbajda</td>
                            <td>s783274723@gmail.com</td>
                            <td>98732497348</td>
                            <td>467</td>
                            <th >
                                   {/* modal for edit button*/}

        <td>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="bg-green-400 px-4 py-1 rounded-lg" onClick={()=>document.getElementById('my_modal_1').showModal()}>Edit</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
        <h3 className="font-bold text-lg mb-3">Edit Person Details</h3>
        
        <form className="text-left space-y-2">
          <div >
         <h4 className="font-semibold mb-1">Name</h4>
             <input type="text" placeholder="type your name" name="name" className="input input-bordered w-full max-w-xs" />
          </div>
            <div>
            <h4 className="font-semibold mb-1">Email</h4>
            <input type="text" placeholder="type your email" name="email" className="input input-bordered w-full max-w-xs" />
            </div>
            <div >
              <h4 className="font-semibold mb-1">Number</h4>
            <input type="text" placeholder="type your number" name="number" className="input input-bordered w-full max-w-xs" />
            </div>
           
            <input type="submit" value="Edit" className=" bg-gradient-to-r from-blue-600 to-blue-500 px-10  py-2 rounded-lg font-semibold text-white cursor-pointer "/>
            
        </form>
        <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </td>
                            </th>
                            <th className="flex justify-center text-red-700 text-xl">
                <RiDeleteBin6Line />
            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                    
                        <td> Sandeep chauhan</td>
                            <td> adajdbajda sdajdbajda</td>
                            <td>s783274723@gmail.com</td>
                            <td>98732497348</td>
                            <td>467</td>
                            <th >
                                Edit
                            </th>
                            <th className="flex justify-center text-red-700 text-xl">
                <RiDeleteBin6Line />
            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                    
                        <td> Sandeep chauhan</td>
                            <td> adajdbajda sdajdbajda</td>
                            <td>s783274723@gmail.com</td>
                            <td>98732497348</td>
                            <td>467</td>
                            <th >
                                Edit
                            </th>
                            <th className="flex justify-center text-red-700 text-xl">
                <RiDeleteBin6Line />
            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                        <td> Sandeep chauhan</td>
                            <td>adajdbajda sdajdbajda</td>
                            <td>s783274723@gmail.com</td>
                            <td>98732497348</td>
                            <td>467</td>
                            <th >
                                Edit
                            </th>
                            <th className="flex justify-center text-red-700 text-xl">
                <RiDeleteBin6Line />
            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
 
    );
};

export default PopulationTable;