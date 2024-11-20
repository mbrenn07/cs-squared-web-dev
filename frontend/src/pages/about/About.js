import { useEffect } from "react";
import axios from 'axios';

const baseInstance = axios.create({
  //baseURL: "http://127.0.0.1:5000",
  baseURL: "https://cs-squared-web-dev-backend-1095352764453.us-east4.run.app",
  timeout: undefined
});

function About() {

  useEffect(() => {
    baseInstance.get("/echo/hello").then((data) => {
      console.log(data)
    }).catch((e) => console.error(e));
  }, []);

  return (
    <>
      This is the About Us Page.
    </>
  );
}

export default About;
