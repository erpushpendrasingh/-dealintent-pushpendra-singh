import "./company.css";
import { VscFilePdf } from "react-icons/vsc";
import {
     AiOutlineArrowDown,
     AiOutlineZoomIn,
     AiOutlineZoomOut,
} from "react-icons/ai";
import { TbWindowMaximize } from "react-icons/tb";
import {
     Box,
     Button,
     HStack,
     Heading,
     IconButton,
     Text,
     VStack,
     background,
} from "@chakra-ui/react";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";
// import { IoTrashOutline } from "react-icons/io";
import { VscTrash } from "react-icons/vsc";
const CompanyProfile = () => {
     return (
          <Box background={"#F2FBF9"} w="90%" margin={"auto"}>
               <Box
                    width={"100%"}
                    height={"80px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={5}
               >
                    <Text fontSize={"25px"}>Project Scope Recap</Text>
                    <Box>
                         <Box
                              display={"flex"}
                              w="350px"
                              alignItems={"center"}
                              justifyContent={"space-between"}
                         >
                              <Text fontSize={"25px"}>Mutual Action Plan</Text>{" "}
                              <Heading>3%</Heading>
                         </Box>
                         <Box
                              display={"flex"}
                              w="350px"
                              alignItems={"center"}
                              justifyContent={"space-between"}
                         >
                              <Box
                                   background={"green"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                              <Box
                                   background={"#ccc"}
                                   h={"18px"}
                                   w="18px"
                              ></Box>
                         </Box>
                    </Box>
               </Box>
               <Box
                    className="navigations"
                    margin={"auto"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width={"100%"}
                    p={5}
               >
                    <Box
                         width={"35.3%"}
                         display={"flex"}
                         alignItems={"center"}
                         justifyContent={"space-around"}
                    >
                         <Button
                              borderBottomRadius={"0"}
                              variant={"outline"}
                              border={"1px solid #ccc"}
                              borderTopRadius={"10px"}
                              h="55px"
                         >
                              {" "}
                              Basic Info
                         </Button>
                         <Button
                              borderBottomRadius={"0"}
                              variant={"outline"}
                              border={"1px solid #ccc"}
                              borderTopRadius={"10px"}
                              h="55px"
                         >
                              Files
                         </Button>
                         <Button
                              borderBottomRadius={"0"}
                              variant={"outline"}
                              border={"1px solid #ccc"}
                              borderTopRadius={"10px"}
                              h="55px"
                         >
                              Mutual Action Plan
                         </Button>
                         <Button
                              borderBottomRadius={"0"}
                              variant={"outline"}
                              border={"1px solid #ccc"}
                              borderTopRadius={"10px"}
                              h="55px"
                         >
                              Contact
                         </Button>
                    </Box>
                    <Button
                         borderBottomRadius={"0"}
                         variant={"outline"}
                         border={"1px solid #ccc"}
                         borderTopRadius={"10px"}
                         h="55px"
                    >
                         Internal Actions
                    </Button>
               </Box>
               <Box className="site">
                    <aside className="sidebar">
                         <Box
                              w={"300px"}
                              h={"400px"}
                              background={"white"}
                              p="5"
                              borderRadius="10px"
                         >
                              <Text
                                   borderBottom={"1px solid #ccc"}
                                   fontWeight={"500"}
                                   fontSize="20px"
                                   p={5}
                              >
                                   Overview
                              </Text>
                              <Text borderBottom={"1px solid #ccc"} p={5}>
                                   Welcome
                              </Text>
                              <Text borderBottom={"1px solid #ccc"} p={5}>
                                   Product Capabilities
                              </Text>
                              <Text borderBottom={"1px solid #ccc"} p={5}>
                                   Customer Success Stories
                              </Text>
                              <Text borderBottom={"1px solid #ccc"} p={5}>
                                   File Sharing
                              </Text>
                              <Text borderBottom={"1px solid #ccc"} p={5}>
                                   Our Deck
                              </Text>
                         </Box>
                    </aside>
                    <main className="main">
                         <header className="header">
                              <Text>Company Profile</Text>
                              <Box>
                                   <IconButton
                                        variant="outline"
                                        colorScheme="teal"
                                        aria-label="Send email"
                                        icon={<BsArrowDown />}
                                   />
                                   <IconButton
                                        variant="outline"
                                        colorScheme="teal"
                                        aria-label="Send email"
                                        icon={<FiEyeOff />}
                                   />
                                   <IconButton
                                        variant="outline"
                                        colorScheme="teal"
                                        aria-label="Send email"
                                        icon={<VscTrash />}
                                   />
                              </Box>
                         </header>
                         <Box className="main">
                              <Box className="tool">
                                   <Box
                                        w={"60px"}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        borderRight={"2px solid #ccc"}
                                   >
                                        <VscFilePdf />
                                        <Text>1/20</Text>
                                   </Box>
                                   <AiOutlineArrowDown />
                                   <AiOutlineZoomOut />
                                   <AiOutlineZoomIn />
                                   <TbWindowMaximize />
                              </Box>
                              <Box className="center">
                                   <Heading
                                        fontSize={"50px"}
                                        m="10px auto"
                                        textAlign={"center"}
                                   >
                                        wework
                                   </Heading>
                                   <Text
                                        textAlign={"center"}
                                        fontWeight={"700"}
                                   >
                                        For all the ways you work, we're hear
                                   </Text>
                              </Box>
                         </Box>
                    </main>
               </Box>
          </Box>
     );
};

export default CompanyProfile;
