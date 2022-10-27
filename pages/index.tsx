import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    window.fetch("/api/avo").then((response) =>
      response.json().then(({ data, length }) => {
        console.log("data!!");
        console.log(data);
        data.map((d) => console.log(d.name));
        setProductList(data);
      })
    );
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Hello Diego Ca!!!</h1>
      <div>
        {productList.map((producto) => (
          <div>
            <Link href={`/products/${producto.id}`}>
              <strong>{producto.id} - </strong>
              {producto.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
