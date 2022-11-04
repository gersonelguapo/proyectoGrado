import React from "react";
import Dashboard from "../Navigation/Dashboard";

function CreatePost() {
  const selectHandler = (e) => {
    console.log(e.target.files[0]);
  };

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-[22%_73%] gap-2">
        <Dashboard/>
        <div className="mt-3 flex flex-col items-center justify-center">
          <div className="h-auto w-4/6">
            <form>
              <div className="mb-6">
                <label for="titulo" className="block mb-2 text-sm font-bold">
                  Titulo
                </label>
                <input
                  type="text"
                  id="titulo"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Estudia Ingenieria de Sistemas"
                />
              </div>
              <div className="mb-6">
                <label
                  for="descripcion"
                  className="block mb-2 text-sm font-bold"
                >
                  Descripcion
                </label>
                <textarea
                  type="text"
                  id="descripcion"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Descripcion breve del anuncio"
                />
              </div>
              <div className="mb-6">
                <label for="titulo" className="block mb-2 text-sm font-bold">
                  Carrera/Tema vinculado
                </label>
                <input
                  type="text"
                  id="titulo"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Ingenieria sistemas, Psicologia, etc"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold"
                    for="grid-full-name"
                  >
                    Referencia
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-full-name"
                    type="text"
                    placeholder="https://...."
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block mb-2 text-sm font-bold"
                    for="grid-gender"
                  >
                    Tipo anuncio
                  </label>
                  {/* <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-gender"
                    type="text"
                    placeholder="evento/noticia/curso/oferta empleo"
                  /> */}
                  <select /*onChange={handleSelect}*/
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option value="Cedula_ciudadania">evento</option>
                  <option value="Tarjeta_identidad">noticia</option>
                  <option value="Identificacion_extranjera">curso</option>
                  <option> Ofertas</option>
                </select>
                </div>
              </div>
              <div class="mb-5 flex justify-center items-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      class="mb-3 w-10 h-10 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={selectHandler}
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
