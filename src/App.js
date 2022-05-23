
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from "./components/Footer";
import React ,{useState} from 'react';
import AddItem from './components/AddItem';

function App() {
 
  const products = [
   {
     price : 15999,
     name : "SAMSUNG M30s",
     quantity : 0,
     launch : 2018
   },
   {
    price : 24999,
    name : "ONEPLUS G30",
    quantity : 0,
    launch : 2019
  },{
    price : 12999,
    name : "REALME M21",
    quantity : 0,
    launch : 2020
  },{
    price : 14999,
    name : "XIOMI M24s",
    quantity : 0,
    launch : 2021
  },{
    price : 21900,
    name : "ONEPLUS G30",
    quantity : 0,
    launch : 2019
  }
  ];
   let [productList ,setProductList] = useState(products);
   let [totalAmount , setTotalAmount] =useState(0);


   const incrementQuantity =(index)=>{
    let newProductList = [...productList];
    newProductList[index].quantity++;
   let newTotalAmount = totalAmount;
   newTotalAmount +=  newProductList[index].price
   setTotalAmount(newTotalAmount);
    setProductList(newProductList);

  };

  const decrementQuantity =(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
   if(newProductList[index].quantity > 0) {
    newProductList[index].quantity-- ;
    newTotalAmount -=  newProductList[index].price
   }else{
    newProductList[index].quantity = 0;
   } 
   setTotalAmount(newTotalAmount);
    setProductList(newProductList);

  };
   const resetData = ()=>{
       let newProductList = [...productList];
        newProductList.map((products)=>{
          products.quantity = 0
        })
        setProductList(newProductList);
        setTotalAmount(0)
   }
   const removeItem =(index)=>{
    let newProductList = [...productList];
    newProductList.splice(index,1);
    setProductList(newProductList);
    let newTotalAmount = totalAmount;
    newTotalAmount-= newProductList[index].quantity * newProductList[index].price;
    setTotalAmount(newTotalAmount)


   }

   const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  
  return (
   <>
   <Navbar/> 
   <main className='container mt-5 '>
     <AddItem addItem ={addItem}/>
     <ProductList productList = {productList} incrementQuantity ={incrementQuantity} decrementQuantity ={decrementQuantity} removeItem={removeItem}/></main>
   
   
   <Footer totalAmount={totalAmount} resetData ={resetData}/>
   </>
  );
}

export default App;
