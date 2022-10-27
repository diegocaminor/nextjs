import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface IProduct {
  id: string;
  image: string;
  sku: string;
  name: string;
  price: number;
}

const ProductItem = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    window.fetch(`/api/avo/${id}`).then((response) =>
      response.json().then((data) => {
        setProduct(data);
      })
    );
  }, [id]);

  return (
    <div>
      <h1>{product && product.name}</h1>
      <ul>
        <li>{product && product.image}</li>
        <li>{product && product.price}</li>
        <li>{product && product.sku}</li>
      </ul>
    </div>
  );
};

export default ProductItem;
