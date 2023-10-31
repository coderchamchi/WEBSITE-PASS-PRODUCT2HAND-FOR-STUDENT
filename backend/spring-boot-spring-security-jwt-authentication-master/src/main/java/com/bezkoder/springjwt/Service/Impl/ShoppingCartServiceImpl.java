//package com.bezkoder.springjwt.Service.Impl;
//
//import com.bezkoder.springjwt.Service.ShoppingCartService;
//import com.bezkoder.springjwt.entities.CartItem;
//import com.bezkoder.springjwt.entities.Product;
//import com.bezkoder.springjwt.entities.ShoppingCart;
//import com.bezkoder.springjwt.entities.User;
//import com.bezkoder.springjwt.repository.CartItemRepository;
//import com.bezkoder.springjwt.repository.ShoppingCartRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.util.ObjectUtils;
//
//import java.util.HashSet;
//import java.util.List;
//import java.util.Set;
//@Service
//public class ShoppingCartServiceImpl implements ShoppingCartService {
//    @Autowired
//    private CartItemRepository itemRepository;
//
//    @Autowired
//    private ShoppingCartRepository cartRepository;
//
//    @Override
//    public List<ShoppingCart> getallCart() {
//        return cartRepository.findAll();
//    }
//
//    @Override
//    public ShoppingCart addItemToCart(Product product, int quantity, User customer) {
//        ShoppingCart cart = customer.getShoppingCart();
//
//        if (cart == null) {
//            cart = new ShoppingCart();
//        }
//        Set<CartItem> cartItems = cart.getCartItem();
//        CartItem cartItem = findCartItem(cartItems, product.getProductid());
//        if (cartItems == null) {
//            cartItems = new HashSet<>();
//            if (cartItem == null) {
//                cartItem = new CartItem();
//                cartItem.setProduct(product);
//                cartItem.setTotalPrice(quantity * product.getPrice());
//                cartItem.setQuantity(quantity);
//                cartItem.setCart(cart);
//                cartItems.add(cartItem);
//                itemRepository.save(cartItem);
//            }
//        }
//        else {
//            if (cartItem == null) {
//                cartItem = new CartItem();
//                cartItem.setProduct(product);
//                cartItem.setTotalPrice(quantity * product.getPrice());
//                cartItem.setQuantity(quantity);
//                cartItem.setCart(cart);
//                cartItems.add(cartItem);
//                itemRepository.save(cartItem);
//            }
//            else
//            {
//                cartItem.setQuantity(cartItem.getQuantity() + quantity);
//                cartItem.setTotalPrice(cartItem.getTotalPrice() + ( quantity * product.getPrice()));
//                itemRepository.save(cartItem);
//            }
//        }
//        cart.setCartItem(cartItems);
//
//        int totalItems = totalItems(cart.getCartItem());
//        double totalPrice = totalPrice(cart.getCartItem());
//
//        cart.setTotalPrices(totalPrice);
//        cart.setTotalItems(totalItems);
//        cart.setCustomer(customer);
//
//        return cartRepository.save(cart);
//    }
//
//    @Override
//    public ShoppingCart updateItemInCart(Product product, int quantity, User customer) {
//        ShoppingCart cart = customer.getShoppingCart();
//
//        Set<CartItem> cartItems = cart.getCartItem();
//
//        CartItem item = findCartItem(cartItems, product.getProductid());
//
//        item.setQuantity(quantity);
//        item.setTotalPrice(quantity * product.getPrice());
//
//        itemRepository.save(item);
//
//        int totalItems = totalItems(cartItems);
//        double totalPrice = totalPrice(cartItems);
//
//        cart.setTotalItems(totalItems);
//        cart.setTotalPrices(totalPrice);
//
//        return cartRepository.save(cart);
//    }
//
//    @Override
//    public ShoppingCart deleteItemFromCart(Product product, User customer) {
//        ShoppingCart cart = customer.getShoppingCart();
//
//        Set<CartItem> cartItems = cart.getCartItem();
//
//        CartItem item = findCartItem(cartItems, product.getProductid());
//
//        cartItems.remove(item);
//
//        itemRepository.delete(item);
//
//        double totalPrice = totalPrice(cartItems);
//        int totalItems = totalItems(cartItems);
//
//        cart.setCartItem(cartItems);
//        cart.setTotalItems(totalItems);
//        cart.setTotalPrices(totalPrice);
//
//        return cartRepository.save(cart);
//    }
//
//    public CartItem findCartItem(Set<CartItem> cartItems, Long productId) {
//        if (cartItems == null) {
//            return null;
//        }
//        CartItem cartItem = null;
//
//        for (CartItem item : cartItems) {
//            if (item.getProduct().getProductid() == productId) {
//                cartItem = item;
//            }
//        }
//        return cartItem;
//    }
//
//    private int totalItems(Set<CartItem> cartItems){
//        int totalItems = 0;
//        for(CartItem item : cartItems){
//            totalItems += item.getQuantity();
//        }
//        return totalItems;
//    }
//
//    private double totalPrice(Set<CartItem> cartItems){
//        double totalPrice = 0.0;
//
//        for(CartItem item : cartItems){
//            totalPrice += item.getTotalPrice();
//        }
//
//        return totalPrice;
//    }
//}
