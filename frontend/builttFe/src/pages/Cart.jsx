import React from "react";
import {useSelector} from "react-redux";
import Header from "./Header";
import Container from "@mui/material/Container";
import CartLayout from "./CartLayout";
import "./Cart.scss";

const Cart = () => {
    const productReducer = useSelector((state) => state.product);
    const productList = productReducer.productList;

    return (
        <Container className="CartHolder">
            <Header />
            <CartLayout />
        </Container>
    )

}

export default Cart