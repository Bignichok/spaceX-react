import { useEffect, useState } from "react";
import FetchData from "../../services/FetchData";

const useLaunches = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = new FetchData();
    fetchData.getLaunches().then((launches) => setData(launches));
  }, []);

  const getLaunch = (id) => data.find((item) => item.id === id);

  return { data, getLaunch };
};

export default useLaunches;
