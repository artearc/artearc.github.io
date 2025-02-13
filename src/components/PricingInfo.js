import React from "react";

const PricingInfo = ({ pricingData }) => {
  return (
    <div className="autoShow">
        <section className="pricing-info">
        <h2>Precios Informativos</h2>
        <div id="priceTable">
            <table>
            <thead>
                <tr>
                <th>Cantidad de Cartas</th>
                <th>Precio por Carta</th>
                <th>Precio Total</th>
                <th>Comentarios</th>
                </tr>
            </thead>
            <tbody>
                {pricingData.map((row, index) => (
                <tr key={index}>
                    <td>{row.quantity}</td>
                    <td>{row.pricePerCard}</td>
                    <td>{row.totalPrice}</td>
                    <td>{row.comments}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </section>
    </div>
    
  );
};

export default PricingInfo;
