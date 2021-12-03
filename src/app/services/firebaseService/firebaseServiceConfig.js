const prodConfig = {
  apiKey: "AIzaSyCc2ixlRQy4-4bHQFcn6Agcg3qkYdVQYj0",
  authDomain: "electronic-invoice-be108.firebaseapp.com",
  projectId: "electronic-invoice-be108",
  storageBucket: "electronic-invoice-be108.appspot.com",
  messagingSenderId: "196448786001",
  appId: "1:196448786001:web:b9691b61159fb3d9d40a70",
  measurementId: "G-E0J1HS6T5K"
};

const devConfig = {
  apiKey: "AIzaSyCc2ixlRQy4-4bHQFcn6Agcg3qkYdVQYj0",
  authDomain: "electronic-invoice-be108.firebaseapp.com",
  projectId: "electronic-invoice-be108",
  storageBucket: "electronic-invoice-be108.appspot.com",
  messagingSenderId: "196448786001",
  appId: "1:196448786001:web:b9691b61159fb3d9d40a70",
  measurementId: "G-E0J1HS6T5K"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
