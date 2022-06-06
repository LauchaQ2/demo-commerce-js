import React, { useRef } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export default function CartTable({ cart }) {

    const pdfExportComponent = useRef(null)
    const contentArea = useRef(null)

    const handleExportWithComponent = (event) => {
        pdfExportComponent.current.save();
    }

    return (
        <>
            <PDFExport ref={pdfExportComponent} paperSize="A4">
                <TableContainer ref={contentArea}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>NOMBRE</TableCell>
                                <TableCell>CANTIDAD</TableCell>
                                <TableCell>TAMAÑO</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.line_items.map((item) => {
                                return (
                                    <TableRow>
                                        <TableCell key={item.id} item={item}>{item.name}</TableCell>
                                        <TableCell key={item.id} item={item}>{item.quantity}</TableCell>
                                        <TableCell key={item.id} item={item}>{item.selected_options[0].option_name}</TableCell>
                                    </TableRow>);
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </PDFExport>
            <Link to={'/'}>
                <Button variant="contained" color="primary">SEGUIR COMPRANDO</Button>
            </Link>
            <Button onClick={handleExportWithComponent} variant="contained" color="primary">VER PEDIDO EN PDF</Button>
        </>
    );
}
