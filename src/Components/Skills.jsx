import { motion } from "framer-motion";

function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Core Java",
    "Machine Learning",
    "Figma",
    "Web Development",
    "Generative AI",
    "Prompt Engineering",
    "Google Flow",
    "Canva AI"
  ];

  return (

    <motion.section
    id="skills"
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

        {skills.map((skill)=>(
          <motion.div
  key={skill}

  whileHover={{
    y:-10,
    scale:1.05
  }}
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

          </motion.div>
        ))}

      </div>

    </motion.section>

  )
}

export default Skills;