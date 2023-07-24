import { useEffect } from 'react';
import axios from 'axios';
import backgroundImg from '../../images/34.jpg';


import profilepic from '../../images/pro-pic.png';
import logonew from '../../images/AxisSaralLogo-2.png'

import { ChakraProvider, HStack, useToast, VStack } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button

} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, Box } from '@chakra-ui/react';

import { Avatar } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react';


import { Card, CardHeader, CardBody, SimpleGrid, Text } from '@chakra-ui/react';


import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';


import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';


import pic1 from '../../images/news-icon.png';
import backgroundImage from '../../images/Logo_White.png';

import { setGlobal } from '../global';


const Organization = () => {

    const navigate = useNavigate();

    const sidelist = ['News Feed', "Projects", "Services", "Organization"];
    const fun1 = (side) => {

        alert(side);


    }
    const email = useLocation().state;
    setGlobal({ "empemail": email });
    console.log("orgpage email :" + email)

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

    const [departments, setDepartments] = useState([])
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8091/dept/g1").then(res => {

            setDepartments(res.data);
        })
        axios.get("http://localhost:9092/ms2/empl/g1").then(res => {

            setEmployees(res.data);
        })


    }, []);



    const [employee, setEmployee] = useState({


        "empl_id": 1,
        "empl_name": "Rajesh Gupta",
        "empl_code": "EMP001",
        "empl_role": "Sr.Frontend Developer",
        "empl_email": "rajeshgupta@gmail.com",
        "empl_contact": "9863526178",
        "empl_uname": "Rajeshgupta001",
        "empl_pswd": "123456",
        "empl_exp": 5.3,
        "empl_team": 1,
        "empl_salary": 920000,
        "empl_address": "House No. 6, Nehru Nagar, Meerut, Uttar Pradesh, 250002",
        "empl_gender": "Male",
        "empl_dob": "1977-03-06",
        "empl_location": "Hyderabad",
        "project": {
            "proj_id": 1,
            "proj_name": "Digital Banking",
            "proj_code": "P001",
            "proj_desc": "The foremost and most important fintech app idea you can invest in is digital banking.In the past few years, a dramatic shift has been found in the way people interact with their banks and relish banking services. Users no longer appreciate the need to visit their local banks or ATMs for money transfer and other purposes. They rather are enjoying different advantages of digital banking like the ease of making transactions, investing, opening accounts and deposits, blocking cards, adding beneficiaries, and much more with a few taps on their devices.With these facilities, the concept of investing in digital banking app ideas have grown a huge momentum in the market. The sector was catering only 9% of the online audience in 2011. But, in just 6 years, it became a part of 69% of the online audience. And what’s more interesting is that it is just the beginning! Various factors like Coronavirus are acting as a catalyst for the market growth.",
            "proj_startdate": "2023-01-01",
            "proj_status": "string",
            "proj_enddate": "2023-06-01",
            "department": {
                "dept_id": 1,
                "dept_name": "Information Technology",
                "dept_code": "IT01",
                "dept_desc": " IT departments are groups of people who aim to manage and maintain technology for a business’ benefit. It uses the latest tech to keep communication lines running smoothly and protect critical data. "
            }
        },
        "projectManager": {
            "pmng_id": 1,
            "pmng_name": "ramdin verma",
            "pmng_desg": "Project Manager",
            "pmng_email": "ramdin@gmail.com",
            "pmng_contact": "9823561739",
            "pmng_uname": "ramdin123",
            "pmng_pswd": "123456",
            "pmng_exp": 6,
            "pmng_salary": 75000,
            "pmng_propic": "string",
            "project": {
                "proj_id": 1,
                "proj_name": "Digital Banking",
                "proj_code": "P001",
                "proj_desc": "The foremost and most important fintech app idea you can invest in is digital banking.In the past few years, a dramatic shift has been found in the way people interact with their banks and relish banking services. Users no longer appreciate the need to visit their local banks or ATMs for money transfer and other purposes. They rather are enjoying different advantages of digital banking like the ease of making transactions, investing, opening accounts and deposits, blocking cards, adding beneficiaries, and much more with a few taps on their devices.With these facilities, the concept of investing in digital banking app ideas have grown a huge momentum in the market. The sector was catering only 9% of the online audience in 2011. But, in just 6 years, it became a part of 69% of the online audience. And what’s more interesting is that it is just the beginning! Various factors like Coronavirus are acting as a catalyst for the market growth.",
                "proj_startdate": "2023-01-01",
                "proj_status": "string",
                "proj_enddate": "2023-06-01",
                "department": {
                    "dept_id": 1,
                    "dept_name": "Information Technology",
                    "dept_code": "IT01",
                    "dept_desc": " IT departments are groups of people who aim to manage and maintain technology for a business’ benefit. It uses the latest tech to keep communication lines running smoothly and protect critical data. "
                }
            }
        }

    })
    const getEmployeeById = (empl_id) => {
        axios.get(`http://localhost:9092/ms2/empl/g2/${empl_id}`).then(res => {

            setEmployee(res.data);
        })

    }
    const toast = useToast()
    const [searchvalueemp, setSearchvalueemp] = useState("")
    const searchEmployee = (empl_name) => {
        axios.get(`http://localhost:9092/ms2/empl/g6/${empl_name}`).then(res => {

            setEmployees(res.data);
            if (res.data.length == 0) {
                toast({
                    title: 'No Results Found',
                    // description: "We've created your account for you.",
                    position: 'top-right',
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                })
                axios.get("http://localhost:9092/ms2/empl/g1").then(res => {

                    setEmployees(res.data);
                })

            }
        })
    }

    const getAllEmployees = () => {
        axios.get("http://localhost:9092/ms2/empl/g1").then(res => {

            setEmployees(res.data);
        })

    }



    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <ChakraProvider >
            <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', minHeight: '100vh' }}>

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
                                <Box id="search" w='214px' h='41px' bg='gray' boxShadow='md'>
                                    <HStack mt='9px'>
                                        <Search2Icon ml='10px' onClick={() => searchEmployee(searchvalueemp)} />
                                        <Input variant='unstyled' placeholder='search by name' onChange={(e) => setSearchvalueemp(e.target.value)} />
                                    </HStack>
                                 </Box>
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

                        <Box><Text as='b' mt='100px' display='block' ml='126px' mb='20px'>Employees</Text></Box>
                        <Card w='1000px' ml='126px' display='block' >
                            <TableContainer w='1000px'>
                                <Table variant='striped' colorScheme='blackAlpha' size={'md'}>
                                    <Thead>
                                        <Tr bg='#36188f'>
                                            <Th color={'white'}>Employee ID</Th>
                                            <Th color={'white'}>Employee Name</Th>
                                            <Th color={'white'}>Employee Role</Th>
                                            <Th color={'white'}>Employee Email</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {employees.map(e =>
                                            <Tr>
                                                <Td color={'gray.700'}>{e.empl_id}</Td>

                                                <Td><Button color={'#042F8C'} variant='link' h='20px' ref={btnRef} onClick={() => { onOpen(); getEmployeeById(e.empl_id) }}>{e.empl_name}</Button></Td>
                                                <Td color={'gray.700'}>{e.empl_role}</Td>
                                                <Td color={'gray.700'}>{e.empl_email}</Td>
                                            </Tr>
                                        )}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Card>
                        <>
                            <Drawer isOpen={isOpen} placement='left' onClose={onClose} finalFocusRef={null} keepMounted size="lg">

                                <DrawerOverlay />
                                <DrawerContent>
                                    <DrawerCloseButton />

                                    <Box position="relative" height="180px" width="320px">
                                        <Box position="absolute" top="0%" left="101%" transform="translate(-50%, -50%)">

                                        </Box>

                                        <Box position="absolute" top='50px' left="100%" transform="translate(-50%, -50%)">
                                            <Card w='200px' h='60px' variant='unstyled'>
                                                <div className='main'>
                                                    <VStack align='center' flex={1} >
                                                        <Avatar size='xl' border="2px solid pink" />{' '}
                                                        <VStack spacing='0px'>
                                                            <Text as='b' color={'black'}>{employee.empl_name}</Text>
                                                            <Text color='black' fontSize='xs' pb='5px'>{employee.empl_role}</Text>
                                                        </VStack>
                                                    </VStack>
                                                </div>
                                            </Card>
                                        </Box>

                                    </Box>

                                    <DrawerBody bg='rgba(175, 39, 95, 0.05)'>
                                        <Card ml='-7%' mt='20px' mr='-8%' boxShadow='lg' h='200px'  >
                                            <CardBody   >
                                                <Text fontSize='14px' as='b' >   Employee Details</Text>
                                                <TableContainer >
                                                    <Table variant='simple' size='sm'>

                                                        <Tbody fontSize='12px' >
                                                            <Tr >
                                                                <Td color={'gray.700'}>ID </Td>
                                                                <Td color={'gray.700'}>{employee.empl_code}</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td color={'gray.700'}>Department </Td>
                                                                <Td color={'gray.700'}>{employee.project.department.dept_name}</Td>
                                                            </Tr>

                                                            <Tr >
                                                                <Td color={'gray.700'}>Designation</Td>
                                                                <Td color={'gray.700'}>{employee.empl_role} </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td color={'gray.700'}>Experience</Td>
                                                                <Td color={'gray.700'}>{employee.empl_exp}</Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>
                                            </CardBody>
                                        </Card>
                                        <Card ml='-7%' mt='20px' mr='-8%' boxShadow='lg' h='150px' >
                                            <CardHeader >
                                                <Text fontSize='14px' as='b'>Work</Text>
                                                <TableContainer>
                                                    <Table variant='simple' size='sm'>
                                                        <Tbody fontSize='12px'>
                                                            <Tr >
                                                                <Td color={'gray.700'}>Project </Td>
                                                                <Td color={'gray.700'}>{employee.project.proj_name}</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td color={'gray.700'}>Reporting to </Td>
                                                                <Td color={'gray.700'}>{employee.projectManager.pmng_name}</Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>
                                            </CardHeader>
                                            <CardBody >
                                            </CardBody>
                                        </Card>
                                        <Card ml='-7%' mt='20px' mr='-8%' boxShadow='lg' h='150px'>
                                            <CardHeader >
                                                <Text fontSize='14px' as='b' >Contact Details</Text>
                                                <TableContainer>
                                                    <Table variant='simple' size='sm'>
                                                        <Tbody fontSize='12px'>
                                                            <Tr >
                                                                <Td color={'gray.700'} >Phone </Td>
                                                                <Td color={'gray.700'}>+91 {employee.empl_contact}</Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td color={'gray.700'}>Email </Td>
                                                                <Td color={'gray.700'}>{employee.empl_email}</Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </TableContainer>
                                            </CardHeader>
                                            <CardBody >
                                            </CardBody>
                                        </Card>
                                    </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                        </>
                    </SimpleGrid>
                </div>
            </div >
        </ChakraProvider >
    );

}

export default Organization;