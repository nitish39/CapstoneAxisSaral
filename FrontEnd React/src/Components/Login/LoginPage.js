import { useState } from "react";
import {
    Flex, Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement, Box, Avatar,
    FormControl, InputRightElement,
    ChakraProvider,
    useToast, Image,
    HStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { setGlobal } from "../global";
import lgimg from '../../images/53.jpg';
import logo from '../../images/AxisSaralLogo-2.png';


const LoginPage = () => {
    const toast = useToast()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowClick = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const validate = () => {
        console.log("email" + email)
        console.log("password: " + password)

        let data = {
            login_email: email,
            login_password: password

        }
        fetch(`http://localhost:9092/ms2/validate`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => { return response.text() })
            .then(text => {
                if (text === "valid") {


                    toast({
                        title: 'Login Success',
                        position: 'top-right',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    setGlobal({ empemail: email });

                    setTimeout(() => {
                        navigate("/Organization", { state: email })
                        console.log('This will run after 1 second!')
                    }, 1000);

                }
                else {
                    toast({
                        title: 'Invalid Username or Password',
                        position: 'top-right',
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    })

                }
            })

    }

    return (
        <ChakraProvider>
{/* 
<div
      className="container d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    > */}

            {/* <Box w='1600px' m='auto' mr='auto' > */}
                <HStack>
                    <Image src={lgimg} position='fixed' w='1600px' h='900px'></Image>
                    <Flex

                        flexDirection="column"
                        width="100wh"
                        height="100vh"
                        backgroundColor="pink.20"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack
                            ml='500px'
                            flexDir="column"
                            mb="2"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Avatar src={logo} h='200px' w='300px' />
                            <Box minW={{ base: "80%", md: "468px" }}>
                                <form>
                                    <Stack
                                        spacing={4}
                                        backgroundColor="whiteAlpha.900"
                                        boxShadow="md"
                                        
                                    >
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                />
                                               
                                                <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: "white", opacity: 1 }}/>
                                            
                                            </InputGroup>
                                        </FormControl>
                                        <FormControl>
                                            <InputGroup>
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    color="gray.300"
                                                />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    style={{ backgroundColor: "white", opacity: 1 }}
                                                />
                                                <InputRightElement width="4.5rem">
                                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                                        {showPassword ? "Hide" : "Show"}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>

                                        </FormControl>
                                        <Button
                                            borderRadius={0}
                                            variant='solid'
                                            colorScheme='pink'
                                            width="full"
                                            onClick={() => validate()}
                                        >
                                            Login
                                        </Button>

                                        <Button
                                            borderRadius={0}
                                            variant="outline"
                                            colorScheme="pink"
                                            width="full"
                                            onClick={() => navigate("/AdminLogin")}
                                        >
                                            Admin Login
                                        </Button>

                                    </Stack>
                                </form>
                            </Box>
                        </Stack>
                    </Flex>
                </HStack>
            {/* </Box> */}
        </ChakraProvider>
    );
};

export default LoginPage;
