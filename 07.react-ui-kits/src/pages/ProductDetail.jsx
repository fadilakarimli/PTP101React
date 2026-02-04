import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";
import { Container, Typography } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return null;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">{product.title}</Typography>
      <img src={product.image} width="300" />
      <Typography mt={2}>{product.category}</Typography>
      <Typography fontWeight="bold">${product.price}</Typography>
    </Container>
  );
};

export default ProductDetail;
