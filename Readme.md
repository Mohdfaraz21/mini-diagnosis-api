# Mini Diagnosis API

A simple backend system that analyzes user symptoms and returns possible medical conditions with probability scores. It also stores all diagnosis history using MongoDB.

---

##  Features

-  Analyze symptoms using rule-based logic  
-  Return 2–3 possible conditions with probability percentages  
-  Store every diagnosis request in MongoDB  
-  Fetch complete diagnosis history  
-  Fast and lightweight REST API  

---

##  Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **ODM:** Mongoose  

---

##  API Endpoints

### 🔹 Diagnose Symptoms
**POST** `/api/diagnose`

**Request Body:**
```json
{
  "symptoms": "fever, headache, fatigue"
}
```

```json
{
  "symptoms": "fever, headache, fatigue",
  "possible_conditions": [
    { "condition": "Flu", "probability": "70%" },
    { "condition": "Viral Infection", "probability": "60%" }
  ]
}
```

**GET** `/api/history`

```json
[
  {
    "_id": "69cd4f7067b1a5d76e0ab7fd",
    "symptoms": "fever, headache, fatigue",
    "results": [
      {
        "condition": "Flu",
        "probability": "70%",
        "_id": "69cd4f7067b1a5d76e0ab7fe"
      },
      {
        "condition": "Viral Infection",
        "probability": "60%",
        "_id": "69cd4f7067b1a5d76e0ab7ff"
      },
      {
        "condition": "Anemia",
        "probability": "50%",
        "_id": "69cd4f7067b1a5d76e0ab800"
      }
    ],
    "createdAt": "2026-04-01T17:01:36.829Z",
    "__v": 0
  }
]
```
