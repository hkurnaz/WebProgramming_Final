import { defineStore } from 'pinia';

interface CartItem {
  // Define the structure of your cart item here
  // For example:
  id: number;
  name: string;
  price: number;
  // ... other properties
}

interface CartStoreState {
  items: CartItem[];
}

export const useCartStore = defineStore('CartStore', {
  state: (): CartStoreState => {
    return {
      items: [],
    };
  },

  actions: {
    addItems(count: number, item: CartItem): void {
      count = parseInt(count.toString()); // Assuming count is a string

      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
  },
});
