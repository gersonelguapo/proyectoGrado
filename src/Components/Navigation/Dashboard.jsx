import { React, useContext} from "react";
import { UserContext } from "../../Context/UserContext";

function Dashboard() {
  
  const {handleDelete, users} = useContext(UserContext);

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[22%_73%] gap-2">
        <div className="h-screen fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center">
              <svg
                className="w-12 h-12"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                  fill="#4C51BF"
                />
                <path
                  d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                  fill="white"
                />
              </svg>

              <span className="mx-2 text-2xl font-semibold text-white">
                Dashboard
              </span>
            </div>
          </div>

          <nav className="mt-10">
            <a
              className="flex items-center px-6 py-2 mt-4 text-gray-100 bg-gray-700 bg-opacity-25"
              href="/"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>

              <span className="mx-3">Dashboard</span>
            </a>

            <a
              className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              href="/ui-elements"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>

              <span className="mx-3">UI Elements</span>
            </a>

            <a
              className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              href="/tables"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>

              <span className="mx-3">Tables</span>
            </a>

            <a
              className="flex items-center px-6 py-2 mt-4 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
              href="/forms"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>

              <span className="mx-3">Forms</span>
            </a>
          </nav>
        </div>

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
                            <div className="mb-3">
                                <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700">DELETE</button>
                            </div>
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

export default Dashboard;
