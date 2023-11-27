import Container from "@mui/material/Container";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./CartListItem.scss";
import {setProductList} from "../store/product";
import uuid from "react-uuid";

const CartListItem = () => {
    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.product);
    const productList = productReducer.productList;

    const removeItem = (id) => {
        const result = productList.filter((product) => product.id !== id);
        dispatch(setProductList(result))
    }

    const changeQuantity = (number, id) => {
        const result = productList.map((product) => {
            if (product.id === id) {
                return {...product, numberOfTimes: product.numberOfTimes + number}
            }

            return product;
        })

        dispatch(setProductList(result))
    }

    useEffect(() => {

    }, [])

    return (
        <Container className="CartListItem">
            {productList.map((product) => {
                return (
                    <Container key={uuid()} className="ProductInfo">
                        <img src={product.url} className="ProductImage"/>
                        <Container className="TitleAndButtons">
                            <h3>{product.name}</h3>
                            <ButtonGroup
                                className="ButtonGroup"
                                variant="contained"
                                aria-label="Disabled elevation buttons"
                            >
                                <Button className="ButtonPlusMinus" onClick={() => changeQuantity(-1, product.id)}>-</Button>
                                <h5 className="Number">{product.numberOfTimes}</h5>
                                <Button className="ButtonPlusMinus" onClick={() => changeQuantity(1, product.id)}>+</Button>
                            </ButtonGroup>
                            <Button className="UkloniBtn" onClick={() => removeItem(product.id)}>Ukloni</Button>
                        </Container>
                        <h3>{product.price * product.numberOfTimes}RSD</h3>
                    </Container>
                )
            })}
        </Container>
    )
}

export default CartListItem