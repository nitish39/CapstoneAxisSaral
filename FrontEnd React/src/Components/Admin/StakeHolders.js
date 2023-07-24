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



const StakeHolders = () => {
  const navigate = useNavigate();

  const [stakeholders, setStakeholders] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:9091/ms1/sthd/g1').then((res) => {
      setStakeholders(res.data);
    });

  }, []);


  return (
    <ChakraProvider>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>

        <div className="sidebarContainer">
          <Card bg='#36188f' w='263px' borderRadius={1}><Image src={logonew} p={5} w='220px' ml='10px'></Image></Card>
          <div className='names-container' >

            <Link to="/admindashboard">
              <Button colorScheme="facebook" mt="4" ml="4">
                View Employee
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

              <Link to="/AddStakeholder">
                <Button colorScheme="facebook" mt="10" ml="40">Add Stakeholder</Button>

              </Link>

            </div>
            <Box><Text as='b' mt='60px' display='block' ml='126px' mb='20px' fontSize='25px'>Stakeholders</Text></Box>
            
            <Card w='1000px' ml='126px' display='block' >
              <TableContainer w='1000px'>
                <Table variant='striped' colorScheme='blackAlpha' size={'md'}>
                  <Thead>
                    <Tr bg='#36188f'>
                      <Th color={'white'}>Id</Th>
                      {/* <Th color={'white'}>Stakeholder code</Th> */}
                      <Th color={'white'}>Stakeholder Name</Th>
                      <Th color={'white'}>Stakeholder contact</Th>
                      <Th color={'white'}>Employee Designation</Th>
                      <Th color={'white'}>Stakeholder Email</Th>

                    </Tr>
                  </Thead>
                  <Tbody>
                    {stakeholders.map(s =>
                      <Tr>
                        <Td color={'gray.700'}>{s.sthd_id}</Td>
                        {/* <Td color={'gray.700'}>{s.sthd_code}</Td> */}
                        <Td color={'gray.700'}>{s.sthd_name}</Td>
                        <Td color={'gray.700'}>{s.sthd_contact}</Td>
                        <Td color={'gray.700'}>{s.sthd_desg}</Td>
                        <Td color={'gray.700'}>{s.sthd_email}</Td>

                      </Tr>
                    )}

                    {/* <Link to="/AddStakeholder">
                                            <Button colorScheme="facebook" mt="4" ml="4">Add Stakeholder</Button>
                                        </Link> */}
                  </Tbody>
                </Table>
              </TableContainer>
            </Card>



          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default StakeHolders;