import React, { useEffect } from "react";
import "./shop-items.styles.scss";
import ShopItemCard from "../shop-item-card/shopItemCard.component";
import { connect } from "react-redux";
import { getProductByCategory } from "../../redux/producs/products.action";

const ShopItem = ({ product, getProductByCategory, match }) => {
  const category = match.params.catId;

  useEffect(() => {
    getProductByCategory(category);
  }, [category, getProductByCategory]);

  return (
    <main className="products">
      {product &&
        product.items.map((item) => (
          <ShopItemCard key={item._id} item={item} />
        ))}
    </main>
  );
};

const mapStateToProps = (state) => ({
  product: state.products.product[0],
});

export default connect(mapStateToProps, { getProductByCategory })(ShopItem);