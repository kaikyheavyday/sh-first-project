import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../services/query";
import Calendar from "../components/Calendar";
export default function Task() {
  const { data, loading } = useQuery(GET_TASKS, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });
  console.log(data);

  return (
    <div className="tasks">
      {/* {!loading &&
        data.tasks.items.map((item, index) => (
          <div className="task-card" key={index}>
            <div>id: {item.id}</div>
            <div>name: {item.name}</div>
            <div>date: {item.postDate && item.postDate.short}</div>
          </div>
        ))} */}
      <Calendar />
    </div>
  );
}
