import React from "react";
import { useEffect, useState } from "react";
import { usersApi } from "./api/users";
import "./styles.css";
import Main from "./pages/main/Main";
import Loader from "./pages/common-components/loader/Loader";
import { IUser } from "./models.js";

const fetchData = async () => {
  try {
    const response = await fetch(usersApi);
    return await response.json();
  } catch (error) {
    console.log("error is:", error);
  }
}

const App = () => {
  const [data, setData] = useState<IUser[]>();

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  if (!data || data.length === 0) {
    return <Loader />
  }

  return (
    <div className="App">
      <Main data={data} />
    </div>
  );
}

export default App;