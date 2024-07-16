import { useState } from "react";
export default function UseInput() {
  const [status, setStatus] = useState(false);
  const HandlerStatus = (e:any) => {
    setStatus((prev) => !prev);
  };

  return [status, HandlerStatus];
}
