import Container from "@mui/material/Container";
import React from "react";
import Button from "@mui/material/Button";
import "./Summary.scss";
import {useSelector} from "react-redux";
import SummaryItem from "./SummaryItem";

const Summary = () => {
    const productReducer = useSelector((state) => state.product);
    const productList = productReducer.productList;
    const totalSummary = productList.reduce((acc, product) => {
        const productTotal = product.price * product.numberOfTimes;

        return acc + productTotal;
    }, 0)
    const savings = -300;
    const mailingExpenses = 250;
    const toPayInTotal = totalSummary + savings + mailingExpenses;

    const handlePayButton = () => {
        alert("Your order has been placed.")
    }

    return (
        <Container className="Summary">
            <h3 className="Title">Tvoja narudzba</h3>
            <SummaryItem label={"Ukupno"} value={totalSummary}/>
            <SummaryItem label={"Usteda"} value={savings}/>
            <SummaryItem label={"Isporuka Daily Express*"} value={mailingExpenses}/>
            <hr />
            <SummaryItem label={"Ukupno za uplatu"} value={toPayInTotal}/>
            <p className="paymentInfo">Cena je sa ukljucenim PDV-om</p>
            <div className="ButtonHolder">
                <Button onClick={handlePayButton} className="PayButton">Prijavi se za brze placanje</Button>
            </div>
        </Container>
    )
}

export default Summary