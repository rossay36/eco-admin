import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/feacturedInfo/FeacturedInfo";
import "./Home.css";
import { userData } from "../../dummyData";
import WedgetSm from "../../components/wedgetSm/WedgetSm";
import WedgetLg from "../../components/wedgetLg/WedgetLg";
import { useEffect, useMemo, useState } from "react";
import { userReq } from "../../reqMethod";
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userReq.get("/users/stat");
        const list = res.data.sort((a, b) => {
          return a.createdAt - b.createdAt;
        });
        list.map((item) => {
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ]);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WedgetSm />
        <WedgetLg />
      </div>
    </div>
  );
};

export default Home;
