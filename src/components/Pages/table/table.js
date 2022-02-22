import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { db } from '../../../firebase/Firestore';
import { collection, getDocs } from '@firebase/firestore';
import { Box } from '@material-ui/core';
import { Image } from 'antd';
import CircularIndeterminate from '../../Progess/Progress';
import { Button } from '@mui/material';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import RotateRightIcon from '@material-ui/icons/RotateRight';

export default function StickyHeadTable(props) {
    const columns = [
        { id: 'img_location', label: 'Image' },
        { id: 'date', label: 'Date' },
        {
            id: 'messege',
            label: 'Message',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'status',
            label: 'Status',
        },
    ];
    // var filteredData = [];
    const [filterData, setFiterData] = React.useState([]);
    const { sort } = props;
    const [page, setPage] = React.useState(0);
    const [isloaded, setIsLoaded] = React.useState(false);
    const userCollectionRef = collection(db, "fyp");
    const [user, setUser] = React.useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const rows = [];

    // const ref = db.collection("fyp")
    // console.log("fyp", ref)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getUsers = async () => {
        setIsLoaded(false)
        const data = await getDocs(userCollectionRef);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        // console.log(data.docs.map((doc) => doc.data()))
        setIsLoaded(true)
        // console.log(sort)

    }
    React.useEffect(() => {
        getUsers();
    }, [])
    React.useEffect(() => {
        setFiterData(user.filter(item => item.status === sort).map((filterItem) => {
            return filterItem.status === sort ? filterItem : ""
        }))
    }, [user])

    console.log(filterData)
    return (
        <>
            <div style={{ display:'flex', alignItems:'right', justifyContent:'right' }}>
               
               <Button onClick={getUsers} color="primary" variant="contained" ><RotateRightIcon /></Button> 
               {/* <button style={{border:'1px solid black', borderRadius:'4px', backgroundColor:'transparent', cursor:'pointer'}} >refresh</button> */}
            </div>
            <Paper sx={{ width: '80vw', fontSize: "100px", color: "yellow", overflow: 'hidden' }}>
                {isloaded ? <TableContainer sx={{ maxHeight: 400 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        sx={{ fontSize: "25px", fontWeight: "5px" }}
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filterData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <>

                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>

                                                <TableCell>
                                                    <Image
                                                        width={100}
                                                        src={row.img_location}
                                                    />
                                                    {/* <img src={row.img_location} height="70px" width="100px"></img> */}
                                                </TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "25px", fontWeight: "5px" }}>{row.date}</TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "25px", fontWeight: "5px" }}>{row.messege}</TableCell>
                                                <TableCell
                                                    sx={{ fontSize: "25px", fontWeight: "5px" }}>{row.status}</TableCell>
                                                {/* <TableCell><Button variant='outlined' color="secondary">View Image</Button></TableCell> */}

                                            </TableRow>
                                        </>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer> : <Box sx={{ height: "150px", marginTop: "15px" }}> <CircularIndeterminate /></Box>}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filterData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />


            </Paper>
        </>

    );
}