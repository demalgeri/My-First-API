# My-First-API
HOW TO RUN LOCALLY:
In your code editor terminal enter the command "node index.js" to start my API listening on PORT 3000

Options to do a GET request to my API:
- Option 1: This is the easiest option. Open a browser and type in http://localhost:3000/users or http://localhost:3000/users/1 (the number is the id # for the user)
- Option 2: Use Postman
- Option 3: Write a fetch request in JavaScript in the browser's console

Options to do a POST request to my API:
- Option 1: Use this command in the Windows Command Prompt: curl -X POST "http://localhost:3000/users" -H "Content-Type: application/json" -d "{\"name\":\"David\"}"
- Option 2: Use Postman
- Option 3: Write a fetch request in JavaScript in the browser's console 
