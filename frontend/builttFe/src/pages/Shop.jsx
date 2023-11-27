import React from "react";
import Header from "./Header";
import ShopGrid from "./ShopGrid";
import "./Shop.scss";
import Container from "@mui/material/Container";

const Shop = () => {
    return (
        <Container className="ShopHolder">
            <Header />
            <ShopGrid />
        </Container>
    )
}

export default Shop