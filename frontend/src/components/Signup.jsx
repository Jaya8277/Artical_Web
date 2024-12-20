import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const [name, setname] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const navigate = useNavigate();
	const signupbutton = () => {
		const obj = {
			name,
			email,
			password,
		};

		axios.post("http://localhost:5000/signup", obj).then((res) => {
			console.log(res);
			navigate("/login");
			alert("Account Created Successfully");
		});
	};

	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Sign up
					</Heading>
					<Text fontSize={"lg"} color={"gray.600"}>
					            Signup Here
					</Text>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}>
					<Stack spacing={4}>
						<HStack>
							<Box>
								<FormControl id='firstName' isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										type='text'
										onChange={(e) => {
											setname(e.target.value);
										}}
									/>
								</FormControl>
							</Box>
							<Box>
								<FormControl id='lastName'>
									<FormLabel>Last Name</FormLabel>
									<Input type='text' />
								</FormControl>
							</Box>
						</HStack>
						<FormControl id='email' isRequired>
							<FormLabel>Email address</FormLabel>
							<Input
								type='email'
								onChange={(e) => {
									setemail(e.target.value);
								}}
							/>
						</FormControl>
						<FormControl id='password' isRequired>
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input
									type={showPassword ? "text" : "password"}
									onChange={(e) => {
										setpassword(e.target.value);
									}}
								/>
								<InputRightElement h={"full"}>
									<Button
										variant={"ghost"}
										onClick={() =>
											setShowPassword((showPassword) => !showPassword)
										}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Stack spacing={10} pt={2}>
							<Button
								loadingText='Submitting'
								size='lg'
								bg={"blue.400"}
								color={"white"}
								onClick={() => {
									signupbutton();
								}}
								_hover={{
									bg: "blue.500",
								}}>
								Sign up
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={"center"}>
								<Link color={"blue.400"} to={"/login"}>
									Already a user? Login
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
