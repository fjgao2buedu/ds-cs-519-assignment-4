import { Input } from "@mui/material";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [shipperId, setshipperId] = useState<string>("");
  const BarStyling = {
    fullWidth: true,
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("shipperId:", shipperId);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [shipperId]);

  return (
    <Input
      //   style={BarStyling}
      //   id="searchshipperid"
      value={shipperId}
      placeholder={"enter shipper id"}
      onChange={(e) => setshipperId(e.target.value)}
    />
  );
};

export default SearchBar;
