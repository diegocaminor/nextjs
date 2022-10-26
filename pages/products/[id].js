import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>ProductItem page {id}</h1>
    </div>
  );
};

export default ProductItem;
