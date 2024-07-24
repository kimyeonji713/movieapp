import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollTop = () => {
  const { pathname } = useLocation();
  //   console.log(location);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      //   behavior: "smooth",
    });
  }, []);
  //   [] 안에 변경되는 내용이 들어가면 식이 다시 작동

  return;
};
