import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import { CardSkeleton } from "../components/skeletons/CardSkeleton";

export function MainPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    async function fetchData() {
      setLoading(true); // ✅ Set to true

      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region`,
        );
        setTimeout(() => {
          setCountries(res.data);
          setLoading(false); // ✅ Set to false after data arrives
        }, 500);
      } catch (err) {
        console.log(err);
        setLoading(false); // ✅ Set to false in error case
      }
    }
    fetchData();
  }, []);
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion = region === "" || country.region === region;

    return matchesSearch && matchesRegion;
  });

  return (
    <main className="flex flex-col gap-4 p-6  ">
      <Search setSearch={setSearch} search={search} setRegion={setRegion} />
      <p className="font-bold dark:text-gray-400 text-sm">
        {filteredCountries.length} countries found
      </p>

      {loading ? (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </section>
      ) : (
        <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {filteredCountries.map((country) => {
            return <Card key={country.name.common} country={country} />;
          })}
        </section>
      )}
    </main>
  );
}
