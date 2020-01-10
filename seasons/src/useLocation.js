import { useState, useEffect } from "react";
export default () => {
  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMsg(error.message)
    );
  }, []);

  return [lat, errorMsg];
};
