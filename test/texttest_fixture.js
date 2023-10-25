const { Shop, Item } = require("../src/gilded_rose_R");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 3, 45),
  new Item("Elixir of the Mongoose", 3, 10),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // Ya funciona correctamente
  new Item("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[11]) || 11;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
