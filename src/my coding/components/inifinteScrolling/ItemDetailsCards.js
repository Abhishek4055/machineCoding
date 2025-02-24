import React from "react";

function ItemDetailsCards({ item }) {
  return (
    <li>
      <h3>
        {item.id} :-{item?.title}
      </h3>
      <p>{item?.body}</p>
    </li>
  );
}

export default ItemDetailsCards;
