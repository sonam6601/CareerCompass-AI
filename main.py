from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# 🔥 FIXED CORS (IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],  # frontend exact URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Backend Working"}

class LoginData(BaseModel):
    email: str
    password: str

@app.post("/login")
def login(data: LoginData):
    print("LOGIN HIT:", data)

    if data.email == "admin@gmail.com" and data.password == "1234":
        return {
            "message": "Login Successful",
            "token": "dummy-token",
            "user": {"email": data.email}
        }

    return {"message": "Invalid Credentials"}