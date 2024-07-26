//  import Image from 'next/image';
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Flex,
	Button,
	ButtonGroup,
	WrapItem,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import Editform from "./Editform";
import { Select } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Longdescription from "./Longdescription";
export default function BlogPostWithImage({
	_id,
	title,
	subCategory,
	updatedAt,
	longdesc,
	description,
	createdAt,
	category,
	deleteitem,
	getdata,
}) {
	const [showeditform, setshoweditform] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Center py={6}>
			<Box
				maxW={"445px"}
				w={"full"}
				bg={"white"}
				boxShadow={"2xl"}
				rounded={"md"}
				p={6}
				overflow={"hidden"}>
				<Box
					h={"210px"}
					bg={"gray.100"}
					mt={-6}
					mx={-6}
					mb={6}
					pos={"relative"}>
					<Image src={"https://picsum.photos/500/250"} layout={"fill"} />
				</Box>
				<Stack>
					<Flex gap={"10px"}>
						<Text
							color={"green.500"}
							textTransform={"uppercase"}
							fontWeight={800}
							fontSize={"sm"}
							letterSpacing={1.1}>
							{category}
						</Text>

						<Text
							color={"green.500"}
							textTransform={"uppercase"}
							fontWeight={800}
							fontSize={"sm"}
							letterSpacing={1.1}>
							{subCategory}
						</Text>
					</Flex>
					<Heading color={"Black"} fontSize={"2xl"} fontFamily={"body"}>
						{title}
					</Heading>
					<Text color={"gray.500"}>{description}</Text>
				</Stack>
				<Stack mt={6} direction={"row"} spacing={4} align={"center"}>

					<Stack direction={"row"} spacing={10} fontSize={"sm"}>
						<Text color={"gray.500"}> Created At:- {createdAt} </Text>
						{updatedAt ? (
							<Text color={"gray.500"}> Updated At:- {updatedAt} </Text>
						) : (
							""
						)}
					</Stack>
				</Stack>

				<Stack direction={"row"} spacing={10} fontSize={"sm"}>
					<WrapItem>
						<Button
							colorScheme='green'
							onClick={() => {
								console.log("editttt");
								setshoweditform(!showeditform);
							}}>

							<Editform id={_id} getdata={getdata} />
						</Button>
					</WrapItem>
					<WrapItem>
						<Button
							colorScheme='red'
							onClick={() => {
								deleteitem(_id);
							}}>
							Delete
						</Button>
					</WrapItem>

					<WrapItem>

						<Longdescription description={longdesc} title={title} />
					</WrapItem>
				</Stack>
			</Box>
		</Center>
	);
}
