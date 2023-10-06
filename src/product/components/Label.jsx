const Label = ({htmlFor, labelText})=>{
  return(
    <>
    <label htmlFor={htmlFor} className="form-label p-1 text-primary">{labelText}</label>
    </>
  )
};
export default Label;