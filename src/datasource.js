export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "user",
		headerName: "User",
		width: 230,
		renderCell: params => {
			return (
				<div className="cellWithImg">
					<img className="cellImg" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: "email",
		headerName: "Email",
		width: 230,
	},

	{
		field: "age",
		headerName: "Age",
		width: 100,
	},
	{
		field: "status",
		headerName: "Status",
		width: 160,
		renderCell: params => {
			return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
		},
	},
];

//temporary data
export const userRows = [
	{
		id: 1,
		username: "Snow",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		status: "active",
		email: "email_1@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_2@gmail.com",
		status: "passive",
		age: 42,
	},
	{
		id: 3,
		username: "Lannister",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_3@gmail.com",
		status: "pending",
		age: 45,
	},
	{
		id: 4,
		username: "Stark",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_4@gmail.com",
		status: "active",
		age: 16,
	},
	{
		id: 5,
		username: "Targaryen",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_5@gmail.com",
		status: "passive",
		age: 22,
	},
	{
		id: 6,
		username: "Melisandre",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_6@gmail.com",
		status: "active",
		age: 15,
	},
	{
		id: 7,
		username: "Clifford",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_7@gmail.com",
		status: "passive",
		age: 44,
	},
	{
		id: 8,
		username: "Frances",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_8@gmail.com",
		status: "active",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_9@gmail.com",
		status: "pending",
		age: 65,
	},
	{
		id: 10,
		username: "Arya",
		img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
		email: "email_10@gmail.com",
		status: "active",
		age: 25,
	},
];
