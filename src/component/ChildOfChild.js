import React from "react";
import { MyContext } from "../App";
export default function ChildOfChild() {
  return (
    <div className="text-format">
          <MyContext.Consumer>
              {(value) => value}
          </MyContext.Consumer>
    </div>
  );
}
