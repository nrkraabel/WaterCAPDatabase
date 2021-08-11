import React, { useState } from "react";
import { db } from "../firebase";
import "./DataInput.css";

const DataSubmit = () => {
  const [UtilityName, setUtilityName] = useState("");
  const [ProgramName, setProgramName] = useState("");
  const [Url, setUrl] = useState("");
  const [Email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!UtilityName.trim()) {
      alert("Please Enter utility name");
      return;
    }
    //Check for the Email TextInput
    if (!ProgramName.trim()) {
      alert("Please Enter program name");
      return;
    }
    if (!Url.trim()) {
      alert("Please Enter Url");
      return;
    }
    db.collection("PublicProgramSubmit")
      .add({
        UtilityName: UtilityName,
        ProgramName: ProgramName,
        Url: Url,
        Email: Email,
      })
      .then(() => {
        alert("Info has been submit, thanks.");
      })
      .catch((error) => {
        alert(error.message);
      });
    setUtilityName("");
    setProgramName("");
    setUrl("");
    setEmail("");
  };
  return (
    <form class="formInput" onSubmit={handleSubmit}>
      <h2 class="h2Input"> Data input</h2>
      <p type="Name Utilty:" class="pg">
        <input
          class="inputBox"
          placeholder="Write the offical name of the utilty here.."
          value={UtilityName}
          onChange={(e) => setUtilityName(e.target.value)}
        />
      </p>
      <p type="Program Name:" class="pg">
        <input
          class="inputBox"
          placeholder="Write the offical program name here.."
          value={ProgramName}
          onChange={(e) => setProgramName(e.target.value)}
        />
      </p>
      <p type="Url:" class="pg">
        <input
          class="inputBox"
          placeholder="Copy in the URL here.."
          value={Url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </p>
      <p type="Email:" class="pg">
        <input
          class="inputBox"
          placeholder="Enter contact email..."
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <button class="buttonInput">Add Program</button>
    </form>
  );
};

export default DataSubmit;
