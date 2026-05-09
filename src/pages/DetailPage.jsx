import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { DetailSkeleton } from "../components/skeletons/DetailSkeleton";
import { DetailError } from "./errors/DetailError";

export function DetailPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountry() {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`,
        );
        setCountry(res.data[0]);
      } catch (err) {
        setError("Country not found");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCountry();
  }, [name]);

  if (loading) return <DetailSkeleton />;

  if (error) return <DetailError error={error} />;

  if (!country) return null;

  const {
    name: { common, official },
    flags,
    capital,
    region,
    subregion,
    population,
    area,
    timezones,
    currencies,
    languages,
    borders,
  } = country;

  return (
    <main className="min-h-screen p-6  dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="w-20 shadow-2xl shadow-gray-300 bg-white   font-bold rounded-md p-2  mb-8  dark:bg-[#374152] flex items-center gap-2 text-gray-700 dark:text-gray-300 dark:shadow-none cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
        >
          <span>←</span>
          Back
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Flag Image */}
          <div className="flex items-center">
            <img
              src={flags.svg}
              alt={common}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Country Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              {official}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <InfoItem
                  label="Population"
                  value={population.toLocaleString()}
                />
                <InfoItem label="Region" value={region} />
                <InfoItem label="Sub Region" value={subregion} />
                <InfoItem
                  label="Capital"
                  value={capital ? capital.join(", ") : "N/A"}
                />
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <InfoItem label="Area" value={`${area.toLocaleString()} km²`} />
                <InfoItem
                  label="Time Zone"
                  value={timezones ? timezones.join(", ") : "N/A"}
                />
                <InfoItem
                  label="Currency"
                  value={
                    currencies
                      ? Object.values(currencies)
                          .map((c) => c.name)
                          .join(", ")
                      : "N/A"
                  }
                />
                <InfoItem
                  label="Languages"
                  value={
                    languages ? Object.values(languages).join(", ") : "N/A"
                  }
                />
              </div>
            </div>

            {/* Borders */}
            {borders && borders.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Border Countries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {borders.map((border) => (
                    <span
                      key={border}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">
        {label}
      </p>
      <p className="text-lg text-gray-900 dark:text-white">{value}</p>
    </div>
  );
}
