const Button = ({onClick, type, btnValue})=>{
  return(
    <>
      <button className="btn btn-success px-4  mt-4 me-5" onClick={onClick} type={type} >{btnValue}</button>
    </>
  
  )
};

export default Button;