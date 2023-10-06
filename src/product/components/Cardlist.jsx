import Card from "./Card";

const Cardlist = ({product, showLoad})=>{


  return(
    <>

          <div className="row p-3 gap-3 text-center">
            {
              product.map((item,index)=>{
                return(
                  <>
                    
                      <Card keyi={index} imgScr={item.image} title={item.title} price={item.price} desc={item.description}  cate={item.category} rate="" />
                
                  
                  
                  </>
                )
              })
            }
            
          </div>

      {/* {product.length === 0 ? (
        <h1 style={{textAlign:"center", fontSize:"3rem", marginTop:"2rem"}}>Loading ...</h1>) : (
          <div className="row p-3 gap-3 text-center">
            {
              product.map((item,index)=>{
                return(
                  <>
                    
                      <Card keyi={index} imgScr={item.image} title={item.title} price={item.price} desc={item.description}  cate={item.category} rate="" />
                
                  
                  
                  </>
                )
              })
            }
            
          </div>
        )
      } */}
    
  </>
  )
};

export default Cardlist