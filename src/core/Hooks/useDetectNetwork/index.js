import axios from "axios";
import React from "react";

var slow;

const getOnLineStatus = () =>
  typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;

const useDetectNetwork = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());
  const [speed, setSpeed] = React.useState("");
  const [Reload, setReload] = React.useState(true);

  const setOnline = () => {
    setStatus(true);
  };
  const setOffline = () => {
    setStatus(false);
    setSpeed("No Connection");
  };
  const setSlowCon = () => {
    slow = setTimeout(function () {
      setSpeed("Poor Connection");
      // console.log("2");
    }, 1500);
  };
  const mathCon = () => {
    axios
      .get("https://picsum.photos/640/480")
      .then((res) => {
        if (res) {
          window.clearTimeout(slow);
          setTimeout(() => {
            // localStorage.setItem("net-speed", "1");
            setSpeed("Fine Connection");
            setReload(!Reload);
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    if (Reload) {
      setSlowCon();
    }
    mathCon();

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
    // eslint-disable-next-line
  }, [Reload]);

  return { speed, status };
};

export default useDetectNetwork;
