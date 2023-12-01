import React, { useState } from "react";

import GetStartedForm from "../Forms/getStarted"

function FormModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/*<button
        className="px-4 py-4 ml-4 text-lg font-bold text-gray-100 whitespace-normal bg-red-800 border-0 rounded shadow-lg sm:px-6 focus:outline-none hover:bg-gray-200"
        type="button"
        style={{ transition: "all .15s ease", boxShadow: " -2px 0px 10px white" }}
        onClick={() => setShowModal(true)}
      >
        Get A Quote
      </button>*/}
      <button
      className=" bg-white hover:bg-[#2579bceb] hover:text-white inline-block w-full px-4 py-3 my-3 text-xl font-bold leading-loose text-center text-[#2579bceb] transition-colors ease-in-out delay-0 duration-300 focus-within:outline outline-white focus:outline-white hover:shadow-lg  rounded-lg sm:w-auto sm:mb-0 sm:mr-4"
        type="button"
      onClick={() => setShowModal(true)}
      >
        Get Started
      </button>
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          ></div>
            <div className="relative w-auto max-w-3xl px-2 mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                {/*<div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>*/}

                
                {/*body*/}
                <div className="flex-auto p-0">
                    <GetStartedForm />

                </div>
                {/*footer*/}
                {/*<div className="flex items-center justify-end p-6 border-t border-gray-300 border-solid rounded-b">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase outline-none background-transparent focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 rounded shadow outline-none active:bg-green-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
            </div>*/}
              
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" ></div>
        </>
      ) : null}
    </>
  );
}

export default FormModal