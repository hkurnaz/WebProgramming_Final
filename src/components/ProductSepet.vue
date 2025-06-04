<template>
  <v-container style="display: flex; justify-content: center">
    <v-col>
      <div
        style="
          border: 1px solid #dee3ed;
          width: 780px;
          height: 200px;
          border-radius: 10px;
          position: relative; /* Added position relative */
        "
      >
        <v-container>
          <div style="display: flex">
            <v-col style="margin-top: 35px; margin-left: 10px">
              <img src="photo/philips1.png" width="85" height="90" />
            </v-col>
            <v-col style="margin-top: 35px; margin-left: 15px">
              <div style="width: 167px; font-weight: bold">
                Philips XB7150/07 Marathon Daily 900W Toz Torbasız Elektrikli
                Süpürge
              </div>
            </v-col>
            <v-col style="margin-top: 35px; margin-left: 35px">
              <div style="display: grid; color: #8ea6c7; font-size: 16px">
                <div>Birim Fiyat</div>
                <div>7179TL</div>
              </div>
            </v-col>
            <v-col style="margin-top: 35px; margin-left: 100px">
              <div
                style="display: grid; color: black; width: 100px"
                align="center"
              >
                <div>Adet</div>
                <v-row>
                  <v-btn
                    @click="updateQuantity(-1)"
                    outlined
                    class="quantity-btn"
                    style="max-width: 40px; max-height: 40px; font-size: 20px"
                  >
                    -
                  </v-btn>
                  <input
                    v-model.number="adet"
                    type="number"
                    filled
                    style="
                      max-width: 60px;
                      max-height: 40px;
                      background-color: white;
                      text-align: center;
                      font-size: 16px;
                    "
                  />
                  <v-btn
                    @click="updateQuantity(1)"
                    outlined
                    class="quantity-btn"
                    style="max-width: 40px; max-height: 40px; font-size: 20px"
                  >
                    +
                  </v-btn>
                </v-row>
              </div>
            </v-col>
            <v-col style="margin-top: 35px; margin-left: 80px">
              <div style="display: grid; font-size: 16px">
                <div>Tutar</div>
                <div>{{ toplamTutar }}TL</div>
              </div>
            </v-col>

            <!-- X Sign Button -->
            <v-btn icon class="x-sign-btn" @click="closeOrderSummary">
              <v-icon>x</v-icon>
            </v-btn>
          </div>
        </v-container>
      </div>
    </v-col>
    <v-col>
      <div
        style="
          border: 1px solid #dee3ed;
          width: 380px;
          height: 120px;
          margin-left: 25px;
          border-radius: 10px;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          background-color: #f5f7f9;
        "
      >
        <div style="display: flex; margin-top: 30px; margin-left: 20px">
          <div style="font-size: 18px; color: #253342; font-weight: bold">
            Sipariş Özeti
          </div>
          <div
            style="
              font-size: 15px;
              color: #253342;
              margin-left: 5px;
              margin-top: 3px;
            "
          >
            ({{ adet }} Ürün)
          </div>
        </div>
        <div style="display: flex; margin-top: 20px; margin-left: 20px">
          <div style="color: #253342">Ürünler Toplamı</div>
          <div
            style="
              color: #253342;
              font-size: 18px;
              margin-left: 180px;
              font-weight: bold;
            "
          >
            {{ toplamTutar }}TL
          </div>
        </div>
      </div>
      <div
        style="
          border: 1px solid #dee3ed;
          width: 380px;
          height: 280px;
          margin-left: 25px;
          border-radius: 10px;
          border-top-right-radius: 0px;
          border-top-left-radius: 0px;
          background-color: #f5f7f9;
        "
      >
        <div style="margin-top: 20px; margin-left: 20px">
          <div style="display: flex">
            <div style="color: #253342">Ürünler Toplamı</div>
            <div style="color: #253342; margin-left: 180px; font-weight: bold">
              Ücretsiz
            </div>
          </div>
          <div style="display: flex; margin-top: 10px">
            <div style="color: #253342">Ödenecek Tutar (KDV Dahil)</div>
            <div style="color: #253342; margin-left: 105px; font-weight: bold">
              {{ toplamTutar }}TL
            </div>
          </div>
          <div>
            <div
              block
              style="
                background: #2855ac;
                color: white;
                border-radius: 10px;
                height: 50px;
                width: 340px;
                display: flex;
                margin-top: 30px;
              "
            >
              <div
                style="padding-top: 15px; padding-left: 20px; font-size: 18px"
              >
                İndirim Kodu Ekle
              </div>
              <div
                style="
                  background-color: white;
                  border-radius: 70px;
                  color: black;
                  width: 30px;
                  height: 30px;
                  padding-top: -30px;
                  justify-content: center;
                  font-size: 20px;
                  margin-left: 130px;
                  margin-top: 10px;
                "
                align="center"
              >
                +
              </div>
            </div>
          </div>
          <div style="display: flex; margin-top: 40px">
            <div style="margin-top: -10px">
              <q-checkbox v-model="val" />
            </div>
            <div style="color: #253342; margin-left: 10px; font-weight: bold">
              Kullanıcı sözleşmesini
            </div>
            <div style="margin-left: 5px">okudum, onaylıyorum.</div>
          </div>
          <div>
            <q-btn
              block
              style="
                background: #ffc900;
                color: rgb(0, 0, 0);
                border-radius: 20px;
                width: 340px;
              "
              label="Siparişe devam et"
            ></q-btn>
          </div>
        </div>
      </div>
    </v-col>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
const val = ref(false);
const adet = ref(1); // Initial quantity value
const birimFiyat = 7179; // Replace this with your actual unit price

// Computed property to calculate the total amount
const toplamTutar = computed(() => adet.value * birimFiyat);

// Method to update quantity
const updateQuantity = (amount) => {
  adet.value = Math.max(0, adet.value + amount);
};

// Method to close the order summary
const closeOrderSummary = () => {
  // Add your logic to close the order summary
};
</script>

<style scoped>
.quantity-btn {
  transition: background-color 0.3s, color 0.3s;
  user-select: none; /* Disable text selection */
}

.quantity-btn:hover {
  background-color: #e1e1e1;
  color: #000;
}

/* Style for the 'X' sign button */
.x-sign-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #000;
  font-size: 20px;
  transition: color 0.3s;
}

.x-sign-btn:hover {
  color: #e1e1e1;
}
</style>
