import React from "react";
import { useParams } from "react-router-dom";

export default function Project() {
  const { id } = useParams();

  return (
    <div>
      <h1>Project #{id}</h1>
    </div>
  );
}
