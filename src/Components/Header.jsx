import { Avatar, Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./header.css";
const Header = () => {
     return (
          <Box className="head-container">
               <Box className="heading">
                    <Heading className="title">WeWork + Salesforce</Heading>
                    <Button colorScheme="green">Public/Share</Button>
               </Box>
               <Box className="header-card">
                    <Box className="sub-card">
                         <Heading className="h1">Workspace Proposal</Heading>
                    </Box>
               </Box>
               <Box className="head-icon-box">
                    <Avatar
                         name="Dan Abrahmov"
                         src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683657358/wework_1_1_ghcjis.png"
                    />
                    <AiOutlinePlus />
                    <Avatar
                         name="Dan Abrahmov"
                         src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683657368/image_140_1_wkaqqj.png"
                    />
               </Box>
          </Box>
     );
};

export default Header;
