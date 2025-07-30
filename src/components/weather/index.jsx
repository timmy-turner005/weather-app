import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=051a48ae80b1ca4c8f69446dfa411cf3`
      );

      const data = await response.json();

      console.log(data, "data");
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      Weather
    </div>
  );
}
