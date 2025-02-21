import { useEffect, useRef } from "react";

function useOutsideAlerter(
  ref: any,
  menuState: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        menuState(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, menuState]);
}

function OutsideAlerter({
  children,
  menuState,
}: {
  children: any;
  menuState: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, menuState);

  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
