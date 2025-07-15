import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [userData, setUserData] = useState([]);

  const handleSendValue = (data) => {
    setUserData([...userData, data]);
    setShowTable(true);
    setShowPopup(false);
  };

  const handleBack = () => {
    setShowTable(false);
    setShowPopup(true);
  };

  return (
    <>
      {showPopup && (
        <Form
          setShowPopup={setShowPopup}
          setShowTable={setShowTable}
          sendValue={handleSendValue}
        />
      )}

      {showTable && <Table userData={userData} onBack={handleBack} />}
    </>
  );
}

export default App;
