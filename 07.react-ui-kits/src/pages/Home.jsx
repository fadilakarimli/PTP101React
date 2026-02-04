import { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Drawer,
  Box,
  IconButton,
  Badge,
  TextField,
} from "@mui/material";

import { Favorite, ShoppingBasket } from "@mui/icons-material";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/product/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  // Wishlist toggle
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);
      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase/decrease quantity
  const changeQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p,
        )
        .filter((p) => p.quantity > 0),
    );
  };

  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">Products</Typography>
        <Box display="flex" gap={1}>
          {" "}
          {/* gap biraz azaldıldı */}
          {/* Wishlist */}
          <Button
            startIcon={<Favorite />}
            variant="outlined"
            size="small" // 👈 kiçik ölçü
            onClick={() => setWishlistOpen(true)}
          >
            Wishlist ({wishlist.length})
          </Button>
          {/* Cart */}
          <IconButton
            size="small" // 👈 kiçik ölçü
            onClick={() => setCartOpen(true)}
          >
            <Badge
              badgeContent={cart.reduce((acc, p) => acc + p.quantity, 0)}
              color="error"
            >
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Box>
      </Box>

      {/* Products Grid */}
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <ProductCard
              product={item}
              isWishlisted={wishlist.includes(item.id)}
              toggleWishlist={() => toggleWishlist(item.id)}
              addToCart={() => addToCart(item)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Wishlist Drawer */}
      <Drawer
        anchor="right"
        open={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
      >
        <Box sx={{ width: 350, p: 3 }}>
          <Typography variant="h5" mb={2}>
            Your Wishlist
          </Typography>
          {wishlistProducts.length === 0 ? (
            <Typography>No products in wishlist</Typography>
          ) : (
            wishlistProducts.map((product) => (
              <Box
                key={product.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
                borderBottom="1px solid #eee"
                pb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                  <Box>
                    <Typography variant="body1">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                  </Box>
                </Box>
                <IconButton onClick={() => toggleWishlist(product.id)}>
                  <Favorite color="error" />
                </IconButton>
              </Box>
            ))
          )}
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Box sx={{ width: 400, p: 3 }}>
          <Typography variant="h5" mb={2}>
            Your Cart
          </Typography>
          {cart.length === 0 ? (
            <Typography>No items in cart</Typography>
          ) : (
            cart.map((product) => (
              <Box
                key={product.id}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
                borderBottom="1px solid #eee"
                pb={1}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                  <Box>
                    <Typography variant="body1">{product.title}</Typography>

                    {/* Quantity Controls */}
                    <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                      {/* Azalt düyməsi */}
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                          if (product.quantity <= 1) {
                            // Quantity 1-dən aşağı düşəndə məhsulu sil
                            setCart((prev) =>
                              prev.filter((p) => p.id !== product.id),
                            );
                          } else {
                            changeQuantity(product.id, -1);
                          }
                        }}
                      >
                        -
                      </Button>

                      {/* Inputla quantity */}
                      <TextField
                        size="small"
                        type="number"
                        value={product.quantity}
                        onChange={(e) => {
                          let val = parseInt(e.target.value);
                          if (isNaN(val) || val < 1) {
                            // 1-dən aşağı olarsa məhsulu sil
                            setCart((prev) =>
                              prev.filter((p) => p.id !== product.id),
                            );
                          } else {
                            // Düzgün dəyər varsa quantity-ni yenilə
                            setCart((prev) =>
                              prev.map((p) =>
                                p.id === product.id
                                  ? { ...p, quantity: val }
                                  : p,
                              ),
                            );
                          }
                        }}
                        inputProps={{ min: 1 }}
                        sx={{ width: 50, textAlign: "center" }}
                      />

                      {/* Artır düyməsi */}
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => changeQuantity(product.id, 1)}
                      >
                        +
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))
          )}

          {/* Total Price */}
          {cart.length > 0 && (
            <Typography variant="h6" mt={2}>
              Total: $
              {cart
                .reduce((acc, p) => acc + p.price * p.quantity, 0)
                .toFixed(2)}
            </Typography>
          )}
        </Box>
      </Drawer>
    </Container>
  );
};

export default Home;
