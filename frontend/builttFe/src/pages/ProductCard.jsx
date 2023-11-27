import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./ProductCard.scss";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBasket } from "@mui/icons-material";
import { setProductList } from "../store/product";

const ProductCard = ({ product }) => {
    const [shouldShowButtons, setShouldShowButtons] = useState(false);
    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.product);
    let productList = productReducer.productList;
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const decreaseCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(0);
        }
    }

    const handleOnHover = () => {
        setShouldShowButtons(true);
    }

    const handleOnLeave = () => {
        setShouldShowButtons(false);
    }

    const addToCart = () => {
        if (counter > 0) {
            const data = {
                ...product,
                numberOfTimes: counter
            };
            productList = [...productList, data];
            dispatch(setProductList(productList));
        } else {
            alert("Select at least one item before adding to cart.");
        }
    }

    return (
        <>
            <Card
                sx={{ maxWidth: 345 }}
                onMouseOver={() => handleOnHover()}
                onMouseOut={() => handleOnLeave()}
            >
                <CardMedia
                    sx={{ height: 230 }}
                    image={product.url}
                    title={product.name}
                />
                <CardContent className="CardContent">
                    <Typography gutterBottom variant="h6" component="div">
                        {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h7" component="div">
                        {product.price} RSD
                    </Typography>
                    {shouldShowButtons && (
                        <ButtonGroup
                            className="ButtonGroup"
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >
                            <Button className="ButtonPlusMinus" onClick={decreaseCounter}>-</Button>
                            <h5 className="Number">{counter}</h5>
                            <Button className="ButtonPlusMinus" onClick={increaseCounter}>+</Button>
                            <ShoppingBasket className="AddToCart" onClick={addToCart}/>
                        </ButtonGroup>
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard