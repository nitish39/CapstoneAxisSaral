import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logonew from '../../images/AxisSaralLogo-2.png';
import backgroundImage from '../../images/9.jpg';

import {
  ChakraProvider,
  Box,
  Button,
  SimpleGrid,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Card,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { setGlobal } from '../global';
import { Image } from '@chakra-ui/react';



const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:9091/ms1/proj/g1').then((res) => {
      setProjects(res.data);
    });
  }, []);



  //   const handleProjectDelete = async (projId) => {
  //     try {
  //       await axios.delete(`http://localhost:9091/ms1/delete/projectby/${projId}`);
  //       alert('Project deleted successfully!');
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };



  return (
    <ChakraProvider>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

        <div className="sidebarContainer">
          <Card bg='#36188f' w='263px' borderRadius={1}><Image src={logonew} p={5} w='220px' ml='10px'></Image></Card>
          <div className='names-container' >


            <Link to="/stakeholders">
              <Button colorScheme="facebook" mt="4" ml="4">
                View StakeHolders
              </Button>
            </Link>
            <Link to="/admindashboard">
              <Button colorScheme="facebook" mt="4" ml="4">
                View Employee
              </Button>
            </Link>
            <br></br>

            <Link to="/">
              <Button colorScheme="facebook" mt="4" ml="4">
                Logout
              </Button>
            </Link>

          </div>
        </div>
        <div>
          <div className="names-container"></div>
        </div>
        <div className="mainBlock">
          <SimpleGrid column="1">
            <Link to="/AddProject">
              <Button colorScheme="facebook" mt="10" ml="40"> Add Project</Button>
            </Link>
            <Box>
              <Text as="b" mt="100px" display="block" ml="126px" mb="20px" fontSize="25px">
                Projects
              </Text>
            </Box>


            <Card w="1000px" ml="126px" display="block">
              <TableContainer w="1000px">
                <Table variant="striped" colorScheme="blackAlpha" size={'md'}>
                  <Thead>
                    <Tr bg="#36188f">
                      <Th color="white">Project Id</Th>
                      <Th color="white">Project Name</Th>
                      <Th color="white">Project Status</Th>
                      <Th color="white">Project Owner </Th>
                      <Th color="white"></Th>

                      {/* <Th color="white">Action</Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {projects.map((project) => (
                      <Tr key={project.proj_id}>
                        <Td color="gray.700" fontSize='15px'>{project.proj_id}</Td>
                        <Td color="gray.700" fontSize='15px'>{project.proj_name}</Td>
                        <Td color="gray.700" fontSize='15px'>{project.proj_status}</Td>
                        <Td color="gray.700" fontSize='15px'>{project.proj_owner_name}</Td>
                        <Td>
                          {/* <Button
                            colorScheme="facebook"
                            mt="4"
                            ml="4"
                            onClick={() => handleProjectDelete(project.proj_id)}
                          >
                            DELETE
                          </Button> */}
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>
            {/* 
            <Card w="725px" ml="126px" display="block">
             
            </Card> */}


          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Projects;