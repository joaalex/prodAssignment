const Input = ({value, placeholder, onChange, name, id, type})=>{
  return(
    <>
      <input value={value} className="form-control p-3" placeholder={placeholder} onChange={onChange} name={name} id={id} type={type}  />
    </>
  )
}
export default Input;