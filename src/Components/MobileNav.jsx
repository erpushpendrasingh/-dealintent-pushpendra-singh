import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { BiPhotoAlbum, BiBell, BiHelpCircle } from "react-icons/bi";
import "./navbar.css";
const MobileNav = ({ status, setIsOpen }) => {
     const show = () => {
          setIsOpen(true);
     };
     const hide = () => {
          setIsOpen(false);
     };
     return (
          <Box>
               {status ? (
                    <Box
                         p={10}
                         width="60vh"
                         height={"500"}
                         border={"1px solid red"}
                         position={"relative"}
                         margin={"auto"}
                    >
                         <RxCross1 className="cross" onClick={hide} />
                         <Box mt={10} className="tab-cont">
                              <Box className="tabs">
                                   <Avatar
                                        name="Dan Abrahmov"
                                        src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683655355/Ellipse_704_1_byflxa.png"
                                   />
                                   <Text>Jane Smith</Text>
                              </Box>
                              <Box className="tabs">
                                   <CiSearch className="icon" />{" "}
                                   <Text>Search</Text>
                              </Box>
                              <Box className="tabs">
                                   <BiPhotoAlbum className="icon" />
                                   <Text>Inbox</Text>
                              </Box>
                              <Box className="tabs">
                                   <BiBell className="icon" />
                                   <Text>Notification</Text>
                              </Box>
                              <Box className="tabs">
                                   <BiHelpCircle className="icon" />{" "}
                                   <Text>Help</Text>
                              </Box>
                              <Box className="tabs">
                                   <CiSearch className="icon" />{" "}
                                   <Text>Search</Text>
                              </Box>
                         </Box>
                    </Box>
               ) : (
                    <Box className="mob-nav">
                         <Avatar src="https://res.cloudinary.com/dgstmfnsx/image/upload/v1683650177/Group_1000003537_lbtmfq.png" />
                         <Box
                              position={"absolute"}
                              top={"25px"}
                              right={"18px"}
                              className="icon-menu"
                              onClick={show}
                         ></Box>
                    </Box>
               )}
          </Box>
     );
};

export default MobileNav;
