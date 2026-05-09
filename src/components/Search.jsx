import { IoIosSearch } from "react-icons/io";

export default function Search({ setSearch, search, setRegion }) {
  return (
    <section className="flex flex-col gap-5 sm:gap-0 sm:flex-row  sm:justify-between ">
      <div
        className="relative shadow-md
           shadow-gray-400 w-75 h-10 dark:shadow-none "
      >
        <IoIosSearch className="absolute left-3 top-2.5 w-5 h-5 dark:text-amber-50" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search for a country..."
          className="border  bg-white border-transparent 
           text-md focus-within:outline-0 
          px-10  w-full h-full rounded-md dark:bg-[#374152]
           dark:text-white transition-colors duration-300"
        />
      </div>

      <div className="w-52 ">
        <select
          onChange={(e) => setRegion(e.target.value)}
          className="w-full shadow-md cursor-pointer
           shadow-gray-400 bg-white  rounded-md px-4 py-2 outline-none 
            dark:bg-[#374152] dark:shadow-none dark:text-white
             transition-colors duration-300 "
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}
