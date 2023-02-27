import "./App.css";
import Navbar from "./Components/NavBar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import AddProduct from "./Components/AddProduct";
import Alert from "./Components/Alert";
import React, { useState, useEffect } from "react";

function App() {
  const Products = [
    {
      Name: "Redmi",
      Price: 5000,
      Quantity: 0,
    },
    {
      Name: "Iphone",
      Price: 2000,
      Quantity: 0,
    },
    {
      Name: "One Plus",
      Price: 1000,
      Quantity: 0,
    },
  ];
  let [Popup, setPopup] = useState(null);

  let [productList, setproductList] = useState(() => {
    const productList = JSON.parse(localStorage.getItem("items"));
    if (productList) {
      return productList;
    } else {
      return Products;
    }
  });
  useEffect(() => {
    //Store Our Data on LocalStorage of ProductList
    localStorage.setItem("items", JSON.stringify(productList));
  }, [productList]);

  let [totalAmount, setTotalAmount] = useState(() => {
    const totalAmount = JSON.parse(localStorage.getItem("amount"));
    if (totalAmount) {
      return totalAmount;
    } else {
      return 0;
    }
  });
  useEffect(() => {
    localStorage.setItem("amount", JSON.stringify(totalAmount));
  }, [totalAmount]);

  //On Click Incriment Quantity
  const incrimentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].Quantity++; 
    newTotalAmount += newProductList[index].Price;
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  //On Click Decrement Quantity
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].Quantity !== 0) {
      newTotalAmount -= newProductList[index].Price;
      newProductList[index].Quantity--;
    }
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  //On Click Reset Quantity
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((element) => {
      element.Quantity = 0;
      return element;
    });
    setproductList(newProductList);
    setTotalAmount(0);
  };

  //On Click Remove Delete product
  let deleteProduct = (index) => {
    let newTotalAmount = totalAmount; //Get total Amount
    let newProductList = [...productList];
    newTotalAmount -=
      newProductList[index].Price * newProductList[index].Quantity; //Subtract from total Amount Quantity*Prise of index
    newProductList.splice(index, 1);
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const AddProductInList = (obj) => {
    let newProductList = [...productList];
    newProductList.push(obj);
    setproductList(newProductList);
  };
  setTimeout(() => {
    setPopup(null);
  }, 2000);
  return (
    <React.Fragment>
      <Navbar />
      <Alert Popup={Popup} />
      <main className="container my-5">
        <AddProduct AddProductInList={AddProductInList} Popup={setPopup} />

        <div className="my-5">
          <ProductList
            Products={productList}
            decrementQuantity={decrementQuantity}
            incrimentQuantity={incrimentQuantity}
            deleteProduct={deleteProduct}
          />
        </div>
      </main>
      <Footer resetQuantity={resetQuantity} totalAmount={totalAmount} />
    </React.Fragment>
  );
}

export default App;
