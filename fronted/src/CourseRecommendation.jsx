import { useEffect, useState } from "react";

function CourseRecommendation() {

  const [career, setCareer] = useState("");
  const [courses, setCourses] = useState([]);


  useEffect(() => {

    const goal =
      localStorage.getItem("careerGoal") || "Data Analyst";

    setCareer(goal);

    generateCourses(goal);

  }, []);



  const generateCourses = (goal) => {

    const text = goal.toLowerCase();


    if (text.includes("data")) {

      setCourses([
        {
          icon: "📊",
          title: "Excel for Data Analysis",
          desc: "Learn data cleaning, formulas and reporting."
        },
        {
          icon: "🗄",
          title: "SQL Database Masterclass",
          desc: "Learn database queries and data handling."
        },
        {
          icon: "🐍",
          title: "Python for Data Science",
          desc: "Learn Python for analysis and automation."
        },
        {
          icon: "📈",
          title: "Power BI Dashboard Development",
          desc: "Create professional dashboards."
        },
        {
          icon: "📚",
          title: "Statistics for Data Analysts",
          desc: "Understand data patterns and insights."
        },
        {
          icon: "💼",
          title: "Real World Data Projects",
          desc: "Build projects for your portfolio."
        }
      ]);

    }

  };



  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#f4f7fb",
        padding:"40px",
        fontFamily:"Arial"
      }}
    >

      <div
        style={{
          maxWidth:"800px",
          margin:"auto"
        }}
      >

        <h1
          style={{
            textAlign:"center",
            color:"#2563eb"
          }}
        >
          📚 AI Course Recommendation
        </h1>


        <h3
          style={{
            textAlign:"center",
            marginBottom:"30px"
          }}
        >
          Career Goal: {career}
        </h3>



        {courses.map((course,index)=>(

          <div
            key={index}
            style={{
              background:"white",
              padding:"20px",
              marginBottom:"15px",
              borderRadius:"15px",
              boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
            }}
          >

            <h2>
              {course.icon} {index+1}. {course.title}
            </h2>


            <p
              style={{
                color:"#555",
                fontSize:"16px"
              }}
            >
              {course.desc}
            </p>


          </div>

        ))}


      </div>


    </div>

  );

}


export default CourseRecommendation;