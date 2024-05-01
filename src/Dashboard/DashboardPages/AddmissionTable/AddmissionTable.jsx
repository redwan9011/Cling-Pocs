import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa6";

const AddmissionTable = () => {
    return (
   <div>
         <div className="flex gap-6 items-center bg-blue-500 py-6 mx-5 px-2 rounded-lg relative -top-10">
        <h4>Admission Table</h4>
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="border border-gray-600 px-3 text-sm rounded-md flex items-center gap-4 py-1 text-gray-900">Admission Table <FaSortDown className="text-white"></FaSortDown></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <Link to='/dashboard/admissionTable'>Admission Table</Link>
                <Link to='/dashboard/medicalTable'>Medical Table</Link>
                <Link to='/dashboard/populationTable'>Population Table</Link>
                <Link to='/dashboard/userTable'>User Table</Link>
            </ul>
        </div>
    </div>

    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
   </div>
    );
};

export default AddmissionTable;