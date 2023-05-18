import Sales from "@/modules/Sales";

export async function findAllSales() {
  return Sales.find().exec();
}
