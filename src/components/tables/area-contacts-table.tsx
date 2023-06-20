import editIcon from "../../assets/pencil.svg"

export function AreaContactsTable(){
    return (
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                    >
                        Id
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                    >
                        Nome
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                    >
                        E-mail
                    </th>
                    
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs text-gray-700 font-extrabold uppercase tracking-wider"
                    >

                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                
                    <tr className="hover:bg-slate-100">
                        <td className="px-6 py-4 whitespace-nowrap">01</td>
                        <td className="px-6 py-4 whitespace-nowrap">Paulo Luz</td>
                        <td className="px-6 py-4 whitespace-nowrap">paulo@bosch.com</td>
                        <td className="px-4 py-4 flex justify-end">
                        <img className="cursor-pointer" src={editIcon} alt="Edit icon" />
                        </td>
                    </tr>
                    
                    <tr className="hover:bg-slate-100">
                        <td className="px-6 py-4 whitespace-nowrap">01</td>
                        <td className="px-6 py-4 whitespace-nowrap">Paulo Luz</td>
                        <td className="px-6 py-4 whitespace-nowrap">paulo@bosch.com</td>
                        <td className="px-4 py-4 flex justify-end">
                        <img className="cursor-pointer" src={editIcon} alt="Edit icon" />
                        </td>
                    </tr>
                    <tr className="hover:bg-slate-100">
                        <td className="px-6 py-4 whitespace-nowrap">01</td>
                        <td className="px-6 py-4 whitespace-nowrap">Paulo Luz</td>
                        <td className="px-6 py-4 whitespace-nowrap">paulo@bosch.com</td>
                        <td className="px-4 py-4 flex justify-end">
                        <img className="cursor-pointer" src={editIcon} alt="Edit icon" />
                        </td>
                    </tr>
                
            </tbody>
        </table>
    </div>
    )
}