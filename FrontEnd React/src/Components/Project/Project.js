import { useEffect } from 'react';
import axios from 'axios';
import './Project.css';
import propic from '../../images/41.jpg';
import { ChakraProvider, HStack, useToast, VStack } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, Button, Stack
} from '@chakra-ui/react';
import logowhite from '../../images/Logo_White.png';
import { Search2Icon, MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Input, Box } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
} from '@chakra-ui/react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { useState } from 'react';

import {
    Table, Tbody, Tr, Td, TableContainer
} from '@chakra-ui/react';


import backgroundImage from '../../images/29.jpg';

import pic0 from '../../images/pro-pic.png';
import pic1 from '../../images/news-icon.png';
import logonew from '../../images/AxisSaralLogo-2.png'
import { setGlobal } from '../global';
const Project = () => {
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
        else if (side == "Projects") {
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
    const sidelist = ['News Feed', "Projects", "Services", "Organization"];
    const fun1 = (side) => {

        alert(side);
        if (side === "documents") {
            navigate("/documents")
        }
        else if (side === "Organization") {
            navigate('/organization');
        }
        else if (side === "News Feed") {
            navigate("/newsfeed")
        }

    }

    const [employee, setEmployee] = useState([])
    const [projects, setProjects] = useState([])
    const [stakeholders, setStakeholders] = useState([])
    const [supportteam, setSupportteam] = useState([])
    const supportteamByProjectId = (projectId) => {
        axios.get(`http://localhost:9092/ms2/empl/g5/${projectId}`).then(res => {

            setSupportteam(res.data);
        })

    }
    console.log(supportteam)

    const employeeByProjectId = (projectId) => {
        axios.get(`http://localhost:9092/ms2/empl/g5/${projectId}`).then(res => {

            setEmployee(res.data);
        })

    }
    console.log(employee)

    const stakeByProjectId = (projectId) => {
        axios.get(`http://localhost:9091/ms1/sthd/g3/${projectId}`).then(res => {
            setStakeholders(res.data);
        })

    }

    const convertToDate = (unform) => {
        const date = new Date(unform);
        return date.toDateString();
    }

    useEffect(() => {
        axios.get("http://localhost:9091/ms1/proj/g1").then(res => {
            setProjects(res.data);
        })

    }, []);

    const [searchvalue, setSearchValue] = useState("")

    const getAllProjects = () => {
        axios.get("http://localhost:9091/ms1/proj/g1").then(res => {
            setProjects(res.data);
        })

    }
    const toast = useToast()
    const searchProject = (searchvalue) => {
        axios.get(`http://localhost:9999/ms1/search/${searchvalue}`).then(res => {


            setProjects(res.data);
            if (res.data.length === 0) {
                toast({
                    title: 'No Results Found',
                    position: 'top-right',
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                })
                axios.get("http://localhost:9091/ms1/proj/g1").then(res => {

                    setProjects(res.data);
                })

            }

        })

    }
    const [projectManager, setProjectManager] = useState({})
    const getProjectManagerByProj = (proj_id) => {
        axios.get(`http://localhost:9091/ms1/pmng/g2/${proj_id}`).then(res => {
            setProjectManager(res.data);
        })

    }

    const [jobs, setJobs] = useState([])
    const getJobsByProjId = (proj_id) => {
        axios.get(`http://localhost:9093/ms3/jopp/g2/${proj_id}`).then(res => {
            setJobs(res.data);
        })

    }

    return (
        <ChakraProvider >
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
                   
                        {/* #31D0C2 */}
                        <Box mt='100px' >
                        </Box>
                        {projects.map(p =>
                            <Card  style={{ backgroundColor: 'white' }} w='1000px' ml='120px' mb="20px" variant={'unstyled'}  >
                                <Card style={{ backgroundColor: '#AEE7F1' }} w='950px' ml='20px' mt='20px'>
                                    <Text as='b' ml='auto' mr='auto' fontSize='2xl' mb='10px' mt='10px'>{p.proj_name}</Text>
                                    <HStack columns={2} spacing='200px' ml='70px' mt='20px' mb='20px' >
                                        <VStack align='left'>
                                            <Text><Text as='b'>Project ID :</Text> {p.proj_id}</Text>
                                            <Text> <Text as='b'>Start Date : </Text>{convertToDate(p.proj_startdate)}</Text>
                                            <Text><Text as='b'>Application Owner : </Text>{p.proj_owner_name} </Text>
                                        </VStack>

                                        <VStack align='left'>
                                            <Text><Text as='b'>Project Department : </Text>{p.department.dept_name}</Text>
                                            <Text><Text as='b'>End Date: </Text>{convertToDate(p.proj_enddate)}</Text>
                                            <Text><Text as='b'>Status : </Text>{p.proj_status} </Text>
                                        </VStack>
                                    </HStack>
                                </Card>
                                <Accordion allowMultiple w='800px' ml='auto' mr='auto' display='block'>
                                    <AccordionItem >
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left' font>
                                                    View Details
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Card w='810px' mb="20px">
                                                <Accordion allowMultiple w='800px'>
                                                    <AccordionItem>
                                                        <h2>
                                                            <AccordionButton>
                                                                <Box as="span" flex='1' textAlign='left'>
                                                                    Description
                                                                </Box>
                                                                <AccordionIcon />
                                                            </AccordionButton>
                                                        </h2>
                                                        <AccordionPanel pb={4}>
                                                            {p.proj_desc}
                                                        </AccordionPanel>
                                                    </AccordionItem>

                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => getProjectManagerByProj(p.proj_id)}>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Project Manager
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    <Card
                                                                        direction={{ base: 'column', sm: 'row' }}
                                                                        overflow='hidden'
                                                                        variant='outline'
                                                                        h='150px'
                                                                        w='500px'
                                                                        ml='auto'
                                                                        mr='auto'
                                                                    >
                                                                        <Image

                                                                        />
                                                                        <Stack>
                                                                            <CardBody>
                                                                                <TableContainer>
                                                                                    <Table size='sm'>
                                                                                        <Tbody>
                                                                                            <Tr>
                                                                                                <Td>ID</Td>
                                                                                                <Td>{projectManager.pmng_name}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Designation</Td>
                                                                                                <Td>{projectManager.pmng_desg}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Experience</Td>
                                                                                                <Td>{projectManager.pmng_exp}</Td>

                                                                                            </Tr>
                                                                                            <Tr>
                                                                                                <Td>Contact</Td>
                                                                                                <Td>+91 {projectManager.pmng_contact}</Td>
                                                                                            </Tr>
                                                                                        </Tbody>
                                                                                    </Table>
                                                                                </TableContainer>
                                                                            </CardBody>
                                                                        </Stack>
                                                                    </Card>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>


                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => stakeByProjectId(p.proj_id)}>
                                                                        <SimpleGrid></SimpleGrid>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Stake holders
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    <SimpleGrid columns={4}>
                                                                        {stakeholders.map(s =>
                                                                            <div className="Card">
                                                                                <div className="upper-container">
                                                                                    <div className="image-container">
                                                                                        <img className="pro-pic" src={propic} alt="" height="100px" width="100px" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lower-container">
                                                                                    <div className="id"> {s.sthd_code}</div>
                                                                                    <div className="name">{s.sthd_name}</div>
                                                                                    <div className="designation">{s.sthd_desg}</div>
                                                                                    <div className="email">{s.sthd_email}</div>
                                                                                    <div className="phone">{s.sthd_contact}</div>
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                    </SimpleGrid>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => supportteamByProjectId(p.proj_id)}>
                                                                        <SimpleGrid></SimpleGrid>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Employees
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    <SimpleGrid columns={4}>
                                                                        {supportteam.map(st =>
                                                                            <div className="Card">
                                                                                <div className="upper-container">
                                                                                    <div className="image-container">
                                                                                        <img className="pro-pic" src={propic} alt="" height="100px" width="100px" />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="lower-container">
                                                                                    <div className="id"> {st.empl_code}</div>
                                                                                    <div className="name">{st.empl_name}</div>
                                                                                    <div className="designation">{st.empl_role}</div>
                                                                                    <div className="email">{st.empl_email}</div>
                                                                                    <div className="phone">{st.empl_contact}</div>
                                                                                </div>

                                                                            </div>
                                                                        )}
                                                                    </SimpleGrid>
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                    <AccordionItem>
                                                        {({ isExpanded }) => (
                                                            <>
                                                                <h2>
                                                                    <AccordionButton onClick={() => getJobsByProjId(p.proj_id)}>
                                                                        <Box as="span" flex='1' textAlign='left'>
                                                                            Job Opportunities
                                                                        </Box>
                                                                        {isExpanded ? (
                                                                            <MinusIcon fontSize='12px' />
                                                                        ) : (
                                                                            <AddIcon fontSize='12px' />
                                                                        )}
                                                                    </AccordionButton>
                                                                </h2>
                                                                <AccordionPanel pb={4}>
                                                                    {jobs.map(j =>
                                                                        <Card
                                                                            w='750px'
                                                                            direction={{ base: 'column', sm: 'row' }}
                                                                            overflow='hidden'
                                                                            mb='10px'
                                                                        // variant='outline'
                                                                        >
                                                                            <Image
                                                                                mt='20px'
                                                                                ml='20px'
                                                                                objectFit='cover'
                                                                                borderRadius='10'
                                                                                boxSize='100px'
                                                                                maxW={{ base: '100%', xs: '100px' }}
                                                                                src='https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
                                                                                alt='Java Developer'
                                                                            />

                                                                            <Stack>
                                                                                <CardBody>
                                                                                    <Box>
                                                                                        <Box>
                                                                                            <Heading size='md'>{j.jopp_name}</Heading>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text py='2'>
                                                                                                {j.jopp_desc}
                                                                                            </Text>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text >Experience : {j.jopp_exp} years</Text>
                                                                                            <Text >Salary : {j.jopp_slary} /month</Text>
                                                                                            <Text >Shift : {j.jopp_shift} </Text>
                                                                                        </Box>
                                                                                        <Box>
                                                                                            <Text >Required Skills : {j.jopp_skills}</Text>
                                                                                        </Box>
                                                                                    </Box>
                                                                                </CardBody>
                                                                                <CardFooter>
                                                                                </CardFooter>
                                                                            </Stack>
                                                                        </Card>
                                                                    )}
                                                                </AccordionPanel>
                                                            </>
                                                        )}
                                                    </AccordionItem>
                                                </Accordion>
                                            </Card>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Card>
                        )}
                    </SimpleGrid>
                </div>
            </div >
        </ChakraProvider >
    );
}

export default Project;