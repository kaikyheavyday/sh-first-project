import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../services/query";
import { useStoreActions, useStoreState } from "easy-peasy";

export default function Profile() {
  const { data, loading } = useQuery(GET_PROFILE);
  const todos = useStoreState((state) => state.todos);
  const setTodos = useStoreActions((actions) => actions.setTodos);
  const [value, setValue] = React.useState("");

  return (
    <div>
      {!loading && (
        <div>
          <h3>name: {data.myProfile.name}</h3>
          <p>id: {data.myProfile.id}</p>
          <p>email: {data.myProfile.email}</p>
          <p>position: {data.myProfile.position}</p>
          <p>tel: {data.myProfile.tel}</p>
          <input onChange={(e) => setValue(e.target.value)} value={value} />
          <button onClick={() => setTodos(value)}>Add Todo</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
