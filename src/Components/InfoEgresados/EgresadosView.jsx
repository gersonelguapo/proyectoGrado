import { React, useContext} from "react";
import Dashboard from "../Navigation/Dashboard";
import { UserContext } from "../../Context/UserContext";

function EgresadosView() {
  
  const {handleDelete, users} = useContext(UserContext);

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[22%_73%] gap-2">
        <Dashboard />
        <div className="mt-8">
          <h4 className="text-gray-600">Users Table</h4>

          <div className="flex flex-col mt-6">
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Nombre
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Apellido
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Nombre Usuario
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Contraseña
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Fecha Registro
                      </th>
                      <th className="px-6 py-3 border-b border-gray-200 bg-gray-100">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://cdn-icons-png.flaticon.com/512/17/17004.png"
                                alt=""
                              />
                            </div>

                            <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">
                                {user.nombre}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {user.apellido}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">
                            {user.nombre_usuario}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                          {user.contraseña}
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <div
                            href="#"
                            className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                          >
                            {user.fecha_registro}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="mb-3">
                                <button onClick={() => handleDelete(user.id)} className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700">DELETE</button>
                            </div>
                            {/* <div className="mb-3">
                                <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700">DELETE</button>
                            </div> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgresadosView;
