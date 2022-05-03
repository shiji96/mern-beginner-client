import {
    Button,
    FormLabel,
    TextField,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import axios from "axios";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AddMaterial = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
      name: "",
      image: "",
    });
    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
      // console.log(e.target.name, "Value", e.target.value);
    };
  
    const sendRequest = async () => {
      await axios
        .post("https://mern-test-beginners-123.herokuapp.com/materials", {
          name: String(inputs.name),
          image: String(inputs.image),
        })
        .then((res) => res.data);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs, checked);
      sendRequest().then(() => history("/materials"));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel></FormLabel>
            <TextField
              placeholder="Name"
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
  
            <FormLabel></FormLabel>
            <TextField
              placeholder="Image"
              value={inputs.image}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
            />
          
  
            <Button variant="contained" type="submit">
              Add 
            </Button>
          </Box>
        </form>
  
      </div>
    );
  };
  
  export default AddMaterial;
  