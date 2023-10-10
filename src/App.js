import { useEffect, useState } from "react";
import { usersApi } from "./api";
import "./styles.css";
import Users from "./pages/Users";
import Modal from "./pages/modal/Modal";
import ModalOverlay from "./pages/modal/ModalOverlay";

const fetchData = async () => {
  try {
    const response = await fetch(usersApi);
    return await response.json();
  } catch (error) {
    console.log("error is:", error);
  }
}

const App = () => {
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [removedUserId, setRemovedUserId] = useState(null);

  const usersData = { data, setData, removedUserId, setRemovedUserId };
  const modalData = { modal, setModal };

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  if (!data || data.length === 0) {
    return <h2>No data</h2>;
  }

  return (
    <div className="App">
      <Users data={data} />
      {/* {modal && <Modal usersData={usersData} modalData={modalData} />}
      {modal && <ModalOverlay modalData={modalData} />} */}
    </div>
  );
}

export default App;