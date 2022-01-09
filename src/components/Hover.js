import { useRef } from "react";
import useHover from "../hooks/useHover";

const Hover = () => {
  const ref = useRef();
  const isHovering = useHover(ref);
  console.log(isHovering);
  const onClickHandler = () => console.log(ref.current);

  return (
    <div ref={ref} style={{ width: 100, height: 100, background: "red" }}>
      <button onClick={onClickHandler}>click</button>
    </div>
  );
};

export default Hover;
