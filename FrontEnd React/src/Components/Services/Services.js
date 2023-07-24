import './Services.css';
import { ChakraProvider, HStack,VStack } from '@chakra-ui/react';
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
import { SimpleGrid , Card, CardBody, CardFooter,Text} from '@chakra-ui/react';
import pic1 from '../../images/news-icon.png';
import { useState } from 'react';
import logonew from '../../images/AxisSaralLogo-2.png'


import backgroundImage from '../../images/30.jpg';



import { setGlobal } from '../global';


const Services = () => {

    const email = useLocation().state;
    setGlobal({ "empemail": email });

    console.log("projectpage email :" + email)

    const goto = (side) => {


        if (side === "Newsfeed") {
            navigate("/newsfeed", { state: email })
        }
        else if (side === "Organization") {
            navigate("/organization", { state: email })
        }
        else if (side === "Projects") {
            navigate("/project", { state: email })
        }
        else if (side === "Services") {
            navigate("/services", { state: email })
        }
        else if (side === "Documents") {
            navigate("/documents", { state: email })
        }
        else if (side === "Profile") {
            navigate("/profile", { state: email })
        }
        else if (side === "Login") {
            navigate("/", { state: email })
        }


    }

    const navigate = useNavigate();


    const [isDrawer1Open, setIsDrawer1Open] = useState(false);
    const [isDrawer2Open, setIsDrawer2Open] = useState(false);
    const [isDrawer3Open, setIsDrawer3Open] = useState(false);


    return (
        <ChakraProvider >
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

                <div className="sidebarContainer">
                <Card  bg='#36188f' w='263px' borderRadius={1}><Image src={logonew} p={5} w='220px' ml='10px'></Image></Card>


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
                                        <MenuButton as={Button} mt='9px' float='right' colorScheme='transparant' rightIcon={<Avatar id="profile-icon" bg='blue.500' h='41px' w='41px' />}>
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={() => goto("Profile")}>Profile</MenuItem>
                                            <MenuItem onClick={() => goto("Login")}>Logout</MenuItem>
                                        </MenuList>
                                    </Menu>
                                </HStack>
                            </Box>

                        </HStack>
                        {/* <Box bg='red.50' position='fixed' zIndex='1' >
                            <HStack columns={2} spacing='500px' ml='100px' mt='10px'>
                                    
                            </HStack>
                        </Box> */}

                        <Box>
                            <Box>
                                <>
                                    <div className="container">
                                        
                                    <h1>Our Services</h1>
                                        
                                        <div className="row">
                                            <Card style={{ backgroundColor: '#79D7EC' }}>
                                            <div className="service" onClick={() => window.open('https://www.axisbank.com/retail/deposits/fixed-deposits/features-benefits/', '_blank')}>
                                                <h2>Digital FD</h2>
                                                <p>
                                                    Digital Fixed Deposit is an industry-first digital Full KYC Fixed Deposit product. Open Digital Fixed Deposit without an Axis Bank Savings Account by providing your basic details. It comes with a host of features like attractive FD interest rates, zero issuance fees, and no penalty on premature withdrawal (up to 25% of the amount). A quick and convenient way to save money.
                                                </p>
                                                </div>

                                        
                                            </Card>

                                            <Card style={{ backgroundColor: '#79D7EC' }}>
                                            <div className="service" onClick={() => window.open('https://www.axisbank.com/retail/loans/car-loan/new-car-loan/features-benefits', '_blank')}>
                                                <h2>Vehicle Loan</h2>
                                                <p>Who doesn't love to own a car! And it get bigger each time you wish to upgrade.So, why dim your wishes when you can comfortably own it? Be it purchase of new car or takeover of existing vehicle,our easy car loan will help you through it.Avail attractive interest rates with minimal paperwork.</p>
                                            </div>
                                            </Card>

                                            <Card style={{ backgroundColor: '#79D7EC' }}>
                                            <div className="service" onClick={() => window.open('https://www.axisbank.com/retail/cards/credit-card', '_blank')}>
                                                
                                                <h2>Credit Card</h2>
                                                <p>Credit cards are a convenient way of making any purchases from shopping to purchasing your favourite gadget to buying that new AC for your home to booking your flights & hotel and more or settling exorbitant bills when you don't have immediate funds at your disposal.

                                                    In short, an Axis Saral Credit Card makes Beautiful Possibilities. Ready For You.</p>
                                            </div>
                                            </Card>
                                        </div>
                                    </div>
                                </>
                            </Box>
                        </Box>
                    </SimpleGrid>


                </div>
            </div >
        </ChakraProvider >
    );
}

export default Services;