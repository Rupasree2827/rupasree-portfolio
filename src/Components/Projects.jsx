import { motion } from "framer-motion";
import aiProject from "../assets/ai-project.png";
import foodScanner from "../assets/food-scanner.png";

function Projects() {

  const projects = [

  {
    title:"AI Fake Review Detection",

    image: aiProject,

    desc:"Built an NLP model using BERT to classify online reviews as genuine or fake.",

    github:"https://github.com/Rupasree2827",

    demo:"#",
     tech:["Python","BERT","Streamlit","NLP"]
     
  },

{
title:"AI-Powered Story-to-Visual Content Generation System",

image:null,

desc:"Generated AI-powered visual scenes from script-based prompts using Google Flow and prompt engineering.Refined prompts iteratively to improve image quality, visual consistency, and storytelling outcomes.",

github:"https://github.com/Rupasree2827",
demo:"#",
tech:["Google Flow","Canva AI","Prompt Engineering","Generative AI","ChatGPT"]
},

  
{
  title:"Food Scanner",

  image: foodScanner,

  desc:"Developed a food scanner application to analyze food items and provide useful nutritional / classification insights.",

  github:"",

  tech:["Python","AI","Flask","Streamlit","QR Scanner"]
},
  
   {
    title:"Smart Waste Management",
    image:null,
    desc:"IEEE Hackathon project focused on smart monitoring and intelligent waste management solutions.",

    github:"",
    demo:"#",
    tech:["Python","Streamlit"]

  }
  

];

  return (

    <motion.section
    id="projects"
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

        {projects.map((project)=>(
<motion.div
  key={project.title}

  whileHover={{
    y:-12,
    scale:1.03
  }}

  style={{
              background:"rgba(11,17,32,0.85)",
backdropFilter:"blur(10px)",
              padding:"30px",
              width:"340px",
              borderRadius:"22px",
              border:"1px solid #7e22ce",
              boxShadow:"0px 0px 35px rgba(168,85,247,0.45)",
              transition:"0.3s ease",
              cursor:"pointer",
              transform:"translateY(0px)"
            }}
          >

           {project.image && (

<img
  src={project.image}
  alt={project.title}

  style={{
    width:"100%",
    height:"220px",
    objectFit:"cover",
    borderRadius:"16px",
    marginBottom:"22px",
    border:"1px solid #7e22ce",
    boxShadow:"0px 0px 22px rgba(168,85,247,0.25)"
  }}
/>

)}

<h3
  style={{
    color:"#38bdf8",
    fontSize:"24px",
    marginBottom:"18px"
  }}
>
  {project.title}
</h3>

            <p
              style={{
                color:"#d1d5db",
                lineHeight:"1.8"
              }}
            >
              {project.desc}
            </p>
            <div
  style={{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    marginTop:"18px",
    marginBottom:"18px"
  }}
>

  {project.tech.map((item)=>(

    <span
      key={item}

      style={{
        background:"#111827",
        color:"#38bdf8",
        padding:"8px 14px",
        borderRadius:"999px",
        fontSize:"14px",
        border:"1px solid #38bdf8"
      }}
    >

      {item}

    </span>

  ))}

</div>
            <div
  style={{
    display:"flex",
    gap:"15px",
    marginTop:"25px"
  }}
>

  {project.github && (

    <a
      href={project.github}
      target="_blank"
      style={{
        background:"#a855f7",
        color:"white",
        padding:"10px 18px",
        borderRadius:"10px",
        textDecoration:"none",
        fontWeight:"bold"
      }}
    >

      GitHub

    </a>

  )}

</div>
            

          </motion.div>
        ))}

      </div>

    </motion.section>
  )
}

export default Projects;