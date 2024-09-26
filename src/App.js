import React from 'react';
import Header from './components/Header';
import Footer from './components/Banner';
import ProductList from './components/Productcard';
import './App.css';

// Arrays for each category with image URLs
const electronics = [
  {
    id: 1,
    name: 'Headphones',
    price: '₹1999',
    discount: '20%',
    image: 'https://png.pngtree.com/png-clipart/20230508/original/pngtree-airpods-png-image_9149137.png',
  },
  {
    id: 1,
    name: 'MSI-Monitor',
    price: '₹9999',
    discount: '10%',
    image: 'https://asset.msi.com/resize/image/global/product/product_165908362745924f11db962380b35882c67b17a9ea.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
  },
  {
    id: 2,
    name: 'Sony Mini Speaker',
    price: '₹3999',
    discount: '10%',
    image: 'https://pngimg.com/d/wireless_speaker_PNG28.png',
  },
  {
    id: 2,
    name: 'Cannon Printer',
    price: '₹10999',
    discount: '10%',
    image: 'https://in.canon/media/image/2019/07/04/dadf604da4174ea98102db0398ca4ea8_TS33XX_AS_FR_op_blk_en-362.png',
  },
  {
    id: 2,
    name: 'Philips Trimmer',
    price: '₹9999',
    discount: '10%',
    image: 'https://pngfile.net/public/uploads/preview/philips-trimmer-png-free-download-21567005923agvgtgzckv.png',
  },
];

const costumes = [
  {
    id: 1,
    name: 'Formal shirt',
    price: '₹549',
    discount: '30%',
    image: 'https://pngimg.com/d/dress_shirt_PNG8110.png',
  },
  {
    id: 2,
    name: 'T-shirt',
    price: '₹299',
    discount: '25%',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/041/714/543/small_2x/ai-generated-black-blank-t-shirt-front-mockup-on-a-transparent-background-png.png',
  },
  {
    id: 2,
    name: 'Black Phant',
    price: '₹349',
    discount: '25%',
    image: 'https://w7.pngwing.com/pngs/345/948/png-transparent-black-white-trousers-pants-suit-white-men-suit-black-thumbnail.png',
  },
  {
    id: 2,
    name: 'Coat',
    price: '₹799',
    discount: '25%',
    image: 'https://www.freeiconspng.com/thumbs/men-suit-png/men-suit-png-11.png',
  },
  {
    id: 2,
    name: 'Hoodie',
    price: '₹499',
    discount: '25%',
    image: 'https://png.pngtree.com/png-vector/20240402/ourmid/pngtree-blank-black-male-hoodie-sweatshirt-long-sleeve-with-clipping-path-mens-png-image_12258589.png',
  },
];

const mobileGadgets = [
  {
    id: 1,
    name: 'Samsung m35',
    price: '₹15999',
    discount: '15%',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-m356bzadins/gallery/in-galaxy-m-sm-m356bzadins-sm-m---bzabins-thumb-542710646?$360_360_PNG$',
  },
  {
    id: 2,
    name: 'Iphone-16',
    price: '₹100099',
    discount: '10%',
    image: 'https://gadgets.beebom.com/wp-content/uploads/2024/02/iPhone-16-Plus.png',
  },
  {
    id: 2,
    name: 'Nothing-2a',
    price: '₹32999',
    discount: '10%',
    image: 'https://in.nothing.tech/cdn/shop/files/black-1_5b4e0c5a-5a57-4b9b-ac03-dd37b413bac2_750x.png?v=1716967374',
  },
];

const furniture = [
  {
    id: 1,
    name: 'Sofa Set',
    price: '₹24999',
    discount: '20%',
    image: 'https://static.vecteezy.com/system/resources/previews/019/634/931/original/living-room-with-yellow-sofa-and-dried-plants-png.png',
  },
  {
    id: 2,
    name: 'Dining Table',
    price: '₹9999',
    discount: '15%',
    image: 'https://png.pngtree.com/png-clipart/20231129/original/pngtree-dining-table-and-chairs-isolated-dining-table-photo-png-image_13735733.png',
  },
  {
    id: 2,
    name: 'Laptop-table',
    price: '₹5999',
    discount: '15%',
    image: 'https://www.sebelfurniture.com/media/media/sebel/products/variants/c%20shaped%20laptop%20table/c-shaped-laptop-table-tasmanian-oak.png?ext=.png',
  },
];

const stationeries = [
  {
    id: 1,
    name: 'Notebook',
    price: '₹199',
    discount: '10%',
    image: 'https://static.vecteezy.com/system/resources/previews/020/693/387/original/notebooks-school-free-png.png',
  },
  {
    id: 2,
    name: 'Pen Set',
    price: '₹99',
    discount: '5%',
    image: 'https://png.pngtree.com/png-vector/20231215/ourmid/pngtree-business-pen-set-png-image_11358249.png',
  },
  {
    id: 2,
    name: 'Exam-pad',
    price: '₹99',
    discount: '5%',
    image: 'https://soniofficemate.com/wp-content/uploads/2022/09/product.png',
  }
];

function App() {
  return (
    <div className="App">
      <Header />

      {/* Banner */}
      <div className="banner">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1d05f668d8fa6636.jpg?q=20" alt="Sale Banner" />
      </div>

      {/* Rendering different categories */}
      <div className="category-section">
        <h2>Best of Electronics</h2>
        <div className="product-section">
          {electronics.map((electronic) => (
            <ProductList
              key={electronic.id}
              name={electronic.name}
              price={electronic.price}
              discount={electronic.discount}
              image={electronic.image}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Best of Costumes</h2>
        <div className="product-section">
          {costumes.map((costume) => (
            <ProductList
              key={costume.id}
              name={costume.name}
              price={costume.price}
              discount={costume.discount}
              image={costume.image}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Best of Mobile Gadgets</h2>
        <div className="product-section">
          {mobileGadgets.map((gadget) => (
            <ProductList
              key={gadget.id}
              name={gadget.name}
              price={gadget.price}
              discount={gadget.discount}
              image={gadget.image}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Best of Furniture</h2>
        <div className="product-section">
          {furniture.map((furn) => (
            <ProductList
              key={furn.id}
              name={furn.name}
              price={furn.price}
              discount={furn.discount}
              image={furn.image}
            />
          ))}
        </div>
      </div>

      <div className="category-section">
        <h2>Best of Stationeries</h2>
        <div className="product-section">
          {stationeries.map((stationery) => (
            <ProductList
              key={stationery.id}
              name={stationery.name}
              price={stationery.price}
              discount={stationery.discount}
              image={stationery.image}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
