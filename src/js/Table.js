import { useState } from 'react';
import { 
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    LinearProgress
} from '@material-ui/core';
import '../css/loading.css';

function TableElement(props) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (e, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (e) => {
      setRowsPerPage(+e.target.value);
      setPage(0);
    };

    const renderTablehead = () => {
        return(
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        )
    }

    const renderTablebody = () => {
        return(
            <TableBody>
                {
                    props.data.slice(
                        page * rowsPerPage, 
                        page * rowsPerPage + rowsPerPage
                    ).map((row, k) => {
                        return(
                            <TableRow hover role="checkbox" tabIndex={-1} key={k}>
                                {columns.map((column, x) => {
                                    var value = row[column.id];
            
                                    return(
                                        <TableCell key={k + '_' + x} style={{ minWidth: column.minWidth }}>
                                            {column.format(value)}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        )
    }
  
    if(props.data.length === 0) return <Loading />;
    return (
        <Paper style={{width: "100%"}}>
            <TableContainer style={{maxHeight: document.documentElement.clientHeight - 146}}>
                <Table stickyHeader aria-label="sticky table">
                    {renderTablehead()}
                    {renderTablebody()}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

const columns = [
    { id: 'name', label: 'Name', minWidth: 150, format: value => wordsToCapital(value) },
    { id: 'id', label: 'ID', minWidth: 150, format: value => value },
    { id: 'color', label: 'Color', minWidth: 150, format: value => value.join(", ") },
    { id: 'manufacturer', label: 'Manufacturer', minWidth: 150, format: value => value },
    { id: 'price', label: 'Price', minWidth: 50, format: value => value },
    { id: 'availability', label: 'Availability', minWidth: 50, format: value => availabilityParser(value) },
]

// Make all letters in every word small and first one capital
const wordsToCapital = (string) => { 
    var words = string.toLowerCase().split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    return words.join(" ")
}

// For better Availability status look
const availabilityParser = (string) => { 
    switch(string) {
        case "INSTOCK":
            return "In stock";
        case "OUTOFSTOCK":
            return "Out of stock";
        case "LESSTHAN10":
            return "Less than 10";
        default: 
            return string;
    }
}

const Loading = () => {
    return(
        <div className="loading" >
            <LinearProgress />
        </div>
    )
}
  
export default TableElement;