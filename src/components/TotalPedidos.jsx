import React from "react";

const TotalPedidos = ({ carts }) => {
  return (
    <section className="total-prod">
      <p>{carts.length}</p>
      <h2>Número total pedidos</h2>
    </section>
  );
};

export default TotalPedidos;
