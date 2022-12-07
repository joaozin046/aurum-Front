import React from "react";
import { Table } from "reactstrap";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, inst, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, inst, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

export default function TableCheckingAccount({ cAccounts }) {
  const rows = [];
  const row = cAccounts.map((it) => {
    return createRow(it.title + " " + it.id, it.broker.name, it.yieldRate, it.initialValue);
  });

  row.forEach((it) => {
    rows.push(it);
  });

  const invoiceSubtotal = subtotal(rows);

  return (
    <Table hover responsive size="sm">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Instituição</th>
          <th>Rendimento mensal</th>
          <th>Valor Atual</th>
          <th>Vator final</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            <th scope="row">{row.desc}</th>
            <td>{row.inst}</td>
            <td>{row.qty}</td>
            <td>{row.unit.toFixed(2)}</td>
            <td>{ccyFormat(row.price)}</td>
          </tr>
        ))}
        <tr>
          <th>Total</th>
          <th></th>
          <th></th>
          <th></th>
          <td>{ccyFormat(invoiceSubtotal)}</td>
        </tr>
      </tbody>
    </Table>
  );
}
