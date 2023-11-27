import React, {useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../assets/BuilttLogo.png";
import Box from "@mui/material/Box";
import { ShoppingCart } from "@mui/icons-material";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const productReducer = useSelector((state) => state.product);
    const numberOfItems = productReducer.productList.length;

    const moveToCart = () => {
        navigate("/cart");
    }

    useEffect(() => {

    }, [numberOfItems]);

    return (
        <AppBar className="header">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} />
                    <Box className="Cart">
                        <ShoppingCart className="CartIcon" onClick={moveToCart}/>
                        {numberOfItems}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header