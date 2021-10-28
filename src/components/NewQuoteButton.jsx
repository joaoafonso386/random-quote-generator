import React, { useContext, useState } from "react";
import { ACTIONS } from "../config/ACTIONS";
import { Context } from "../Store";

export const NewQuoteButton = () => {
  const [state, dispatch] = useContext(Context);
  const [count, setCounter] = useState(1);

  function handleClick(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.UPDATE_BACKGROUND });
    dispatch({ type: ACTIONS.UPDATE_QUOTE });
    setCounter((prev) => prev + 1);
  }

  return (
    <div className="button-counter-container">
      <button
        type="button"
        className="btn text-white rounded-3 td-1500"
        id="new-quote"
        style={{ backgroundColor: state.color }}
        onClick={handleClick}
      >
        <span>New Quote</span>
      </button>
      <span
        style={{ backgroundColor: state.color }}
        className="ml-auto p-1 alert alert-primary rounded count-style"
      >
        Quotes generated: {count}
      </span>
    </div>
  );
};
