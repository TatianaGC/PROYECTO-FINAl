import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalProductos from "./TotalProductos";
import TotalPedidos from "./TotalPedidos";
import IngresosTotales from "./IngresosTotales";
import PrecioPromProductos from "./PrecioPromProductos";
import ProductosMasVendidos from "./ProductosMasVendidos";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(productsResponse.data);

        const cartsResponse = await axios.get("https://fakestoreapi.com/carts");
        setCarts(cartsResponse.data);

        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      {loading ? (
        <section className="loader-container">
          <div className="loader"></div>
        </section>
      ) : (
        <section className="dashboard-container">
          <TotalProductos products={products} className="item1" />
          <TotalPedidos carts={carts} className="item2" />
          <IngresosTotales carts={carts}  className="item3"/>
          <PrecioPromProductos products={products}  className="item4"/>
          <ProductosMasVendidos carts={carts} products={products}  className="item5"/>
        </section>
      )}
    </section>
  );
};

export default Dashboard;
