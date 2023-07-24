import { Accordion, ChakraProvider, HStack, InputGroup, useToast, VStack } from '@chakra-ui/react';
import './Newsfeed.css';
import React, { useState } from 'react';
import comment from '../../images/comment-icon.png';
import { useEffect } from 'react';
import axios from 'axios';
import logonew from '../../images/AxisSaralLogo-2.png';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from '@chakra-ui/react';
import { Input, Box } from '@chakra-ui/react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { Card, CardBody, SimpleGrid, Text } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { CloseButton } from '@chakra-ui/react';
import pic1 from '../../images/news-icon.png';
import pic0 from '../../images/pro-pic.png';
import { getGlobal, setGlobal } from '../global';
import backgroundImage from '../../images/22.jpg';

const Newsfeed = () => {
  console.log('this is get form newsdfeed' + getGlobal('empemail'));
  const navigate = useNavigate();

  const goto = (side) => {
    if (side === 'Newsfeed') {
      navigate('/newsfeed', { state: email });
    } else if (side === 'Organization') {
      navigate('/organization', { state: email });
    } else if (side === 'Projects') {
      navigate('/project', { state: email });
    } else if (side === 'Services') {
      navigate('/services', { state: email });
    } else if (side === 'Documents') {
      navigate('/documents', { state: email });
    } else if (side === 'Profile') {
      navigate('/profile', { state: email });
    } else if (side === 'Login') {
      navigate('/', { state: email });
    }
  };
  const [isOpenCmt, setIsOpenCmt] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  function handleChange(event) {
    setInputValue(event.target.value);
    console.log(inputValue);
    if (event.target.value) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }
  const showComments = () => {
    setIsOpenCmt(true);
  };
  const offComments = () => {
    setIsOpenCmt(false);
  };
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [epostid,] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:9094/ms4/posts/g1').then((res) => {
      setPosts(res.data);
    });
    axios.get(`http://localhost:8888/comments/get/${epostid}`).then((res) => {
      setComments(res.data);
      console.log(epostid);
    });

    axios
      .get(`http://localhost:9092/ms2/employee/${getGlobal('empemail')}`)
      .then((res) => {
        setnewsEmployee(res.data);
        console.log(newsemployee);
      });
  }, []);
  const [newsemployee, setnewsEmployee] = useState({
    empl_id: 0,
    empl_name: 'Loading...',
    empl_code: 'string',
    empl_role: 'string',
    empl_email: 'string',
    empl_contact: 'string',
    empl_uname: 'string',
    empl_pswd: 'string',
    empl_exp: 0,
    empl_team: 0,
    empl_salary: 0,
    empl_address: 'string',
    empl_gender: 'string',
    empl_dob: '2023-02-23T11:24:36.117Z',
    empl_location: 'string',
    project: {
      proj_id: 0,
      proj_name: 'string',
      proj_code: 'string',
      proj_desc: 'string',
      proj_startdate: '2023-02-23T11:24:36.117Z',
      proj_status: 'string',
      proj_enddate: '2023-02-23T11:24:36.117Z',
      department: {
        dept_id: 0,
        dept_name: 'string',
        dept_code: 'string',
        dept_desc: 'string',
      },
    },
    projectManager: {
      pmng_id: 0,
      pmng_name: 'string',
      pmng_desg: 'string',
      pmng_email: 'string',
      pmng_contact: 'string',
      pmng_uname: 'string',
      pmng_pswd: 'string',
      pmng_exp: 0,
      pmng_salary: 0,
      pmng_propic: 'string',
      project: {
        proj_id: 0,
        proj_name: 'string',
        proj_code: 'string',
        proj_desc: 'string',
        proj_startdate: '2023-02-23T11:24:36.117Z',
        proj_status: 'string',
        proj_enddate: '2023-02-23T11:24:36.117Z',
        department: {
          dept_id: 0,
          dept_name: 'string',
          dept_code: 'string',
          dept_desc: 'string',
        },
      },
    },
  });

  const commentsByPost = (epost_id) => {
    axios
      .get(`http://localhost:9094/ms4/comments/get/${epost_id}`)
      .then((res) => {
        setComments(res.data);
        console.log(comments);
      });
  };
  const [myComment, setMyComment] = useState('');
  const addComment = (epost_id) => {
    let data = {
      ecmt_content: inputValue,
    };
    console.log('------------');
    console.log(data);
    console.log('----------------');
    console.log('after method');

    fetch(
      `http://localhost:9094/ms4/comments/postcmt/${newsemployee.empl_id}/${epost_id}`,
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    ).then(
      toast({
        title: 'Comment Success',
        position: 'top-right',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    );
  };

  const [userId, setUserId] = useState(0);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8888/comments/get/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data1);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [userId]);

  const [postContent, setPostContent] = useState('');
  const toast = useToast();
  const addPost = () => {
    if (postContent.trim() === '') {
      toast({
        title: 'Post Error',
        description: 'Please enter a post content.',
        position: 'top-right',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    let data = {
      epost_content: postContent,
      epost_category: 'news feed',
    };
    fetch(`http://localhost:9094/ms4/posts/post/${newsemployee.empl_id}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }).then(
      toast({
        title: 'Post Success',
        position: 'top-right',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    );
    axios.get('http://localhost:9094/ms4/posts/g1').then((res) => {
      setPosts(res.data);
    });
  };

  const gotoProfile = () => {
    navigate('/profile');
  };

  const email = useLocation().state;
  setGlobal({ empemail: email });
  console.log('newspage email :' + email);
  return (
    <ChakraProvider>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
      >
        <div className="sidebarContainer">
          <Card bg="#36188f" w="263px" borderRadius={1}>
            <Image src={logonew} p={5} w="220px" ml="10px"></Image>
          </Card>




          <div className="names-container">
            <Button
              onClick={() => goto('Newsfeed')}
              mt="20px"
              leftIcon={<Image src={pic1} h="30px" w="30px"></Image>}
              justifyContent="flex-start"
              color="#36188f"
              variant="ghost"
              w="200px"
              fontSize="18px"
              mb="10px"
            >
              Newsfeed
            </Button>
            <Button
              onClick={() => goto('Organization')}
              mt="20px"
              leftIcon={<Image src={pic1} h="30px" w="30px"></Image>}
              justifyContent="flex-start"
              color="#36188f"
              variant="ghost"
              w="200px"
              fontSize="18px"
              mb="10px"
            >
              Organization
            </Button>
            <Button
              onClick={() => goto('Projects')}
              mt="20px"
              leftIcon={<Image src={pic1} h="30px" w="30px"></Image>}
              justifyContent="flex-start"
              color="#36188f"
              variant="ghost"
              w="200px"
              fontSize="18px"
              mb="10px"
            >
              Projects
            </Button>
            <Button
              onClick={() => goto('Services')}
              mt="20px"
              leftIcon={<Image src={pic1} h="30px" w="30px"></Image>}
              justifyContent="flex-start"
              color="#36188f"
              variant="ghost"
              w="200px"
              fontSize="18px"
              mb="10px"
            >
              Services
            </Button>
            <Button
              onClick={() => goto('Documents')}
              mt="20px"
              leftIcon={<Image src={pic1} h="30px" w="30px"></Image>}
              justifyContent="flex-start"
              color="#36188f"
              variant="ghost"
              w="200px"
              fontSize="18px"
              mb="10px"
            >
              Documents
            </Button>
          </div>
        </div>

        <div className="mainBlock">

          <SimpleGrid column="1">
            {/* 
          <HStack spacing="2px" float="left" pt="9px">
              <Menu>
                <MenuButton
                  as={Button}
                  mt="9px"
                  float="left"
                  colorScheme="transparant"
                  rightIcon={
                    <Avatar
                      id="profile-icon"
                      bg="blue.500"
                      h="41px"
                      w="41px"
                    />
                  }
                ></MenuButton>
                <MenuList>
                  <MenuItem onClick={() => goto('Profile')}>Profile</MenuItem>
                  <MenuItem onClick={() => goto('Login')}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </HStack> */}


            <HStack columns={2} spacing='750px'>
              <VStack>
                <HStack spacing='450px' mt='20px' mb='10px' ml='100px'>

                </HStack>
              </VStack>
              <Box id="menu" bg='white' w='80px' h='59px' mt='10px'   >
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




            <div id="main-content">
              <div class="container" id="scroll-container">
                <div class="panel middle-panel">

                  <>
                    <Card w="600px" ml="150px" bg="white">
                      <HStack ml="20px" alignItems="center" mb="10px" mt="10px">
                        <Avatar
                          size="md"

                          src={pic0}
                          border="2px solid pink"
                          alignSelf="flex-start"
                        />
                        <Popover>
                          <PopoverTrigger>
                            <Button w="450px" h="100px">
                              Start a post
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent w="550px">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader>Write your Post</PopoverHeader>
                            <PopoverBody>
                              <HStack ml="20px" alignItems="center" mb="10px">
                                <Avatar
                                  size="md"

                                  src={pic0}
                                  border="2px solid pink"
                                  alignSelf="flex-start"
                                />
                                <InputGroup>
                                  <Input
                                    w="380px"
                                    placeholder="write your post"
                                    onChange={(e) => setPostContent(e.target.value)}
                                  ></Input>
                                  <Button colorScheme="blue" onClick={() => addPost()}>
                                    Post
                                  </Button>
                                </InputGroup>
                              </HStack>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </HStack>
                    </Card>

                    {posts.map((ps) => (
                      <Box mt="30px" ml="160px">
                        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
                          <Card bg="white">
                            <Flex spacing="4" mt="20px" ml="20px">
                              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                <Avatar src={pic0} border="2px solid pink" />
                                <Box>
                                  <Text as="b" fontSize="18px">
                                    {ps.empl_name}
                                  </Text>
                                  <Text fontSize="12px" color="gray.500">
                                    {ps.empl_role}
                                  </Text>
                                </Box>
                              </Flex>
                            </Flex>
                            <CardBody>
                              <Center>
                                <Divider w="540px" mb="10px" />
                              </Center>
                              <Text>{ps.epost_content}</Text>
                            </CardBody>
                            <Center>
                              <Divider w="540px" mb="10px" />
                            </Center>
                            <HStack justifyContent="left" mb="10px" ml="20px">
                              <Box>
                                <Popover>
                                  <PopoverTrigger>
                                    <Button w="260px">
                                      <Image src={comment} h="20px" mr="10px" />
                                      Comment
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent w="550px">
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Add Comment</PopoverHeader>
                                    <PopoverBody>
                                      <HStack ml="20px" alignItems="center" mb="10px">
                                        <Avatar
                                          size="md"

                                          src={pic0}
                                          border="2px solid pink"
                                          alignSelf="flex-start"
                                        />
                                        <InputGroup>
                                          <Input w="380px" onChange={handleChange} placeholder="write your comment" />
                                          <Button
                                            colorScheme="blue"
                                            onClick={() => {
                                              setUserId(ps.epost_id);
                                              addComment(ps.epost_id);
                                              commentsByPost(ps.epost_id);
                                            }}
                                            isDisabled={isButtonDisabled}
                                          >
                                            Post
                                          </Button>
                                        </InputGroup>
                                      </HStack>
                                    </PopoverBody>
                                  </PopoverContent>
                                </Popover>
                              </Box>
                            </HStack>

                            <Accordion allowToggle>
                              <AccordionItem>
                                <AccordionButton
                                  alignItems="center"
                                  onClick={() => {
                                    commentsByPost(ps.epost_id);
                                  }}
                                >
                                  <AvatarGroup size="xs" max={2}>
                                    <Avatar name="Ryan Florence" src={comment} />
                                  </AvatarGroup>
                                  All Comments
                                </AccordionButton>

                                <AccordionPanel>
                                  <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
                                    <Card variant="unstyled">
                                      {comments.map((c) => (
                                        <HStack ml="20px" alignItems="center" mb="10px">
                                          <Avatar size="md" src={pic0} border="2px solid pink" alignSelf="flex-start" />
                                          <Card templateColumns="repeat(auto-fill, minmax(500px, 1fr))" w="450px" variant="filled" p="10px" pt="3px">
                                            <Text as="b">{c.empl_name}</Text>
                                            <Text color="blackAlpha.500" fontSize="xs" pb="5px">
                                              {c.empl_role}
                                            </Text>
                                            <Text>{c.ecmt_content}</Text>
                                          </Card>
                                        </HStack>
                                      ))}
                                    </Card>
                                  </SimpleGrid>
                                </AccordionPanel>
                              </AccordionItem>
                            </Accordion>
                          </Card>
                        </SimpleGrid>

                        {isOpenCmt && (
                          <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(500px, 1fr))">
                            <Card variant="unstyled">
                              <CloseButton onClick={() => offComments()} ml="527px" mt="5px" />
                              <HStack ml="20px" alignItems="center" mb="10px">
                                <Avatar size="md" src="https://bit.ly/sage-adebayo" alignSelf="flex-start" />
                                <InputGroup>
                                  <Input w="380px" onChange={handleChange}></Input>
                                  <Button isDisabled={isButtonDisabled} colorScheme="blue">
                                    Post
                                  </Button>
                                </InputGroup>
                              </HStack>
                              {comments.map((c) => (
                                <HStack ml="20px" alignItems="center" mb="10px">
                                  <Avatar size="md" src="https://bit.ly/sage-adebayo" alignSelf="flex-start" />

                                </HStack>
                              ))}
                            </Card>
                          </SimpleGrid>
                        )}
                      </Box>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Newsfeed;