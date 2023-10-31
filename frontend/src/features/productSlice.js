import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [], // Dữ liệu sản phẩm lấy từ API
    selectedProduct: null,
    selectedSize: null,
    selectedCount: 1,
    provisionalPrice: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProduct: (state, action) => {
      const { product, size } = action.payload;
      state.selectedProduct = product;
      state.selectedSize = size;
      state.selectedCount = 1;
      state.provisionalPrice = product.price;
    },
    incrementCount: (state) => {
      state.selectedCount++;
      state.provisionalPrice =
        state.selectedProduct.price * state.selectedCount;
    },
    decrementCount: (state) => {
      if (state.selectedCount > 1) {
        state.selectedCount--;
        state.provisionalPrice =
          state.selectedProduct.price * state.selectedCount;
      }
    },
  },
});

export const { setProducts, selectProduct, incrementCount, decrementCount } =
  productSlice.actions;

export default productSlice.reducer;
