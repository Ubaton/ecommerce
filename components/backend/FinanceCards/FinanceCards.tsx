import React from "react";
import FinanceCard from "./FinanceCard";

export default function FinanceCards() {
  const orderStats = [
    {
      title: "Today's Orders",
      sales: 5500,
    },
    {
      title: "Yesterday's Orders",
      sales: 13000,
    },
    {
      title: "This Month Sales",
      sales: 30500,
    },
    {
      title: "All-Time Sales",
      sales: 135350,
    },
  ];

  const colors = ["#ff0019", "#32CD32", "#008cff", "#ffe700"];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 gap-4 py-6"
    >
      {orderStats.map((item, index) => {
        return (
          <FinanceCard
            data={item}
            color={colors[index % colors.length]}
            key={index}
          />
        );
      })}
    </div>
  );
}
