import { Box, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, isWishlisted, toggleWishlist, addToCart }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ height: "100%", position: "relative" }}>
      {/* Wishlist Heart */}
      <IconButton
        onClick={toggleWishlist}
        sx={{
          position: "absolute",
          top: 6,      // biraz yuxarı
          right: 6,    // biraz sağa
          color: isWishlisted ? "red" : "gray",
          p: 0.5       // padding kiçik
        }}
        size="small"   // 👈 kiçik heart icon
      >
        {isWishlisted ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
      </IconButton>

      <CardMedia component="img" height="180" image={product.image} alt={product.title} />

      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">{product.category}</Typography>
        <Typography fontWeight="bold">${product.price}</Typography>

        <Box mt={1} display="flex" gap={1}>
          <Button
            fullWidth
            size="small"          // 👈 kiçik button
            variant="contained"
            onClick={addToCart}
          >
            Add to Cart
          </Button>

          <Button
            fullWidth
            size="small"          // 👈 kiçik button
            variant="outlined"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
