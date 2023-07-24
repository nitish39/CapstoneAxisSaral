import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import pdficon from '../../images/pdf-icon.png';
import { ChakraProvider, HStack, VStack } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Button
} from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { Card, SimpleGrid, Text } from '@chakra-ui/react';
import pic1 from '../../images/news-icon.png';
import logonew from '../../images/AxisSaralLogo-2.png';
import { useState } from 'react';

import backgroundImage from '../../images/31.jpg';
import { useToast } from '@chakra-ui/react';
import { setGlobal } from '../global';
const Documents = () => {

    const email = useLocation().state;
    setGlobal({ "empemail": email });
    console.log("docspage email :" + email)
    const goto = (side) => {


        if (side == "Newsfeed") {
            navigate("/newsfeed", { state: email })
        }
        else if (side == "Organization") {
            navigate("/organization", { state: email })
        }
        else if (side == "Projects") {
            navigate("/project", { state: email })
        }
        else if (side == "Services") {
            navigate("/services", { state: email })
        }
        else if (side == "Documents") {
            navigate("/documents", { state: email })
        }
        else if (side == "Profile") {
            navigate("/profile", { state: email })
        }
        else if (side == "Login") {
            navigate("/", { state: email })
        }
    }
    const toast = useToast()
    const { onOpen, onClose } = useDisclosure()
    const [setScrollBehavior] = React.useState('inside')
    const btnRef = React.useRef(null)
    const navigate = useNavigate();
    return (
        <ChakraProvider>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
                <div className="sidebarContainer">
                    <Card bg='#36188f' w='263px' borderRadius={1}><Image src={logonew} p={5} w='220px' ml='10px'></Image></Card>

                    <div className='names-container' >

                        <Button
                            onClick={() => goto("Newsfeed")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#36188f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Newsfeed
                        </Button>
                        <Button
                            onClick={() => goto("Organization")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#36188f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Organization
                        </Button>
                        <Button
                            onClick={() => goto("Projects")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#36188f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Projects
                        </Button>
                        <Button
                            onClick={() => goto("Services")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#36188f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Services
                        </Button>
                        <Button
                            onClick={() => goto("Documents")}
                            mt='20px'
                            leftIcon={<Image src={pic1} h='30px' w='30px'></Image>}
                            justifyContent="flex-start"
                            color='#36188f'
                            variant='ghost'
                            w='200px'
                            fontSize='18px'
                            mb='10px'
                        >
                            Documents
                        </Button>
                    </div>
                </div>

                <div className="mainBlock" >
                    <SimpleGrid column='1' >

                        <HStack columns={2} spacing='750px'>
                            <VStack>
                                <HStack spacing='450px' mt='20px' mb='10px' ml='100px'>

                                </HStack>
                            </VStack>
                            <Box id="menu" bg='white' w='310px' h='59px' mt='10px'   >
                                <HStack spacing='2px' float='right' pt='9px'  >

                                    <Box >
                                        <VStack>
                                            <Text as='b' fontSize={'15px'}>{ }</Text>
                                        </VStack>

                                    </Box>
                                    <Menu>
                                        <MenuButton as={Button} mt='10px' float='right' colorScheme='transparant' rightIcon={<Avatar id="profile-icon" bg='blue.500' h='41px' w='41px' />}>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={() => goto("Profile")}>Profile</MenuItem>
                                            <MenuItem onClick={() => goto("Login")}>Logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </HStack>
                            </Box>

                        </HStack>

                        <Box mt='100px' ml='100px'>
                  
                            <>
                                <HStack>
                                    <Card   style={{ backgroundColor: '#AEDCFD' }} bg='white' h='200px' w='600px'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'>Standard operating procedure(SOP)</Text>
                                        <br></br>
                                        <HStack columns={4} spacing="50px">
                                            <br></br>
                                            
                                            <VStack>
                                                <a href="https://pdfhost.io/v/6aS4Fb830_SOP_about_Database" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Database</Text>
                                            </VStack>
                                            <br></br>
                                        
                                            <VStack>
                                                <a href="https://pdfhost.io/v/2ejGjh610_SOP_about_Middelware" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Middleware</Text>
                                            </VStack>       

                                            <VStack>
                                                <a href="https://pdfhost.io/v/UB3r6TWxG_SOP_of_Incident_Management" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Incident Management</Text>
                                            </VStack>
                                        
                                            <VStack>
                                                <a href="https://pdfhost.io/v/PNAHyKKgt_SOP_of_Project_Management_Team" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Project Management</Text>
                                            </VStack>
                                            
                                        </HStack>
                                    </Card>


                                    
                                    <Card   style={{ backgroundColor: '#AEDCFD' }} bg='white' h='200' w='500px'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'>Specification Control Document(SCD)</Text>
                                        <br></br>
                                        <HStack columns={4} spacing="50px">
                            
                            
                                            <br></br>
                                            <VStack>
                                                <a href="https://pdfhost.io/v/SWThbrJZ4_SCD_of_Operating_Systems" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Operating Systems</Text>
                                            </VStack>
                                            <br></br>

                                            <VStack>
                                                <a href="https://pdfhost.io/v/~oEiiFJpw_SCD_of_Network_Devices" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Network Devices</Text>
                                            </VStack>

                                        </HStack>
                                    </Card>
                                </HStack>

                                <br></br>
                                <HStack mt='20px'>
                                    <Card   style={{ backgroundColor: '#AEDCFD' }} bg='white' w='1100px'   h='200'>
                                        <Text as='b' mb='10px' ml='auto' mr='auto' mt='10px'> Policies</Text>
                                        <br></br>
                                        <HStack columns={4} spacing="30px" ml='auto' mr='auto'>
                                        

                                            <VStack>
                                                <a href="https://pdfhost.io/v/MYY18OnBM_Cyber_Security_Policy" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Cyber Security</Text>
                                            </VStack>
                                    

                                            <VStack>
                                                <a href="https://pdfhost.io/v/8HaD0m0PR_GIFTING_POLICY" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Gifting Policy</Text>
                                            </VStack>
                                            

                                            <VStack>
                                                <a href="https://pdfhost.io/v/6OBjoVlW1_Dress_Code_Policy" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Dress Codes</Text>
                                            </VStack>
                                           
                                            <VStack>
                                                <a href="https://pdfhost.io/v/K1SyQjd6d_Code_of_Conducts_Ethics" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Code of Conduct & Ethics</Text>
                                            </VStack>

                                            <VStack>
                                                <a href="https://pdfhost.io/v/ZJKnAX9T1_Corporate_Governance_Policy" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Corporate Governance</Text>
                                            </VStack>

                                            <VStack>
                                                <a href="https://pdfhost.io/v/xTS9h.hyP_Human_Resources" target="_blank" rel="noopener noreferrer">
                                                    <Image id='pdf-hover' src={pdficon} h='60px' w='60px' ref={btnRef}></Image>
                                                </a>
                                                <Text maxW='150px' fontSize='13px'>Human Resource</Text>
                                            </VStack>

                                            
                                        </HStack>
                                    </Card>
                                </HStack>
                            </>
                        </Box>
                    </SimpleGrid>
                </div>
            </div >
        </ChakraProvider >
    );
}

export default Documents;