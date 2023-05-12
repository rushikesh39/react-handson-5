import React, { useState } from "react";

const HigherOComponent = (WrappedComponet) => {
  function HocComponet() {
    const [count, setCount] = useState(0);
    function handle() {
      setCount(count + 1);
    }
    return(
        <div>
                <WrappedComponet value={count} submit={handle}/>
        </div>
    )
  }
  return HocComponet
}
export default HigherOComponent;
