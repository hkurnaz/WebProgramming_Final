import { defineStore } from 'pinia';
import { db } from 'src/boot/firebase';
import { addDoc, collection, getDocs, DocumentData } from 'firebase/firestore';

interface User {
  cepno: string;
  email: string;
  password: string;
}

export const useKayitStore = defineStore({
  id: 'KayitStore',
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async signup(payload: User) {
      try {
        const collectionName = 'users';

        const collectionRef = collection(db, collectionName);
        const collectionSnapshot = await getDocs(collectionRef);

        if (collectionSnapshot.empty) {
          console.log('Koleksiyon yok, yeni koleksiyon oluşturuluyor...');
          await addDoc(collectionRef, {});
        }

        const docRef = await addDoc(collection(db, collectionName), payload);
        this.setUser(payload);
        console.log('Document added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    async getData(): Promise<DocumentData[]> {
      try {
        const collectionName = 'users';

        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log('Data retrieved successfully: ', data);
        return data;
      } catch (error) {
        console.error('Error getting documents: ', error);
        return [];
      }
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
