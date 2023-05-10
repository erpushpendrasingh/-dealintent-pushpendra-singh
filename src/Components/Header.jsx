import {
     Avatar,
     Box,
     Button,
     Heading,
     Tab,
     Tabs,
     Text,
} from "@chakra-ui/react";
import "./header.css";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
const Header = () => {
     return (
          <Box
               width={"90%"}
               margin={"auto"}
               h="350px"
               p={5}
               background={"#F2FBF9"}
               position={"relative"}
          >
               <Box>
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-between"}
                    >
                         <Heading>WeWork + Salesforce</Heading>
                         <Button colorScheme="green">Public/Share</Button>
                    </Box>
                    <Box className="header-card">
                         <Box className="sub-card">
                              <Heading className="h1">
                                   Workspace Proposal
                              </Heading>
                         </Box>
                    </Box>
                    <Box
                         w="200px"
                         h="80px"
                         borderRadius={"10px"}
                         backgroundColor="#ffff "
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-around"}
                         position={"absolute"}
                         bottom="50px"
                         left={"50px"}
                    >
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
          </Box>
     );
};

export default Header;
