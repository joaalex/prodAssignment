import Button from "./components/Button";
import Cardlist from "./components/Cardlist";
import Input from "./components/Input";
import Label from "./components/Label";
import {useState, useEffect } from 'react';

const Index = ()=>{

  const [search, setSearch] = useState('')
  const [product, setProducts] = useState([])

  const [showLoad, setShowLoad] = useState(false)

  const prevent = (e)=>{
    e.preventDefault();
  }

  const handleChange = (e)=>{
    setSearch(e.target.value.toLowerCase());
    // product.filter((prod)=>{
    //   return prod.category.toLowerCase().includes(search)
    // });

    
  }

  const searchHandleClick = (e)=>{


    const input = search.toLowerCase()
    fetch(`https://fakestoreapi.com/products/category/${input}`)
    .then((res) => res.json())
    .then((prod) => {
      setShowLoad(true);
      setProducts(prod);  })

    setSearch("")
  }

  const searchAllHandleClick = (e)=>{

    fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((prod) => {setProducts(prod)})
  }

  

  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products/category/electronics")
  //   .then((res) => res.json())
  //   .then((prod) => {setProducts(prod)})

  // }, [])




  return(
    <>
      <div className="container" >

      <form className="w-50  m-auto mt-5 " onSubmit={prevent}>
        <Label htmlFor="search" labelText="Find Products"  />
        <Input placeholder="Search Category" value={search} name="search" id="search" onChange={handleChange} type="search"/>
        <div className="">
          <Button type="button" onClick={searchHandleClick} btnValue="Search"/>
          <Button type="button" onClick={searchAllHandleClick} btnValue="Show All Products"/>
        </div>
      </form>
      <div>
        {/* <Card imgSc="" title="" price="" desc="" cate="" rate="" /> */}
        <Cardlist showLoad={showLoad} product={product}/>
      </div>
      </div>
    </>
  )
};

export default Index;