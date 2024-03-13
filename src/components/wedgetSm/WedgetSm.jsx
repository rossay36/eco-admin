import { useEffect, useState } from "react";
import "./WedgetSm.css";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { userReq } from "../../reqMethod";

const WedgetSm = () => {
  const [users, setUsser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userReq.get("/users/?=new=true");
        setUsser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users?.map((user) => {
          return (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={user?.img || "../../../src/assets/avatar1.jpg"}
                alt="check your network and refresh your system"
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user?.username}</span>
              </div>
              <button className="widgetSmButton">
                <MdOutlineVisibilityOff className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WedgetSm;
