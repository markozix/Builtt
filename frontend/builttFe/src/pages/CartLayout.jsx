import Container from "@mui/material/Container";
import React from "react";
import "./CartLayout.scss";
import Grid from "@mui/material/Grid";
import CartList from "./CartList";
import Summary from "./Summary";

const CartLayout = () => {
    return (
        <Container>
            <Container className="Title"><h2>Tvoja korpa</h2></Container>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <CartList />
                    </Grid>
                    <Grid item xs={4}>
                        <Summary />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default CartLayout