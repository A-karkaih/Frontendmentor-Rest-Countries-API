import { Link } from "react-router-dom";
export function Card({ country }) {
  return (
    <Link to={`/country/${country.name.common}`}>
      <div
        className=" w-62.5 h-75   flex pb-7 flex-col gap-3 shadow-lg cursor-pointer 
           shadow-gray-400 bg-white rounded-md rounded-t-xl dark:bg-[#374152] dark:shadow-none dark:text-white transition-colors duration-300"
      >
        <img
          className="w-full h-37.5 rounded-t-xl "
          src={country.flags.png}
          alt={`${country.name.official}-image`}
        />

        <div className=" flex flex-col gap-1 px-4  font-bold  text-md  ">
          <p className="text-center">{country.name.official}</p>
          <p className="text-sm">
            Population:{" "}
            <span className="text-gray-600  dark:text-gray-200">
              {country.population}
            </span>
          </p>
          <p className="text-sm">
            Region:{" "}
            <span className="text-gray-600  dark:text-gray-200">
              {" "}
              {country.region}
            </span>
          </p>
          <p className="text-sm">
            Capital:{" "}
            <span className="text-gray-600  dark:text-gray-200">
              {" "}
              {country.capital}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
