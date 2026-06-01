import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import profile from "./assets/profile.jpeg";
import resume from "./files/resume.pdf";

function App() {
  return (
    <div
  style={{
    background:"#050816",
    minHeight:"100vh",
    color:"white",
    position:"relative",
    overflow:"hidden"
  }}
>
  <div
  style={{
    position:"absolute",
    width:"500px",
    height:"500px",
    background:"#7e22ce",
    borderRadius:"50%",
    filter:"blur(180px)",
    opacity:"0.25",
    top:"-120px",
    left:"-120px"
  }}
></div>

<div
  style={{
    position:"absolute",
    width:"450px",
    height:"450px",
    background:"#06b6d4",
    borderRadius:"50%",
    filter:"blur(180px)",
    opacity:"0.20",
    bottom:"-120px",
    right:"-120px"
  }}
></div>


      <Navbar/>

      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:1}}
        style={{
  display:"flex",
  justifyContent:"space-around",
  alignItems:"center",
  padding:"120px 40px",
  flexWrap:"wrap",
  gap:"70px",
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

          <p
            style={{
              color:"#38bdf8",
              fontSize:"clamp(18px,4vw,28px)",
              maxWidth:"750px",
              lineHeight:"1.8"
            }}
          >

            B.Tech CSE Graduate |
            Full Stack Developer |
            AI & ML Enthusiast

          </p>

          <div
  style={{
    display:"flex",
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
  transition:"0.3s ease",
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
  transition:"0.3s ease",
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

        <div
          style={{
            position:"relative"
          }}
        >

          <img
            src={profile}
            alt="Rupasree"
            style={{
              width:"100%",
              maxWidth:"400px",
              borderRadius:"50%",
              border:"5px solid #a855f7",
              boxShadow:"0px 0px 90px #a855f7"
            }}
          />

        </div>

      </motion.section>
      <motion.section
      initial={{opacity:0,y:80}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:1}}
      viewport={{once:true}}

  style={{
    padding:"80px 60px"
  }}
>

  <h2
    style={{
      color:"#a855f7",
      fontSize:"48px",
      textAlign:"center",
      marginBottom:"50px"
    }}
  >
    Skills
  </h2>

  <div
    style={{
      display:"flex",
      justifyContent:"center",
      gap:"25px",
      flexWrap:"wrap"
    }}
  >

    {[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Python",
      "Core Java",
      "Machine Learning",
      "Figma",
      "Web Development"
    ].map((skill)=>(
      <div
        key={skill}
        style={{
          background:"#0b1120",
          padding:"25px 35px",
          borderRadius:"18px",
          border:"1px solid #7e22ce",
          color:"#38bdf8",
          fontWeight:"bold",
          boxShadow:"0px 0px 18px rgba(168,85,247,0.35)",
          transition:"0.3s ease",
          cursor:"pointer"
        }}
      >

        {skill}

      </div>
    ))}

  </div>

</motion.section>
<motion.section
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

    Projects

  </h2>

  <div
    style={{
      display:"flex",
      justifyContent:"center",
      gap:"35px",
      flexWrap:"wrap"
    }}
  >

    <div
      style={{
        background:"#0b1120",
        padding:"30px",
        width:"340px",
        borderRadius:"22px",
        border:"1px solid #7e22ce",
        boxShadow:"0px 0px 35px rgba(168,85,247,0.45)",
        transition:"0.3s ease",
        cursor:"pointer"
      }}
    >

      <h3
        style={{
          color:"#38bdf8",
          fontSize:"24px",
          marginBottom:"18px"
        }}
      >

        AI Fake Review Detection

      </h3>

      <p
        style={{
          color:"#d1d5db",
          lineHeight:"1.8"
        }}
      >

        Built an NLP model using BERT to classify online reviews as genuine or fake. Developed a Streamlit application with alerts and performance evaluation.

      </p>

    </div>

    <div
      style={{
        background:"#0b1120",
        padding:"30px",
        width:"340px",
        borderRadius:"22px",
        border:"1px solid #7e22ce",
        boxShadow:"0px 0px 35px rgba(168,85,247,0.45)",
        transition:"0.3s ease",
        cursor:"pointer"
      }}
    >

      <h3
        style={{
          color:"#38bdf8",
          fontSize:"24px",
          marginBottom:"18px"
        }}
      >

        Smart Waste Management

      </h3>

      <p
        style={{
          color:"#d1d5db",
          lineHeight:"1.8"
        }}
      >

        IEEE Hackathon project focused on smart monitoring and intelligent waste management solutions.

      </p>

    </div>

    <div
      style={{
        background:"#0b1120",
        padding:"30px",
        width:"340px",
        borderRadius:"22px",
        border:"1px solid #7e22ce",
        boxShadow:"0px 0px 35px rgba(168,85,247,0.45)",
        transition:"0.3s ease",
        cursor:"pointer"
      }}
    >

      <h3
        style={{
          color:"#38bdf8",
          fontSize:"24px",
          marginBottom:"18px"
        }}
      >

        Prodigy Infotech Internship

      </h3>

      <p
        style={{
          color:"#d1d5db",
          lineHeight:"1.8"
        }}
      >

        Built classification and regression models using Python and Scikit-learn during internship training.

      </p>

    </div>

  </div>

</motion.section>
<motion.section
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
<motion.section
  initial={{opacity:0,y:80}}
  whileInView={{opacity:1,y:0}}
  transition={{duration:1}}
  viewport={{once:true}}

  style={{
    padding:"90px 60px",
    textAlign:"center"
  }}
>

  <h2
    style={{
      color:"#a855f7",
      fontSize:"48px",
      marginBottom:"55px"
    }}
  >

    Contact

  </h2>

  <div
    style={{
      background:"#0b1120",
      padding:"45px",
      borderRadius:"24px",
      maxWidth:"850px",
      margin:"auto",
      border:"1px solid #7e22ce",
      boxShadow:"0px 0px 30px rgba(168,85,247,0.35)"
    }}
  >

    <p style={{fontSize:"24px",marginBottom:"20px"}}>
      📧 rupapothurai@gmail.com
    </p>

    <p style={{fontSize:"24px",marginBottom:"20px"}}>
      🔗 LinkedIn: rupa-pothurai
    </p>

    <p style={{fontSize:"24px"}}>
      💻 GitHub: Rupasree2827
    </p>

  </div>

</motion.section>



    </div>
  )
}

export default App