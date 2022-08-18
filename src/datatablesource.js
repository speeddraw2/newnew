export const userColumns = [
 
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
          
        </div>
      );
    },
  },
  {
    field: "displayName",
    headerName: "Name and surname",
    width: 160,
  },
  {
    field: "manager",
    headerName: "Manager",
    width: 160,
  },
  {
    field: "employeenumber",
    headerName: "Employeenumber",
    width: 160,
  },
  {
    field: "employeenumber",
    headerName: "Employeenumber",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "address",
    headerName: "Address",
    width: 200,
  },
  
  {
    field:"country",
    headerName:"Country",
    width: 100,

  },
  
];