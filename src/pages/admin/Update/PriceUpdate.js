import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  Fade,
  Backdrop,
  Dialog,
  TextField,
  Select,
  OutlinedInput,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import {
  getDatabase,
  ref,
  get,
  remove,
  update,
  push,
  add,
  set,
  child,
} from "firebase/database";
import { useParams } from "react-router-dom";
import app from "../../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
import UpdateSharpIcon from "@mui/icons-material/UpdateSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import Admin from "../Admin";


const PriceUpdate = () => {
  // For the Hair Section
  const [showHaircutModal, setShowHaircutModal] = useState(false);
  // For the Skin Section
  const [showCleanUpModal, setshowCleanUpModal] = useState(false);
  //For the Nail Section
  const [showPedicureModal, setshowPedicureModal] = useState(false);
  //For the Body Section
  const [showWaxingModal, setShowWaxingModal] = useState(false);
  //For the Bridal Section
  const [showDressingModal, setshowDressingModal] = useState(false);

  //---------------Hair Section-------------------------------
  const [inputType, setInputType] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [typeOptions, setTypeOptions] = useState([]);
  const [inputTypeForAdd, setInputTypeForAdd] = useState("");
  const [inputPriceForAdd, setInputPriceForAdd] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  //-----Skin Section------------------------------------------
  const [inputTypeSkin, setInputTypeSkin] = useState("");
  const [inputPriceSkin, setInputPriceSkin] = useState("");
  const [typeOptionsSkin, setTypeOptionsSkin] = useState([]);
  const [inputTypeForAddSkin, setInputTypeForAddSkin] = useState("");
  const [inputPriceForAddSkin, setInputPriceForAddSkin] = useState("");
  const [isCheckboxCheckedSkin, setIsCheckboxCheckedSkin] = useState(false);

  //-----Nail Section------------------------------------------
  const [inputTypeNail, setInputTypeNail] = useState("");
  const [inputPriceNail, setInputPriceNail] = useState("");
  const [typeOptionsNail, setTypeOptionsNail] = useState([]);
  const [inputTypeForAddNail, setInputTypeForAddNail] = useState("");
  const [inputPriceForAddNail, setInputPriceForAddNail] = useState("");
  const [isCheckboxCheckedNail, setIsCheckboxCheckedNail] = useState(false);

  //-----Body Section------------------------------------------
  const [inputTypeBody, setInputTypeBody] = useState("");
  const [inputPriceBody, setInputPriceBody] = useState("");
  const [typeOptionsBody, setTypeOptionsBody] = useState([]);
  const [inputTypeForAddBody, setInputTypeForAddBody] = useState("");
  const [inputPriceForAddBody, setInputPriceForAddBody] = useState("");
  const [isCheckboxCheckedBody, setIsCheckboxCheckedBody] = useState(false);

  //-----Bridal  Section------------------------------------------
  const [inputTypeBridal, setInputTypeBridal] = useState("");
  const [inputPriceBridal, setInputPriceBridal] = useState("");
  const [typeOptionsBridal, setTypeOptionsBridal] = useState([]);
  const [inputTypeForAddBridal, setInputTypeForAddBridal] = useState("");
  const [inputPriceForAddBridal, setInputPriceForAddBridal] = useState("");
  const [isCheckboxCheckedBridal, setIsCheckboxCheckedBridal] = useState(false);

  //---------------------------------------Hair Section handeling start-----------------------------------

  const handleTypeChangeForAdd = (e) => {
    setInputTypeForAdd(e.target.value);
  };
  const handlePriceChangeForAdd = (e) => {
    setInputPriceForAdd(e.target.value);
  };
  const handleTypeChange = (e) => {
    const { value } = e.target;
    setInputType(value);
    setInputPrice(typeOptions.find((d) => d?.key === value)?.price);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  const handleCheckBoxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  //---------------------------------------Hair Section handeling End------------------------------------

  //---------------------------------------Skin Section handeling Start------------------------------------

  const handleTypeChangeForAddSkin = (e) => {
    setInputTypeForAddSkin(e.target.value);
  };
  const handlePriceChangeForAddSkin = (e) => {
    setInputPriceForAddSkin(e.target.value);
  };
  const handleTypeChangeSkin = (e) => {
    const { value } = e.target;
    setInputTypeSkin(value);
    setInputPriceSkin(typeOptionsSkin.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeSkin = (e) => {
    setInputPriceSkin(e.target.value);
  };

  const handleCheckBoxChangeSkin = (event) => {
    setIsCheckboxCheckedSkin(event.target.checked);
  };
  //---------------------------------------Skin Section handeling End------------------------------------

  //---------------------------------------Nail Section handeling Start------------------------------------

  const handleTypeChangeForAddNail = (e) => {
    setInputTypeForAddNail(e.target.value);
  };
  const handlePriceChangeForAddNail = (e) => {
    setInputPriceForAddNail(e.target.value);
  };
  const handleTypeChangeNail = (e) => {
    const { value } = e.target;
    setInputTypeNail(value);
    setInputPriceNail(typeOptionsNail.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeNail = (e) => {
    setInputPriceNail(e.target.value);
  };

  const handleCheckBoxChangeNail = (event) => {
    setIsCheckboxCheckedNail(event.target.checked);
  };
  //---------------------------------------Nail Section handeling End------------------------------------

  //---------------------------------------Body Section handeling Start------------------------------------
  const handleTypeChangeForAddBody = (e) => {
    setInputTypeForAddBody(e.target.value);
  };
  const handlePriceChangeForAddBody = (e) => {
    setInputPriceForAddBody(e.target.value);
  };
  const handleTypeChangeBody = (e) => {
    const { value } = e.target;
    setInputTypeBody(value);
    setInputPriceBody(typeOptionsBody.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeBody = (e) => {
    setInputPriceBody(e.target.value);
  };

  const handleCheckBoxChangeBody = (event) => {
    setIsCheckboxCheckedBody(event.target.checked);
  };

  //---------------------------------------Body Section handeling End------------------------------------

  //---------------------------------------Bridal Section handeling Start------------------------------------

  const handleTypeChangeForAddBridal = (e) => {
    setInputTypeForAddBridal(e.target.value);
  };
  const handlePriceChangeForAddBridal = (e) => {
    setInputPriceForAddBridal(e.target.value);
  };
  const handleTypeChangeBridal = (e) => {
    const { value } = e.target;
    setInputTypeBridal(value);
    setInputPriceBridal(typeOptionsBridal.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeBridal = (e) => {
    setInputPriceBridal(e.target.value);
  };

  const handleCheckBoxChangeBridal = (event) => {
    setIsCheckboxCheckedBridal(event.target.checked);
  };

  //---------------------------------------Bridal  Section handeling End------------------------------------

  const clearFields = () => {
    setInputTypeForAdd("");
    setInputPriceForAdd("");

    setInputTypeForAddSkin("");
    setInputPriceForAddSkin("");

    setInputPriceForAddNail("");
    setInputTypeForAddNail("");

    setInputPriceForAddBody("");
    setInputTypeForAddBody("");

    setInputPriceForAddBridal("");
    setInputTypeForAddBridal("");

    // setInputType("");
    // setInputPrice("");

    setIsCheckboxChecked(false);

    setIsCheckboxCheckedSkin(false);

    setIsCheckboxCheckedNail(false);

    setIsCheckboxCheckedBody(false);

    setIsCheckboxCheckedBridal(false);
  };

  // Function to handle button click and open the modal in Bridal section
  const handlebridalButtonClick = () => {
    setshowDressingModal(true);
  };
  // Function to close the modal  in Body section
  const handleCloseModalBridal = () => {
    setshowDressingModal(false);
  };
  // Function to handle button click and open the modal in Body section
  const handleBodyButtonClick = () => {
    setShowWaxingModal(true);
  };
  // Function to close the modal  in Body section
  const handleCloseModalBody = () => {
    setShowWaxingModal(false);
  };
  // Function to handle button click and open the modal in Nail section
  // eslint-disable-next-line
  const handleNailButtonClick = () => {
    setshowPedicureModal(true);
  };
  // Function to close the modal  in Nail section
  const handleCloseModalNail = () => {
    setshowPedicureModal(false);
  };
  // Function to handle button click and open the modal in Skin section
  // eslint-disable-next-line
  const handleSkinButtonClick = () => {
    setshowCleanUpModal(true);
  };
  // Function to close the modal  in Skin section
  const handleCloseModalSkin = () => {
    setshowCleanUpModal(false);
  };
  // Function to handle button click and open the modal in Hair section
  // eslint-disable-next-line
  const handleHairButtonClick = () => {
    setShowHaircutModal(true);
  };
  // Function to close the modal in Hair section
  const handleCloseModalHair = () => {
    setShowHaircutModal(false);
  };
  //------------------------------------------Hair Section---CRUD Opeartions Start-------------------------------------------------------------
  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the database
  const fetchData = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/haircut"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Eshan", data);
        setTypeOptions(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add new record to the database
  const addRecord = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/haircut/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAdd,
        price: inputPriceForAdd,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
      fetchData();
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecord = async () => {
    try {
      const firebaseId = inputType;
      const type = typeOptions.find((d) => d?.key === inputType)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", inputType);
      console.log("Input Price:", inputPrice);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/haircut/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputType and inputPrice are not empty or null
      if (!inputType || !inputPrice) {
        throw new Error("Invalid inputType or inputPrice");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPrice });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecord = async () => {
    try {
      const firebaseId = inputType;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/haircut/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      clearFields();
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  //------------------------------------------Hair Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Skin Section---CRUD Opeartions Start-------------------------------------------------------------//
  useEffect(() => {
    fetchDataForSkin();
  }, []);

  // Fetch data from the database
  const fetchDataForSkin = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/Skin"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Shashi", data);

        setTypeOptionsSkin(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add new record to the database
  const addRecordForSkin = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/Skin/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddSkin,
        price: inputPriceForAddSkin,
      }); // Set type and price fields
      
      toast.success("New record added successfully");
      //clearFields();
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForSkin = async () => {
    try {
      const firebaseId = inputTypeSkin;
      const type = typeOptionsSkin.find((d) => d?.key === inputTypeSkin)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputPriceSkin);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/Skin/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeSkin || !inputPriceSkin) {
        throw new Error("Invalid inputTypSkin or inputPriceSkin");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceSkin });
    
      toast.success("Record updated successfully");
      clearFields();
      fetchDataForSkin(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForSkin = async () => {
    try {
      const firebaseId = inputTypeSkin;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/Skin/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      clearFields();
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchDataForSkin(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  //------------------------------------------Skin Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Nail Section---CRUD Opeartions Start-------------------------------------------------------------//
  useEffect(() => {
    fetchDataForNail();
  }, []);

  // Fetch data from the database
  const fetchDataForNail = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/nail"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsNail(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add new record to the database
  const addRecordForNail = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/nail/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddNail,
        price: inputPriceForAddNail,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForNail = async () => {
    try {
      const firebaseId = inputTypeNail;
      const type = typeOptionsNail.find((d) => d?.key === inputTypeNail)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputPriceNail);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/nail/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeNail || !inputPriceNail) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceNail });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForNail = async () => {
    try {
      const firebaseId = inputTypeNail;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/nail/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      clearFields();
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  //------------------------------------------Nail Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Body Section---CRUD Opeartions Start-------------------------------------------------------------//

  useEffect(() => {
    fetchDataForBody();
  }, []);

  // Fetch data from the database
  const fetchDataForBody = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/body"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsBody(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Add new record to the database
  const addRecordForbody = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/body/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddBody,
        price: inputPriceForAddBody,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForBody = async () => {
    try {
      const firebaseId = inputTypeBody;
      const type = typeOptionsBody.find((d) => d?.key === inputTypeBody)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputTypeBody);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/body/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeBody || !inputPriceBody) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceBody });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database ffffffffffffffffffff

  const deleteRecordForBody = async () => {
    try {
      const firebaseId = inputTypeBody;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/body/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  //------------------------------------------Body Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Bridal Section---CRUD Opeartions Start-------------------------------------------------------------//
  useEffect(() => {
    fetchDataForBridal();
  }, []);

  // Fetch data from the database
  const fetchDataForBridal = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/bridal"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsBridal(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Add new record to the database
  const addRecordForBridal = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/bridal/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddBridal,
        price: inputPriceForAddBridal,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForBridal = async () => {
    try {
      const firebaseId = inputTypeBridal;
      const type = typeOptionsBridal.find(
        (d) => d?.key === inputTypeBridal
      )?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputTypeBridal);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/bridal/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeBridal || !inputPriceBridal) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceBridal });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForBridal = async () => {
    try {
      const firebaseId = inputTypeBridal;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/bridal/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };
  //------------------------------------------Bridal Section---CRUD Opeartions End-------------------------------------------------------------//

  // Custom Card component
  const CustomCard = ({ children }) => {
    return (
      
      <Grid item xs={5}>
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
    <Admin/>
      <Box
      sx={{
     
        width: '60%', // Adjust width as needed
        height: '80vh', // Adjust height as needed
        marginLeft: '420px', // Adjust left margin as needed
        padding: '10px', // Optional padding for inner content spacing
       
      }}
      >
        <Typography sx={{textAlign:"center",fontWeight:"700",fontSize:"30px", marginLeft: 8,   color: "#A91079",fontFamily:"Georgia, serif"}}>Manage Services</Typography>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", marginY: "auto" }}
        >
          <CustomCard>
            <Typography
              fontWeight={"700"}
              textAlign={"center"}
              variant="h6"
              fontFamily={"system-ui"}
            >
              Hair Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFC5C5, #FFBED8)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "2px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setShowHaircutModal}
                  variant="contained"
                >
                  Hair Cut Price
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography
              fontWeight={"700"}
              textAlign={"center"}
              variant="h6"
              fontFamily={"system-ui"}
            >
              Skin Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFC5C5, #FFBED8)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "2px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setshowCleanUpModal}
                  variant="contained"
                >
                  CleanUp Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography
              fontWeight={"700"}
              textAlign={"center"}
              variant="h6"
              fontFamily={"system-ui"}
            >
              Nail Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFC5C5, #FFBED8)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "2px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setshowPedicureModal}
                  variant="contained"
                >
                  Pedicure &  Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography
              fontWeight={"700"}
              textAlign={"center"}
              variant="h6"
              fontFamily={"system-ui"}
            >
              Body Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFC5C5, #FFBED8)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "2px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setShowWaxingModal}
                  variant="contained"
                >
                  Waxing Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography
              fontWeight="700"
              textAlign="center"
              variant="h6"
              fontFamily="system-ui"
            >
              Bridal Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "center",
                background: "linear-gradient(135deg, #FFC5C5, #FFBED8)",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "2px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setshowDressingModal}
                  variant="contained"
                >
                  DRESSING Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
        </Grid>
      </Box>
      {/* -----------------------------------------------------Modal for Hair Cut Price Start---------------------------------------------------- */}

      <Dialog
        open={showHaircutModal}
        onClose={handleCloseModalHair}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          px: 4,
          margin: "0 auto", // Center the modal horizontally
        }}
      >
        <Fade in={showHaircutModal}>
          <div>
            <Typography
              align="center"
              fontWeight={700}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Hair Cut Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={4}>
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>

            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxChecked}
              onChange={handleCheckBoxChange}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxChecked}
                variant="outlined"
                value={inputTypeForAdd}
                onChange={handleTypeChangeForAdd}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add Price"
                disabled={!isCheckboxChecked}
                variant="outlined"
                value={inputPriceForAdd}
                onChange={handlePriceChangeForAdd}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>
            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={3}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  disabled={!(isCheckboxChecked && inputPriceForAdd && inputTypeForAdd)}
                  startIcon={<AddCircleOutlineSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    deleteRecord();
                    clearFields(); // Clear fields after deletion
                  }}
                  startIcon={<DeleteSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecord()}
                  startIcon={<UpdateSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalHair}
                  startIcon={<HighlightOffRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>
      {/* -----------------------------------------------------Modal for Hair Price End---------------------------------------------------- */}

      {/* -----------------------------------------------------Modal for Skin Price Start---------------------------------------------------- */}

      <Dialog
        open={showCleanUpModal}
        onClose={handleCloseModalSkin}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          px: 4,
          margin: " 0 auto",
        }}
      >
        <Fade in={showCleanUpModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Skin CleanUp Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={4}>
              <Select
                value={inputTypeSkin}
                onChange={handleTypeChangeSkin}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsSkin.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                
                label="Price"
                variant="outlined"
                value={inputPriceSkin}
                onChange={handlePriceChangeSkin}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxCheckedSkin}
              onChange={handleCheckBoxChangeSkin}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxCheckedSkin}
                variant="outlined"
                value={inputTypeForAddSkin}
                onChange={handleTypeChangeForAddSkin}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add Price"
                disabled={!isCheckboxCheckedSkin}
                variant="outlined"
                value={inputPriceForAddSkin}
                onChange={handlePriceChangeForAddSkin}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>

            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={3}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecordForSkin}
                  disabled={!(isCheckboxCheckedSkin && inputPriceForAddSkin && inputTypeForAddSkin)}
                  startIcon={<AddCircleOutlineSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecordForSkin()}
                  startIcon={<DeleteSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecordForSkin()}
                  startIcon={<UpdateSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalSkin}
                  startIcon={<HighlightOffRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* -----------------------------------------------------Modal for Skin Price End---------------------------------------------------- */}

      {/* -----------------------------------------------------Modal for Nail Price Start---------------------------------------------------- */}

      <Dialog
        open={showPedicureModal}
        onClose={handleCloseModalNail}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          px: 4,
          margin: " 0 auto",
        }}
      >
        <Fade in={showPedicureModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Pedicure Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={4}>
              {/* Select for type */}
              <Select
                value={inputTypeNail}
                onChange={handleTypeChangeNail}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsNail.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
              
                label="Price"
                variant="outlined"
                value={inputPriceNail}
                onChange={handlePriceChangeNail}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxCheckedNail}
              onChange={handleCheckBoxChangeNail}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxCheckedNail}
                variant="outlined"
                value={inputTypeForAddNail}
                onChange={handleTypeChangeForAddNail}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add Price"
                disabled={!isCheckboxCheckedNail}
                variant="outlined"
                value={inputPriceForAddNail}
                onChange={handlePriceChangeForAddNail}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>

            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={3}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecordForNail}
                  disabled={!(isCheckboxCheckedNail && inputPriceForAddNail && inputTypeForAddNail)}
                  startIcon={<AddCircleOutlineSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => deleteRecordForNail()}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => updateRecordForNail()}
                  variant="contained"
                  color="success"
                  startIcon={<UpdateSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalNail}
                  startIcon={<HighlightOffRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* -----------------------------------------------------Modal for Nail Cut Price End---------------------------------------------------- */}

      {/* -----------------------------------------------------Modal for Body Cut Price Start---------------------------------------------------- */}

      <Dialog
        open={showWaxingModal}
        onClose={handleCloseModalBody}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          px: 4,
          margin: " 0 auto",
        }}
      >
        <Fade in={showWaxingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Waxing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Select
                value={inputTypeBody}
                onChange={handleTypeChangeBody}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsBody.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
              
                label="Price"
                variant="outlined"
                value={inputPriceBody}
                onChange={handlePriceChangeBody}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxCheckedBody}
              onChange={handleCheckBoxChangeBody}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxCheckedBody}
                variant="outlined"
                value={inputTypeForAddBody}
                onChange={handleTypeChangeForAddBody}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add Price"
                disabled={!isCheckboxCheckedBody}
                variant="outlined"
                value={inputPriceForAddBody}
                onChange={handlePriceChangeForAddBody}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>

            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={3}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecordForbody}
                  disabled={!(isCheckboxCheckedBody && inputPriceForAddBody && inputTypeForAddBody)}
                  startIcon={<AddCircleOutlineSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => deleteRecordForBody()}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => updateRecordForBody()}
                  variant="contained"
                  color="success"
                  startIcon={<UpdateSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBody}
                  startIcon={<HighlightOffRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* -----------------------------------------------------Modal for Body  Price End---------------------------------------------------- */}

      {/* -----------------------------------------------------Modal for Bridal  Price Start---------------------------------------------------- */}

      <Dialog
        open={showDressingModal}
        onClose={handleCloseModalBridal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          px: 4,
          margin: " 0 auto",
        }}
      >
        <Fade in={showDressingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Dressing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={4}>
              <Select
                value={inputTypeBridal}
                onChange={handleTypeChangeBridal}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsBridal.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
               
                label="Price"
                variant="outlined"
                value={inputPriceBridal}
                onChange={handlePriceChangeBridal}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxCheckedBridal}
              onChange={handleCheckBoxChangeBridal}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxCheckedBridal}
                variant="outlined"
                value={inputTypeForAddBridal}
                onChange={handleTypeChangeForAddBridal}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add Price"
                disabled={!isCheckboxCheckedBridal}
                variant="outlined"
                value={inputPriceForAddBridal}
                onChange={handlePriceChangeForAddBridal}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>

            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={3}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecordForBridal}
                  disabled={!(isCheckboxCheckedBridal && inputPriceForAddBridal && inputTypeForAddBridal)}
                  startIcon={<AddCircleOutlineSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => deleteRecordForBridal()}
                  variant="contained"
                  color="error"
                  startIcon={<DeleteSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecordForBridal()}
                  startIcon={<UpdateSharpIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBridal}
                  startIcon={<HighlightOffRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>
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

export default PriceUpdate;
