const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  it("Should decrease the quality and sellIn of normal items by 1", function() {
    const items = [new Item("Tiny Item", 10, 20)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("Once the sell-by date has passed, Quality degrades twice as fast",function(){
    const items = [new Item("Elixir of the Mongoose",0,10)]; //Si suponemos que vence mañana, la calidad deberia ser de 8
    const gildedRose = new Shop(items)

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1); //-> Expiration date has passed
    expect(items[0].quality).toBe(8);

  })

  it("The Quality of an item is never negative", function(){
    const items = [new Item("Product P", 0,0)] //Despues de un dia, la calidad debe seguir en 0 y sellIn en -1
    const gildedRose = new Shop(items)

    gildedRose.updateQuality()

    expect(items[0].quality).toBe(0)
    expect(items[0].sellIn).toBe(-1)
  })

  it("'Aged Brie' actually increases in Quality the older it gets", function(){
    const items = [new Item("Aged Brie",2,5)] //Aumenta la quality en 1 si es 'Aged Brie'
    const gildedRose = new Shop(items)

    gildedRose.updateQuality()

    expect(items[0].sellIn).toBe(1)
    expect(items[0].quality).toBe(6)
    
  })

  it("The Quality of an item is never more than 50", function(){
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert",3,50)] //Solo aged brie y backstage aumentan su quality
    const gildedRose = new Shop(items)

    gildedRose.updateQuality()

    expect(items[0].quality).toBe(50)
  })

  it("'Sulfuras', being a legendary item, never has to be sold or decreases in Quality", function(){
    const items = [new Item("Sulfuras, Hand of Ragnaros",5,80)] //Se esperan los mismos valores
    const gildedRose = new Shop(items)

    gildedRose.updateQuality()

    expect(items[0].sellIn).toBe(5)
    expect(items[0].quality).toBe(80)

  })
  /*--------------------------------Backstage Tests------------------------------------------------*/

  it("Should increase quality by 2 when there are 10 days or less for backstage passes", function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it("Should increase quality by 3 when there are 5 days or less for backstage passes", function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  it("Should drop quality to 0 after the concert for backstage passes", function() {
    const items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)];
    const gildedRose = new Shop(items);

    gildedRose.updateQuality();

    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});