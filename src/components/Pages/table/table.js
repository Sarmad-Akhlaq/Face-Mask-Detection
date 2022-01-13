import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import firestore from '../../../firebase';
import { db } from '../../../firebase/Firestore';
import { collection, doc, getDocs } from '@firebase/firestore';
import { Button, Box } from '@material-ui/core';
import { Image } from 'antd';
import CircularIndeterminate from '../../Progess/Progress';



function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
}

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
    }
    React.useEffect(() => {
        getUsers();
    }, [])

    return (
        <Paper sx={{ width: '80vw', fontSize: "100px", color: "yellow", overflow: 'hidden' }}>
            {isloaded  ? <TableContainer sx={{ maxHeight: 400 }}>
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
                                {user
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {/* {columns.map((column) => {
                                            const value = row[column.id];
                                            console.log(row.img_location)
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                    </TableCell>
                                            );
        20                           })} */}

                                                {
                                                    row.status === sort ?
                                                        (<>
                                                            {
                                                                console.log(row.status)
                                                            }
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
                                                        </>) : console.log(row.status)
                                                }
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                </Table>
            </TableContainer> : <Box sx={{height : "150px" ,marginTop: "15px"}}> <CircularIndeterminate /></Box>}
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}