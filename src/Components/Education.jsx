import { motion } from "framer-motion";

function Education() {

  return (

    <motion.section
      id="education"

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
          marginBottom:"60px"
        }}
      >

        Education

      </h2>

      <div
        style={{
          maxWidth:"900px",
          margin:"auto"
        }}
      >

        <div
          style={{
            background:"#0b1120",
            padding:"35px",
            borderRadius:"24px",
            border:"1px solid #7e22ce",
            boxShadow:"0px 0px 30px rgba(168,85,247,0.25)"
          }}
        >

          <h3
            style={{
              color:"#38bdf8",
              fontSize:"28px",
              marginBottom:"12px"
            }}
          >

            B.Tech — Computer Science & Engineering

          </h3>

          <p
            style={{
              color:"#d1d5db",
              lineHeight:"2",
              fontSize:"18px"
            }}
          >

            Kalasalingam Academy of Research and Education

            <br/>

            2022 – 2026

            <br/>

            CGPA: 8.6

          </p>

        </div>

      </div>

    </motion.section>
  )
}

export default Education;