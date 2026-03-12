import React from 'react'
import Card from './Components/Card'
import ProductCard from './Components/ProductCard';

const App = () => {
  //   const data = [
  //   {
  //     "photo": "https://healthmylifestyle.com/wp-content/uploads/2023/01/Fresh-squeezed-orange-juice-featured-500x500.jpg",
  //     "juice_name": "Orange Juice",
  //     "ingredients": ["Fresh Oranges", "Sugar", "Ice", "Water"],
  //     "price": 80
  //   },
  //   {
  //     "photo": "https://media.istockphoto.com/id/904617420/photo/fresh-mango-smoothie-in-the-glass.jpg?s=612x612&w=0&k=20&c=ogIRn5AfahJNU4W8UmQIZ-mJqL9tgOm9yH_-5WJmkSQ=",
  //     "juice_name": "Mango Juice",
  //     "ingredients": ["Mango Pulp", "Milk", "Sugar", "Ice"],
  //     "price": 100
  //   },
  //   {
  //     "photo": "https://tandobeverage.com/wp-content/uploads/apple-juice.jpg",
  //     "juice_name": "Apple Juice",
  //     "ingredients": ["Fresh Apples", "Water", "Sugar", "Ice"],
  //     "price": 90
  //   },
  //   {
  //     "photo": "https://www.africanbites.com/wp-content/uploads/2019/08/IMG_6493.jpg",
  //     "juice_name": "Pineapple Juice",
  //     "ingredients": ["Pineapple", "Sugar Syrup", "Ice"],
  //     "price": 85
  //   },
  //   {
  //     "photo": "https://thedizzycook.com/wp-content/uploads/2025/07/Watermelon-Juice-Main-2-500x500.jpg",
  //     "juice_name": "Watermelon Juice",
  //     "ingredients": ["Watermelon", "Mint Leaves", "Ice"],
  //     "price": 70
  //   },
  //   {
  //     "photo": "https://www.theblackpeppercorn.com/wp-content/uploads/2014/05/Strawberry-Pineapple-Juice-2-334x330.jpg",
  //     "juice_name": "Strawberry Juice",
  //     "ingredients": ["Strawberries", "Sugar", "Milk", "Ice"],
  //     "price": 110
  //   },
  //   {
  //     "photo": "https://vaya.in/recipes/wp-content/uploads/2018/02/Black-Grape-Juice.jpg",
  //     "juice_name": "Grape Juice",
  //     "ingredients": ["Black Grapes", "Sugar", "Water"],
  //     "price": 95
  //   },
  //   {
  //     "photo": "https://img.freepik.com/free-photo/front-view-pomegranates-with-glass-juice-red-straw-wooden-wall_141793-79542.jpg?semt=ais_wordcount_boost&w=740&q=80",
  //     "juice_name": "Pomegranate Juice",
  //     "ingredients": ["Pomegranate Seeds", "Water", "Ice"],
  //     "price": 120
  //   },
  //   {
  //     "photo": "https://i.pinimg.com/736x/05/8f/c9/058fc9b005768b24e9fe4767a7a1d232.jpg",
  //     "juice_name": "Kiwi Juice",
  //     "ingredients": ["Kiwi", "Honey", "Ice"],
  //     "price": 130
  //   },
  //   {
  //     "photo": "https://static.vecteezy.com/system/resources/thumbnails/019/569/428/small/set-of-tropical-fruits-colorful-and-fresh-summer-juice-glass-healthy-foods-free-photo.jpg",
  //     "juice_name": "Mixed Fruit Juice",
  //     "ingredients": ["Apple", "Banana", "Mango", "Orange", "Sugar"],
  //     "price": 140
  //   }
  // ];

  const product = [
  
  {
    "id": 1,
    "photo": "https://i.pinimg.com/736x/4e/a5/c8/4ea5c8c480625906a692bafa65ba7aad.jpg",
    "product_name": "Wireless Headphones",
    "price": "$59.99",
    "tagline": "Feel the music without limits",
    "details": "High quality wireless headphones with noise cancellation and 20 hours battery life."
  },
  {
    "id": 2,
    "photo": "https://i.pinimg.com/1200x/7b/8f/c2/7b8fc2879d842503cac1de15f9a1baf6.jpg",
    "product_name": "Smart Watch",
    "price": "$89.99",
    "tagline": "Your health on your wrist",
    "details": "Track fitness, heart rate, and notifications with this stylish smart watch."
  },
  {
    "id": 3,
    "photo": "https://i.pinimg.com/736x/64/14/99/64149999d340b2b1ee0b7e802c936f29.jpg",
    "product_name": "Bluetooth Speaker",
    "price": "$39.99",
    "tagline": "Powerful sound anywhere",
    "details": "Portable speaker with deep bass, waterproof design, and 12 hours playback."
  },
  {
    "id": 4,
    "photo": "https://i.pinimg.com/736x/2c/be/91/2cbe91cdfc5e91dd99e5abefb2303324.jpg",
    "product_name": "Gaming Mouse",
    "price": "$29.99",
    "tagline": "Precision for gamers",
    "details": "Ergonomic gaming mouse with RGB lighting and adjustable DPI settings."
  },
  {
    "id": 5,
    "photo": "https://i.pinimg.com/736x/81/ee/c0/81eec011a9ae7951411e0998be66d787.jpg",
    "product_name": "Mechanical Keyboard",
    "price": "$79.99",
    "tagline": "Type like a pro",
    "details": "Durable mechanical keyboard with backlit keys and fast response switches."
  },
  {
    "id": 6,
    "photo": "https://i.pinimg.com/1200x/e3/5d/86/e35d8684a57949d6528f6850241be694.jpg",
    "product_name": "Laptop Stand",
    "price": "$24.99",
    "tagline": "Work comfortably anywhere",
    "details": "Adjustable aluminum laptop stand designed for better posture and cooling."
  },
  {
    "id": 7,
    "photo": "https://i.pinimg.com/1200x/4f/d8/58/4fd858a37dcf69b3934c6d09602f1d61.jpg",
    "product_name": "Wireless Charger",
    "price": "$19.99",
    "tagline": "Charge without cables",
    "details": "Fast wireless charging pad compatible with all Qi-enabled smartphones."
  },
  {
    "id": 8,
    "photo": "https://i.pinimg.com/1200x/e2/2c/81/e22c81b5eed5e3e4cfaf01622284b33e.jpg",
    "product_name": "HD Webcam",
    "price": "$49.99",
    "tagline": "Crystal clear video calls",
    "details": "1080p webcam with built-in microphone ideal for meetings and streaming."
  },
  {
    "id": 9,
    "photo": "https://i.pinimg.com/1200x/d5/d6/10/d5d6101ade71d95ae14a3bafa3489d3f.jpg",
    "product_name": "Portable SSD",
    "price": "$99.99",
    "tagline": "Speed meets portability",
    "details": "Ultra-fast external SSD with 1TB storage and compact design."
  },
  {
    "id": 10,
    "photo": "https://i.pinimg.com/736x/8c/ec/cb/8ceccb694c6e77a102d12c808a887479.jpg",
    "product_name": "LED Desk Lamp",
    "price": "$34.99",
    "tagline": "Light up your workspace",
    "details": "Energy-efficient LED desk lamp with touch control and adjustable brightness."
  }
];

  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px8 py-4 justify-center items-center">
        

        {data.map(function(juice) {
          console.log(juice);

          return <Card data={juice} />
        })}
        </section> */}
      <section className='flex items-center flex-wrap py-4 px-6 gap-15'>
        {product.map(function (data) {
          return <ProductCard data={data} />;
        })}
      </section>
    </>
  );
};

export default App;
