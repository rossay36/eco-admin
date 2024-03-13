import "./UserList.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/apiCalls";

const UserList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="userList">
      <div className="userList__table">
        <div className="userList__top">
          <div className="userList__top-header">
            <h3 className="userList__headerId">ID</h3>
          </div>
          <div className="userList__top-user">
            <h3 className="userList__headerUser">Users</h3>
          </div>
          <div className="userList__top-email">
            <h3 className="userList__headerEmail">Email</h3>
          </div>
          <div className="userList__top-action">
            <h3 className="userList__headerName">Actions</h3>
          </div>
        </div>
        {user.map((item) => (
          <div className="userList__User" key={item._id}>
            <div className="userList__id">
              <span>{item._id}</span>
            </div>
            <div className="userList__image">
              <img
                className="userList__Img"
                src="../../../src/assets/avatar1.jpg"
                alt="user image"
              />
              <span>{item?.username}</span>
            </div>
            <div className="userList__email">
              <span>{item?.email}</span>
            </div>
            <div className="userList__edited">
              <Link to={"/user" + item._id}>
                <button className="userList__edit">Edit</button>
              </Link>
              <MdOutlineDeleteOutline
                className="userList__btn"
                onClick={() => handleDelete(item._id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
