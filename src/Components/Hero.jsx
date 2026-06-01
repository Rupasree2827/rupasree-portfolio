import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpeg";
import resume from "../files/resume.pdf";

function Hero() {
  return (

<>
  <div
    style={{
      position:"absolute",
      width:"220px",
      height:"220px",
      background:"#a855f7",
      borderRadius:"50%",
      filter:"blur(120px)",
      opacity:"0.25",
      top:"120px",
      right:"80px"
    }}
  ></div>

  <div
    style={{
      position:"absolute",
      width:"180px",
      height:"180px",
      background:"#38bdf8",
      borderRadius:"50%",
      filter:"blur(120px)",
      opacity:"0.20",
      bottom:"80px",
      left:"50px"
    }}
  ></div>

<motion.section
      initial={{opacity:0,y:60}}
      animate={{opacity:1,y:0}}
      transition={{duration:1}}

      style={{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        padding:"70px 40px",
        flexWrap:"wrap",
        gap:"40px",
        textAlign:"center"
      }}
    >

      <div>

        <h1
          style={{
            fontSize:"clamp(48px,8vw,80px)",
            color:"#a855f7",
            marginBottom:"25px",
            lineHeight:"1.1"
          }}
        >

          Pothurai Rupasree

        </h1>

        <TypeAnimation
  sequence={[
    "B.Tech CSE Graduate",
    1500,
    "Full Stack Developer",
    1500,
    "AI & ML Enthusiast",
    1500,
    "React Developer",
    1500,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}

  style={{
    color:"#38bdf8",
    fontSize:"clamp(18px,4vw,28px)",
    display:"block",
    marginTop:"10px"
  }}
/>

        <div
          style={{
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap",
            gap:"20px",
            marginTop:"40px"
          }}
        >

          <a
            href="https://github.com/Rupasree2827"
            target="_blank"
            style={{
              background:"#a855f7",
              color:"white",
              padding:"16px 30px",
              borderRadius:"12px",
              textDecoration:"none",
              fontWeight:"bold",
              boxShadow:"0px 0px 25px #a855f7"
            }}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rupa-pothurai"
            target="_blank"
            style={{
              border:"2px solid #38bdf8",
              color:"#38bdf8",
              padding:"16px 30px",
              borderRadius:"12px",
              textDecoration:"none",
              fontWeight:"bold",
              boxShadow:"0px 0px 20px #38bdf8"
            }}
          >
            LinkedIn
          </a>

          <a
            href={resume}
            download
            style={{
              background:"#06b6d4",
              color:"white",
              padding:"16px 30px",
              borderRadius:"12px",
              textDecoration:"none",
              fontWeight:"bold",
              boxShadow:"0px 0px 25px #06b6d4"
            }}
          >
            Resume
          </a>

        </div>

      </div>

      <div>

        <img
          src={profile}
          alt="Rupasree"
          style={{
            width:"100%",
            maxWidth:"330px",
            borderRadius:"50%",
            border:"5px solid #a855f7",
            boxShadow:"0px 0px 90px #a855f7"
          }}
        />

      </div>

    </motion.section>

</>
  )
}

export default Hero;