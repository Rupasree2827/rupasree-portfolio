import { motion } from "framer-motion";

function Contact() {

  return (

    <motion.section
    id="contact"
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

  )
}

export default Contact;