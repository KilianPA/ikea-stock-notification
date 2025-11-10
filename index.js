import { sendMessage } from "./telegram.js";

const items = [
  {
    id: 30612942,
    name: "TYSSEDAL Porte, gris-beige",
    stock: null,
  },
  {
    id: 10603825,
    name: "PAX - Élément complémentaire central",
    stock: null,
  },
];

const classUnitCode = "518"; // local ikea

(async () => {
  setInterval(async () => {
    for (const item of items) {
      const stock = await getStockOfItem(item.id);
      console.log(
        `Stock for item ${item.name}: ${stock} | ${new Date()
          .toISOString()
          .slice(0, 23)
          .replace("T", " ")}`
      );
      if (item.stock !== null && stock > item.stock) {
        sendMessage(
          `Le stock du ${item.name} est de ${stock - item.stock} unites`
        );
      }
      item.stock = stock;
    }
  }, 60000 * 5); // 5 minutes
})();

async function getStockOfItem(itemId) {
  const response = await fetch(
    `https://api.salesitem.ingka.com/availabilities/ru/fr?itemNos=${itemId}&expand=StoresList,Restocks,SalesLocations,DisplayLocations,ChildItems,FoodAvailabilities`,
    {
      headers: {
        "X-Client-Id": "ef382663-a2a5-40d4-8afe-f0634821c0ed",
      },
    }
  );

  const json = await response.json();
  const item = json.availabilities.find(
    (s) => s.classUnitKey.classUnitCode === classUnitCode
  );
  return item.buyingOption.cashCarry.availability.quantity;
}
