import Container from "@mui/material/Container";
import React from "react";
import "./SummaryItem.scss";

const SummaryItem = ({ label, value }) => {
    return (
        <Container className="SummaryItem">
            <p>{label}</p>
            <p className="Item">{value} RSD</p>
        </Container>
    )
}

export default SummaryItem