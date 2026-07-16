import { useState, useEffect } from "react";
import jsPDF from "jspdf";


function CoverLetter() {


  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const [company, setCompany] = useState("");

  const [skills, setSkills] = useState("");

  const [letter, setLetter] = useState("");





  useEffect(() => {


    const savedSkills = localStorage.getItem("resumeSkills");


    if(savedSkills){

      const skillArray = JSON.parse(savedSkills);

      setSkills(skillArray.join(", "));

    }


  }, []);






  const generateLetter = () => {


    const result = `Dear Hiring Manager,

I am ${name} and I am applying for the position of ${role} at ${company}.

I have skills in ${skills}. I am passionate about learning new technologies and building practical projects.

I have worked on projects and improved my technical knowledge through practical experience.

My problem-solving skills and willingness to learn make me a suitable candidate for this opportunity.

I would appreciate the opportunity to contribute my skills and grow with your organization.

Thank you for considering my application.

Sincerely,
${name}`;



    setLetter(result);


  };








  const downloadPDF = () => {


    const doc = new jsPDF();


    doc.text(
      "AI Cover Letter",
      20,
      20
    );


    doc.text(
      letter,
      20,
      40,
      {
        maxWidth:170
      }
    );


    doc.save(
      "CareerCompass_Cover_Letter.pdf"
    );


  };








  return (


    <div

      style={{

        minHeight:"100vh",

        background:"#f4f7fb",

        padding:"40px",

        fontFamily:"Arial",

        textAlign:"center"

      }}

    >



      <h1>
        📝 AI Cover Letter Generator
      </h1>





      <div

        style={{

          background:"white",

          padding:"30px",

          borderRadius:"15px",

          display:"inline-block"

        }}

      >





        <input

          placeholder="Your Name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

        />



        <br/><br/>





        <input

          placeholder="Job Role"

          value={role}

          onChange={(e)=>setRole(e.target.value)}

        />



        <br/><br/>





        <input

          placeholder="Company Name"

          value={company}

          onChange={(e)=>setCompany(e.target.value)}

        />



        <br/><br/>





        <input

          placeholder="Skills"

          value={skills}

          onChange={(e)=>setSkills(e.target.value)}

        />



        <br/><br/>






        <button

          onClick={generateLetter}

          style={{

            padding:"12px 25px",

            background:"#2563eb",

            color:"white",

            border:"none",

            borderRadius:"8px",

            cursor:"pointer"

          }}

        >

          Generate Cover Letter

        </button>







        {
          letter && (


            <div

              style={{

                marginTop:"30px",

                background:"#f1f5f9",

                padding:"20px",

                textAlign:"left",

                borderRadius:"10px",

                whiteSpace:"pre-line"

              }}

            >



              <h3>
                Your Cover Letter
              </h3>




              <p>
                {letter}
              </p>





              <button

                onClick={downloadPDF}

                style={{

                  padding:"12px 25px",

                  background:"#16a34a",

                  color:"white",

                  border:"none",

                  borderRadius:"8px",

                  cursor:"pointer"

                }}

              >

                📥 Download PDF

              </button>




            </div>


          )
        }





      </div>




    </div>


  );


}


export default CoverLetter;