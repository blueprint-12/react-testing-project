import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail({ title, contents }) {
  return (
    <div className="detail">
      <title>{title}</title>
      <p>{contents}</p>
    </div>
  );
}

export default ItemDetail;
