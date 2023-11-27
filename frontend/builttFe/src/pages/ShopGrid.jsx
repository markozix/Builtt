import React from "react";
import "./ShopGrid.scss";
import Container from "@mui/material/Container";
import ProductGrid from "./ProductGrid";

const ShopGrid = () => {
    return (
        <Container className="ShopGrid">
            <Container className="TitleAndNumber">
                <p className="Title">Svi proizvodi</p>
                <p className="Number">50 proizvoda</p>
            </Container>
            <Container>
                <ProductGrid />
            </Container>
        </Container>
    )
}

export default ShopGrid