import React, { useState, useEffect } from 'react';
import { Button, Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useFormControl } from '@mui/material/FormControl';
import { spacing } from '@mui/system';
import axios from 'axios';

const baseInstance = axios.create({
    baseURL: "http://127.0.0.1:5000",
    //baseURL: "https://cs-squared-web-dev-backend-1095352764453.us-east4.run.app",
    timeout: undefined
  });

function ContactUs() {
  const [email, setEmail] = useState("Email");
  const [name, setName] = useState("Name");
  const [project, setProject] = useState("Project");
  const [timeLine, setTimeline] = useState("Name");
  const [techStack, setTechStack] = useState("Email");
  const [output, setOutput] = useState("");

  const onSubmitClick = () => {
    const obj = {
      e: email,
      n: name,
      p: project,
      tl: timeLine,
      ts: techStack
    }
    const print = "Email: " + obj.e + "Name: " + obj.n + "Project: " + obj.p + "Timeline" + obj.tl + "TechStack: " + obj.ts;
    setOutput(print);
    baseInstance.get("/submitContactForm/" + obj).then((data) => {
      console.log(data)
    }).catch((e) => console.error(e));
  }

  return (
    <Box>
    <h1>
      Contact Us
    </h1>
    
    <p>
      Fill out the TextBoxes below with the correct information.
    </p>

    <Stack spacing={2}>
        <TextField variant="outlined" placeholder="Enter Email Here" 
        onChange={(e) => {
        setEmail(e.target.value)
        }} />

        <TextField variant="outlined" placeholder="Enter Name Here" 
        onChange={(e) => {
        setName(e.target.value)
        }} />

        <TextField variant="outlined" placeholder="Enter Project Here" 
        onChange={(e) => {
        setProject(e.target.value)
        }} />

        <TextField variant="outlined" placeholder="Enter Timeline Here" 
        onChange={(e) => {
        setTimeline(e.target.value)
        }} />

        <TextField variant="outlined" placeholder="Enter Tech Stack Here" 
        onChange={(e) => {
        setTechStack(e.target.value)
        }} />

        <Button variant="contained"
        onClick={(e) => {
            onSubmitClick(e);
          }}
          >Submit
        </Button>
        <Box sx={{ 
        p: 2, 
        border: '1px dashed grey', 
        textAlign: 'center',
        width: 800, 
        height: 75}}>
        {output}
        </Box>

        <Box sx={{ 
        p: 2, 
        border: '1px dashed grey', 
        textAlign: 'center',
        width: 800, 
        height: 25}}>
        Thank you for responding! We will respond as soon as we can!
        </Box>
    </Stack>
    </Box>
  );
}

export default ContactUs;