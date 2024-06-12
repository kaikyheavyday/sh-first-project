import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PERMISSION } from "../services/query";

export default function Permission() {
  const { data, loading } = useQuery(GET_PERMISSION);
  console.log(data);

  return (
    <div className="tasks">
      {!loading &&
        data.myPermissions.map((item, index) => (
          <div className="task-card">
            <div>{item.permission.name}</div>
          </div>
        ))}
    </div>
  );
}
