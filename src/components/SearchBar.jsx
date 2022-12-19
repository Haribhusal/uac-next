import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useEffect } from "react";

const SearchBar = () => {
  const searchTypes = [
    { id: 1, name: "Jobs", unavailable: false },
    { id: 2, name: "Business Profile", unavailable: false },
    { id: 3, name: "Hotels", unavailable: false },
  ];

  const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false);
  const [selected, setSelected] = useState(searchTypes[0]);


  return (
    <div className="sm:container-sm md:container">
      <div className=" relative bg-white">
        <div className="searchbar bg-white shadow sm:static md:absolute w-full md:p-10 sm:py-10 sm:px-5 rounded sm:top-0 md:top-1/2 sm:left-0 md:left-1/2  transform md:-translate-x-1/2 md:-translate-y-1/2 sm:-translate-y-0 sm:-translate-x-0  z-10 ">
          <div className="filter sm:block md:flex gap-5 border-b-[1px] pb-3 mb-5 justify-between">
            <div className="typefilter flex sm:flex-col md:flex-row sm:justify-start md:justify-between gap-5 md:items-center sm:items-start ">
              <div className="title text-blue-700 font-bold ">
                I am looking for
              </div>
              <div className="types flex gap-5 md:items-center sm:items-stretch sm:mb-3 ">
                {searchTypes.map((item) => (
                  <div className="group flex gap-2" key={item.id}>
                    <label
                      className={
                        item.selected
                          ? "cursor-pointer px-3 py-2 bg-blue-700 rounded text-white"
                          : "cursor-pointer px-3 py-2 bg-blue-100 rounded text-blue-700"
                      }
                    >
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="clearFilter">
              <button
                className="clear font-sm text-blue-700"
                onClick={() => setOpenAdvancedSearch(!openAdvancedSearch)}
              >
                {" "}
                <i
                  className={
                    openAdvancedSearch ? "las la-times" : "las la-bars"
                  }
                ></i>{" "}
                Advanced Search
              </button>
            </div>
          </div>
          <form action="" className="flex sm:flex-col md:flex-row gap-6 sm:gap-y-5 sm:items-stretch md:items-end  ">
            <div className="group grow">
              <div className="relative w-full">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative mt-1">
                    <Listbox.Button className="text-left text-slate-500 rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2">
                      <span className="block truncate">{selected.name}</span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {searchTypes.map((type, typeIdx) => (
                          <Listbox.Option
                            key={typeIdx}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-amber-100 text-amber-900"
                                  : "text-gray-900"
                              }`
                            }
                            value={type}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {type.name}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    asa
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <div className="group grow">
              {/* <label htmlFor="category" className='block text-sm text-slate-600 mb-2'>Business Title</label> */}
              <input
                type="text"
                placeholder="Business Title"
                className="rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2"
              />
            </div>
            <div className="group grow">
              {/* <label htmlFor="category" className='block text-sm text-slate-600 mb-2'>Business Location</label> */}
              <input
                type="text"
                placeholder="Business Location"
                className="rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2"
              />
            </div>

            <button className="grow-0 py-2 border-[1px] border-blue-700 px-5 bg-blue-700 text-white rounded w-48">
              {" "}
              <i className="las la-search"></i> Search
            </button>
          </form>
          {openAdvancedSearch && (
            <div className="advancedSearchBox flex gap-6 items-end mt-3">
              <div className="group grow">
                <div className="relative w-full">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="text-left text-slate-500 rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2">
                        <span className="block truncate">{selected.name}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {searchTypes.map((type, typeIdx) => (
                            <Listbox.Option
                              key={typeIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={type}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {type.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      asa
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="group grow">
                <div className="relative w-full">
                  <Listbox value={selected} onChange={setSelected}>
                    <div className="relative mt-1">
                      <Listbox.Button className="text-left text-slate-500 rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2">
                        <span className="block truncate">{selected.name}</span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {searchTypes.map((type, typeIdx) => (
                            <Listbox.Option
                              key={typeIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-amber-100 text-amber-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={type}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {type.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      asa
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>
              <div className="group grow">
                {/* <label htmlFor="category" className='block text-sm text-slate-600 mb-2'>Business Title</label> */}
                <input
                  type="text"
                  placeholder="Business Title"
                  className="rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2"
                />
              </div>
              <div className="group grow">
                {/* <label htmlFor="category" className='block text-sm text-slate-600 mb-2'>Business Location</label> */}
                <input
                  type="text"
                  placeholder="Business Location"
                  className="rounded border-[1px] w-full border-slate-400 focus:outline-none px-3 py-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
