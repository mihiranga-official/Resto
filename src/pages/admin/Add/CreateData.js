import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { getDatabase, ref, push, set } from "firebase/database";
import app from "../../../services/firebaseConfig"
import toast, { Toaster } from "react-hot-toast";

const CreateData = () => {
  const [inputType, setInputType] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  const saveData = async () => {
    const db = getDatabase(app);
    const newPostRef = push(ref(db, "createprice/haircut"));
    set(newPostRef, {
      type: inputType,
      price: inputPrice,
    })
      .then(() => {
        toast.success("New Price List Added Succesfully");
      })
      .catch((error) => {
        toast.error("Data has not created ");
      });
  };

  return (
    <>
      <TextField
        type="text"
        value={inputType}
        onChange={handleTypeChange}
        label="Type"
      />
      <TextField
        type="text"
        value={inputPrice}
        onChange={handlePriceChange}
        label="Price"
      />
      <Button variant="contained" color="success" onClick={saveData}>
        Save Data
      </Button>
      <Toaster
              toastOptions={{
                duration: 5000,
                className: "",
                style: {
                  color: "#713200",
                },
              }}
              position="top-right"
            />
    </>
  );
};

export default CreateData;
