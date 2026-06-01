function Navbar() {
  return (
    <nav
     style={{
  background:"rgba(11,17,32,0.65)",
  color:"white",

  padding:"18px 50px",

  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",

  border:"1px solid rgba(126,34,206,0.35)",

  position:"sticky",
  top:"18px",

  width:"92%",
  margin:"auto",

  borderRadius:"20px",

  backdropFilter:"blur(18px)",

  boxShadow:"0px 8px 35px rgba(168,85,247,0.18)",

  zIndex:"1000"
}}
    >

      <h2
        style={{
          color:"#a855f7",
          fontSize:"28px",
          fontWeight:"bold"
        }}
      >
        Pothurai Rupasree
      </h2>

      <div
        style={{
          display:"flex",
          gap:"40px",
          fontSize:"18px"
        }}
      >

<a
  href="#about"
  style={{
    color:"white",
    textDecoration:"none",
    cursor:"pointer",
    transition:"0.3s ease",
    fontWeight:"600"
  }}
>
  About
</a>
<a
  href="#education"
  style={{
    color:"white",
    textDecoration:"none",
    cursor:"pointer",
    transition:"0.3s ease",
    fontWeight:"600"
  }}
>
  Education
</a>

<a
  href="#skills"
  style={{
    color:"white",
    textDecoration:"none",
    cursor:"pointer",
    transition:"0.3s ease",
    fontWeight:"600"
  }}
>
  Skills
</a>

<a
  href="#projects"
  style={{
    color:"white",
    textDecoration:"none",
    cursor:"pointer",
    transition:"0.3s ease",
    fontWeight:"600"
  }}
>
  Projects
</a>

<a
  href="#contact"
  style={{
    color:"white",
    textDecoration:"none",
    cursor:"pointer",
    transition:"0.3s ease",
    fontWeight:"600"
  }}
>
  Contact
</a>

      </div>

    </nav>
  )
}

export default Navbar