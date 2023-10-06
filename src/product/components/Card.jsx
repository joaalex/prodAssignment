const Card = ({keyi, imgScr, title, price, desc, cate, rate})=>{
  return(
      < >
        <div className="card mx-5 col-3 mt-5 p-4  " style={{boxShadow: "1px 1px 5px #aeacac"}}>
          <div className="text-center ">
            <img className="card-img-top img-fluid w-50 img-thumbnail" src={imgScr} alt="" />
          </div>

          <div key={keyi} className="card-body text-start p-2 mt-3">
            <h5  style={{fontWeight:"900", }}className="card-title">Title : <span style={{fontSize:"1.2rem", fontWeight:"500"}}>{title}</span></h5>


            <h5 style={{fontWeight:"900"}}>Price : <span style={{fontSize:"1rem", fontWeight:"lighter"}}>${price}</span></h5>

            <h5  style={{fontWeight:"900"}}className="card-text">Description : <span style={{fontSize:"1rem", fontWeight:"lighter"}}>{desc}</span></h5>

            <h5 style={{fontWeight:"900",}}>Category : <span style={{fontWeight:"lighter"}}>{cate}</span></h5>

            <h5 style={{fontWeight:"900", }}>Rating :<span style={{fontWeight:"lighter"}}>{rate}</span></h5>
          </div>
          
        </div>
      </>
  )
}
export default Card;


