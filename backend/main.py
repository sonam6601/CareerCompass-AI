from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pdfplumber
import shutil
import os
import re


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def home():
    return {
        "message": "Backend Working"
    }




# ---------------- LOGIN ----------------

class LoginData(BaseModel):
    email: str
    password: str



@app.post("/login")
def login(data: LoginData):

    if data.email == "admin@gmail.com" and data.password == "1234":

        return {
            "message": "Login Successful",
            "token": "dummy-token",
            "user": {
                "email": data.email
            }
        }


    return {
        "message": "Invalid Credentials"
    }





# ---------------- CLEAN TEXT ----------------


def clean_text(text):

    text = re.sub(r'\s+', ' ', text)


    # Fix separated letters
    words = text.split()

    result = []

    temp = ""


    for word in words:

        if len(word) == 1 and word.isalpha():

            temp += word

        else:

            if temp:
                result.append(temp)
                temp = ""

            result.append(word)



    if temp:
        result.append(temp)



    text = " ".join(result)



    # Formatting

    headings = [
        "CERTIFICATION",
        "CONTACT",
        "SKILLS",
        "LANGUAGES",
        "EXPERIENCE",
        "EDUCATION",
        "PROFILE"
    ]


    for heading in headings:

        text = re.sub(
            heading,
            "\n" + heading + "\n",
            text,
            flags=re.I
        )



    text = text.replace(
        "PowerBI",
        "Power BI"
    )


    text = text.replace(
        "GitHub",
        "GitHub"
    )


    return text.strip()





# ---------------- RESUME ANALYZER ----------------


@app.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):


    os.makedirs("uploads", exist_ok=True)


    file_path = f"uploads/{file.filename}"


    with open(file_path, "wb") as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )



    resume_text = ""



    with pdfplumber.open(file_path) as pdf:

        for page in pdf.pages:

            resume_text += page.extract_text() or ""



    clean_resume = clean_text(resume_text)



    # Skill checking text

    skill_text = clean_resume.lower().replace(" ", "")



    skills_list = [

        "python",
        "java",
        "javascript",
        "react",
        "html",
        "css",
        "sql",
        "mongodb",
        "node",
        "fastapi",
        "aws",
        "git",
        "github",
        "c++",
        "machine learning",
        "mern",
        "power bi",
        "data analysis"

    ]



    found_skills = []



    for skill in skills_list:

        if skill.replace(" ", "") in skill_text:

            found_skills.append(skill)




    # Score

    score = 40


    if len(found_skills) >= 3:
        score += 25


    if "project" in skill_text:
        score += 10


    if "internship" in skill_text or "experience" in skill_text:
        score += 10


    if "github" in skill_text:
        score += 5


    if "certificate" in skill_text or "certification" in skill_text:
        score += 5


    if "education" in skill_text:
        score += 5



    if score > 100:
        score = 100





    suggestions = []


    if "github" not in skill_text:
        suggestions.append(
            "Add your GitHub profile link."
        )


    if "project" not in skill_text:
        suggestions.append(
            "Add more project details."
        )


    if "internship" not in skill_text and "experience" not in skill_text:
        suggestions.append(
            "Mention internship or practical experience."
        )




    return {

        "message": "Resume uploaded successfully",

        "filename": file.filename,

        "resume_text": clean_resume[:1200],

        "score": score,

        "skills": found_skills,

        "suggestions": suggestions

    }