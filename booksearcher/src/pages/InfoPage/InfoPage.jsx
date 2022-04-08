import { CircularProgress } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Request } from "../../BookAPI/Request";
import Header from "../../components/Header";
import CardBig from "./components/Card/CardBig";
import './InfoPage.css';

// replaced this page with <CardBig /> component
const InfoPage = ({book}) => {
    return (
        <Fragment>
            {/* <Header /> */}
            <CardBig book={book}>
                {book.volumeInfo.description.replace(/<[^>]+>/g,'')}
            </CardBig>        
        </Fragment>
    )
}

export default InfoPage;