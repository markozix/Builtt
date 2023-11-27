import Container from "@mui/material/Container";
import React from "react";
import "./CartList.scss";
import CartListItem from "./CartListItem";

const CartList = () => {
    return (
        <Container className="CartList">
            <CartListItem />
        </Container>
    )

}

export default CartList