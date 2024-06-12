import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import Profile from "../components/Profile";
import Permission from "../components/Permission";
import { useNavigate } from "react-router-dom";

const tab = ["TASKS", "PROFILE", "PERMISSION"];

export default function Home() {
  const navigate = useNavigate();
  const [tabSelected, setTabSelected] = useState("TASKS");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className="navbar">
        <button onClick={logout}>ออกจากระบบ</button>
      </div>
      <div className="container">
        <div className="tab-container">
          {tab.map((item, index) => (
            <div
              className={`tab-box ${item === tabSelected && "active"}`}
              onClick={() => {
                setTabSelected(item);
              }}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="content">
          {tabSelected === "TASKS" ? (
            <Task />
          ) : tabSelected === "PROFILE" ? (
            <Profile />
          ) : tabSelected === "PERMISSION" ? (
            <Permission />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
