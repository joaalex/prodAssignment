const Label = ({htmlFor, labelText})=>{
  return(
    <>
    <label htmlFor={htmlFor} className="form-label p-1 fs-2 text-primary">{labelText}</label>
    </>
  )
};
export default Label;