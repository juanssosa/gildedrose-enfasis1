class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}
  
class Shop {
    constructor(items=[]){
      this.items = items;
    }
    
    updateQuality() {
        this.items.forEach((item) => {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.sellIn -= 1;
            this.updateItemQuality(item);
          }
        });
        return this.items;
    }
    
    updateItemQuality(item) {
        if (item.name === 'Aged Brie') {
          this.updateAgedBrieQuality(item);
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          this.updateBackstagePassQuality(item);
        } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
          // Legendary item, do nothing
        } else if (item.name === 'Conjured Mana Cake') {
            this.updateConjuredQuality(item);
        } else {
          this.updateNormalItemQuality(item);
        }
    }
    
    updateConjuredQuality(item) {
        const qualityChange = item.sellIn <= 0 ? 4 : 2; //Degrada el doble de rapido despues de la fecha de vencimiento
        item.quality = Math.max(item.quality - qualityChange, 0);
    }

    updateAgedBrieQuality(item) {
        item.quality = Math.min(item.quality + 1, 50);
    }
    
    updateBackstagePassQuality(item) {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else if (item.sellIn <= 5) {
          item.quality = Math.min(item.quality + 3, 50);
        } else if (item.sellIn <= 10) {
          item.quality = Math.min(item.quality + 2, 50);
        } else {
          item.quality = Math.min(item.quality + 1, 50);
        }
    }
    
    updateNormalItemQuality(item) {
        const qualityChange = item.sellIn <= 0 ? 2 : 1;
        item.quality = Math.max(item.quality - qualityChange, 0);
    }

}
  
  module.exports = {
    Item,
    Shop
  }
  