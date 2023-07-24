import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
import { Image } from '@chakra-ui/react';



const AdminDashboard = () => {
    const navigate = useNavigate();

 
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9092/ms2/empl/g1').then((res) => {
      setEmployees(res.data);
    });
   
   
   
  }, []);
  const handleEmployeeDelete = async (emplId) => {
    try {
      await axios.delete(`http://localhost:9092/ms2/empl/${emplId}`);
      alert('Employee deleted successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
    <ChakraProvider>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

      <div className="sidebarContainer">
                <Card  bg='#36188f' w='263px' borderRadius={1}><Image src={logonew} p={5} w='220px' ml='10px'></Image></Card>
                    <div className='names-container' >
                    

                    <Link to="/stakeholders">
                <Button colorScheme="facebook" mt="4" ml="4">
                  View StakeHolders
                </Button>
              </Link>
              <Link to="/projects">
                <Button colorScheme="facebook" mt="4" ml="4">
                  View Projects
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
            
              <div>

              <Link to="/addEmployee">
                <Button colorScheme="facebook" mt="10" ml="40">
                  Add Employee
                </Button>
              </Link>
             
          
              </div>

            <Box><Text as='b' mt='30px' display='block' ml='126px' mb='20px' fontSize='25px'>Employees</Text></Box>
                        <Card w='1000px' ml='126px' display='block' >
                        <TableContainer w="1000px">
                <Table variant="striped" colorScheme="blackAlpha" size="md">
                  <Thead>
                    <Tr bg="#36188f">
                      <Th color="white" >Id</Th>
                      <Th color="white">Employee Name</Th>
                      <Th color="white">Employee Role</Th>
                      <Th color="white">Employee Email</Th>
                      <Th color="white">Action</Th>
                      <Th color="white">Action</Th>
                      
                    </Tr>
                  </Thead>
                  <Tbody>
                    {employees.map((e) => (
                      <Tr key={e.empl_id}>
                        <Td color="gray.700" fontSize='15px'>{e.empl_id}</Td>
                        <Td color="gray.700"fontSize='15px'>{e.empl_name}</Td>
                        <Td color="gray.700" fontSize='15px'>{e.empl_role}</Td>
                        <Td color="gray.700" fontSize='15px'>{e.empl_email}</Td>
                        
                        <Td>
                          <Link to={`/updateEmployee/${e.empl_id}`}>
                            <Button colorScheme="facebook" mt="4" ml="4">
                              UPDATE
                            </Button>
                          </Link>
                        </Td>
                        <Td>
                          <Button colorScheme="red" mt="4" ml="4" onClick={() => handleEmployeeDelete(e.empl_id)}>
                            In-Active 
                          </Button>
                          
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
                        </Card>
                        
            {/* <Card w="1300px" ml="126px" display="block">
              <Link to="/addEmployee">
                <Button colorScheme="facebook" mt="4" ml="4">
                  Add Employee
                </Button>
              </Link>
              <Link to="/addEmployee">

              </Link>
              <TableContainer w="1000px"></TableContainer>
            </Card> */}

            
           
          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default AdminDashboard;