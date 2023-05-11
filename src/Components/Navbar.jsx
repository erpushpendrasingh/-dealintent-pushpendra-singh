import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BiPhotoAlbum, BiBell, BiHelpCircle } from "react-icons/bi";
import { Avatar, Image, Box, Container, Text } from "@chakra-ui/react";
import "./navbar.css";
import MobileNav from "./MobileNav";
const Navbar = () => {
     const [status, setIsOpen] = useState(false);
     console.log("isOpen:", status);
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
               <MobileNav setIsOpen={setIsOpen} status={status} />
          </>
     );
};

export default Navbar;
