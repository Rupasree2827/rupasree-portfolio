function Navbar() {
  return (
    <nav
      style={{
        background:"#0b1120",
        color:"white",
        padding:"22px 60px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        borderBottom:"1px solid #7e22ce"
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
          gap:"30px",
          fontSize:"18px"
        }}
      >

        <p style={{cursor:"pointer",transition:"0.3s"}}>About</p>

        <p style={{cursor:"pointer",transition:"0.3s"}}>Skills</p>

        <p style={{cursor:"pointer",transition:"0.3s"}}>Projects</p>

        <p style={{cursor:"pointer",transition:"0.3s"}}>Contact</p>

      </div>

    </nav>
  )
}

export default Navbar