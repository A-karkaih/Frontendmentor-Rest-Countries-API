import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import { CardSkeleton } from "../components/skeletons/CardSkeleton";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.5 },
  },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function MainPage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region`,
        );
        setCountries(res.data);
        setLoading(false);
        // setTimeout(() => {

        //   setLoading(false);
        // }, 100);
      } catch (err) {
        console.log(err);
        setLoading(false);
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
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3"
        >
          {filteredCountries.map((country) => {
            return (
              <Card
                animation={item}
                key={country.name.common}
                country={country}
              />
            );
          })}
        </motion.section>
      )}
    </main>
  );
}
