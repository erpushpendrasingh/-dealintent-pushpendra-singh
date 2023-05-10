import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiPhotoAlbum, BiBell, BiHelpCircle } from "react-icons/bi";
import { Avatar, Image, Box, Container, Text } from "@chakra-ui/react";
import "./navbar.css";
const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);
     console.log("isOpen:", isOpen);
     return (
          <>
               <Box className="nav-container">
                    <Box className="logo">
                         <Avatar
                              name="Dan Abrahmov"
                              src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683650177/Group_1000003537_lbtmfq.png"
                         />
                         <AiOutlineRight />
                    </Box>

                    <Box className="menu">
                         <CiSearch />
                         <BiPhotoAlbum />
                         <BiBell />
                         <BiHelpCircle />
                         <Avatar
                              name="Dan Abrahmov"
                              src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683655355/Ellipse_704_1_byflxa.png"
                         />
                    </Box>
               </Box>

               <Box p={5} position={"relative"}>
                    <Avatar
                         name="Dan Abrahmov"
                         // src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683655355/Ellipse_704_1_byflxa.png"
                         src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683650177/Group_1000003537_lbtmfq.png"
                    />
                    <Box
                         position={"absolute"}
                         top={"25px"}
                         right={"18px"}
                         className="icon-menu"
                         onClick={() => setIsOpen(true)}
                    ></Box>
               </Box>
               <Box fontSize={"30px"} p={10} width="250px">
                    {/* <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"100%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <Avatar
                              name="Dan Abrahmov"
                              src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683655355/Ellipse_704_1_byflxa.png"
                         />
                         <Text>Jane Smith</Text>
                    </Box> */}
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"80%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <CiSearch /> <Text>Search</Text>
                    </Box>
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"80%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <BiPhotoAlbum />
                         <Text>Inbox</Text>
                    </Box>
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"80%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <BiBell/> <Text>Notification</Text>
                    </Box>
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"80%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <BiHelpCircle /> <Text>Help</Text>
                    </Box>
                    <Box
                         display={"flex"}
                         alignItems={"center"}
                         width={"80%"}
                         justifyContent={"space-around"}
                         borderBottom={"1px solid #ccc"}
                    >
                         <CiSearch /> <Text>Search</Text>
                    </Box>

                    {/* < /> */}
                    {/* < /> */}
                    {/* < /> */}
               </Box>
          </>
     );
};

export default Navbar;
