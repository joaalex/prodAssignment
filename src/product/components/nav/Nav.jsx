import "./Nav.css"

const Nav = ({product})=>{
  return (
    <>
      <nav style={{position:"relative"}} className="nav-div"> 
        <h1 className="h1-nav">Baranda</h1>
        <ul  className="ul-nav">
          <li>Set Todo</li>
          <li>What to do</li>
          <li>Time to do</li>
          <li>Cart</li>
          <span style={{  position:"absolute", right:"1.4rem", top:"0.8rem", borderRadius:"50%", backgroundColor:"green", textAlign:"center", color:"white", fontSize:12, padding:".25rem .49rem"}}></span>
        </ul>
      </nav>
    </>
  )
}
export default Nav;