<template>
  <div
    style="background-color: #cedbfa; justify-content: center; height: 100vh"
    align="middle"
  >
    <router-link to="/login"
      ><div style="padding-top: 20px; margin-left: -600px">
        <img src="photo/arrow.png" style="width: 50px; height: 50px" /></div
    ></router-link>

    <div
      style="
        background-color: white;
        border-radius: 20px;
        height: 770px;
        width: 640px;
      "
    >
      <div>
        <div
          style="
            display: flex;
            margin-top: 20px;
            padding-top: 20px;
            justify-content: center;
          "
        >
          <div><img src="photo/login.png" /></div>
          <div style="font-size: 20px; font-weight: bold">Hızlı</div>
          <div style="font-size: 20px">Giriş</div>
        </div>
        <div style="font-size: 15px; font-weight: bold; color: black">
          Devam edebilmek için kayıt olmanız gerekmektedir.
        </div>
        <div>
          <q-input
            type="text"
            v-model="cepno"
            placeholder="Cep Telefon Numarası"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 600px;
              height: 50px;
              margin-top: 10px;
            "
          />
        </div>
        <div>
          <q-input
            v-model="email"
            type="text"
            placeholder="E-posta"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 600px;
              height: 50px;
              margin-top: 20px;
            "
          />
        </div>
        <div>
          <q-input
            v-model="password"
            type="text"
            placeholder="Hızlı Giriş Şifresi"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 600px;
              height: 50px;
              margin-top: 20px;
            "
          />
        </div>
        <div style="font-size: 11px; width: 500px; margin-top: 10px">
          Şifreniz en az 6 karakterden oluşmalıdır. Ardışık ve tekrarlı olmayan
          en az bir rakam, bir büyük harf ve bir küçük harf içermelidir.
        </div>
        <div>
          <q-input
            type="text"
            placeholder="Hızlı Giriş Şifresi Tekrar"
            style="
              outline: none;
              width: 100%;
              border-radius: 5px;
              border: 1px solid grey;
              width: 600px;
              height: 50px;
              margin-top: 20px;
            "
          />
        </div>
        <div
          style="
            display: flex;
            justify-content: center;
            margin-left: -300px;
            margin-top: 270px;
          "
        >
          <div>
            <q-checkbox v-model="val" />
          </div>
          <div style="margin-top: 10px">Katılım Koşullarını onaylıyorum.</div>
        </div>
        <div>
          <q-btn
            block
            style="
              background: #2855ac;
              color: white;
              border-radius: 20px;
              width: 500px;
              height: 45px;
              margin-top: 10px;
            "
            label="Kayıt Ol"
            @click="signup"
          ></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useKayitStore } from 'src/stores/KayitStore';

const val = ref(false);
const cepno = ref('');
const email = ref('');
const password = ref('');

const kayitStore = useKayitStore();

const signup = async () => {
  try {
    const payload = {
      cepno: cepno.value,
      email: email.value,
      password: password.value,
    };

    // İlgili satır ekleniyor
    console.log('Signup form values:', payload);

    await kayitStore.signup(payload);
    console.log("Veri Firestore'a eklendi:", payload);
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata:', error);
  }

  return {
    email,
    password,
    cepno,
    signup,
  };
};
</script>
