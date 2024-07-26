import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "./Navbar";
import Card from "./Card";
import Indarticle from "./Indarticle";
import { Grid, GridItem } from "@chakra-ui/react";
import { transdata } from "./Navbar";
import { useSelector } from "react-redux";
function Articles() {
	const [data, setdata] = useState([]);
	const selector = useSelector((state) => state.data);

	const isLoading = useSelector((state) => state.isLoading);
	//
	const getdata = () => {
		axios
			.get("http://localhost:5000/blog", {
				headers: {
					Authorization: `bearer ${token}`,
				},
			})
			.then((res) => {
				setdata([...res.data]);
			});
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		getdata();
		console.log("usefecct calling");
		if (selector.length > 0) {
			setTimeout(() => {
				setdata([...selector]);
			}, 500);
		}
		if (isLoading) {
			getdata();
		}
	
	}, [selector, isLoading]);

	function deleteitem(id) {
		axios
			.delete(`http://localhost:5000/blogs/${id}`)
			.then((res) => {
				console.log(res.data);
				getdata();
			});
	}

	const token = localStorage.getItem("token");
	return (
		<>
			{token ? (
				<>
					<Nav />
		
					<div
						style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
						{console.log(data)}
						{data.map((elem) => {
							return (
								<Indarticle
									{...elem}
									deleteitem={deleteitem}
									key={elem._id}
									getdata={getdata}
								/>
							);
							{
								/* </div> */
							}
						})}
					</div>
				</>
			) : (
				alert("please log in first")
			)}
		</>
	);
}

export default Articles;
