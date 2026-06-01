import { motion } from "framer-motion";

function About() {

  return (

    <motion.section
    id="about"
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true}}

      style={{
        padding:"90px 60px"
      }}
    >

      <h2
        style={{
          color:"#a855f7",
          fontSize:"48px",
          textAlign:"center",
          marginBottom:"55px"
        }}
      >
        About Me
      </h2>

      <div
        style={{
          maxWidth:"1000px",
          margin:"auto",
          background:"#0b1120",
          padding:"45px",
          borderRadius:"24px",
          border:"1px solid #7e22ce",
          boxShadow:"0px 0px 30px rgba(168,85,247,0.35)"
        }}
      >

        <p
          style={{
            color:"#d1d5db",
            fontSize:"22px",
            lineHeight:"2"
          }}
        >

          I am <span style={{color:"#38bdf8"}}>Pothurai Rupasree</span>,
          a passionate B.Tech Computer Science graduate interested in
          Full Stack Development, Artificial Intelligence,
          Machine Learning, and building impactful digital experiences.

          I enjoy creating modern user interfaces,
          solving technical problems,
          and continuously learning emerging technologies.

        </p>

      </div>

    </motion.section>

  )
}

export default About;