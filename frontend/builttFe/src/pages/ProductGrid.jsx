import React, {useEffect, useState} from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import ProductCard from "./ProductCard";
import uuid from "react-uuid";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await axios.get("http://localhost:8000", {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            })
            setProducts(response.data);
        };

        loadData().catch(console.error);
    }, []);

    return (
        products.length > 0 ? (
            <Grid container spacing={2}>
                {products.map((product) => {
                    return (
                        <Grid key={uuid()} item xs={6} md={3}>
                            <ProductCard key={uuid()} product={product} />
                        </Grid>
                    )
                })}
            </Grid>
        ) : (
            <p>Nema podataka u bazi.</p>
        )
    )
}

export default ProductGrid