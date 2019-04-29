// eslint-disable-next-line no-unused-vars
import React, { Fragment, useState, useEffect } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  //Similar a componentDidMount, componentDidUpdate y componentWillUnmount
  useEffect(() => {
    document.title = `Clickeaste ${count} veces`;
  });

  return (
    <Fragment>
      <p>Clickeaste {count} veces.</p>
      <button onClick={() => setCount(count + 1)}>Clickeame</button>
    </Fragment>
  );
};

export default Example;
