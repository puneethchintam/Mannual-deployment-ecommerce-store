Manual Deployment Guide
1. Clone the Repository

Clone the project from GitHub:

git clone <repository-url>

Move into the project directory:

cd ecommerce-store
2. Project Structure

The project contains two main applications:

ecommerce-store/
│
├── frontend/
│   └── React application
│
└── backend/
    └── Node.js / Express application

The frontend sends API requests to the backend, and the backend connects to MongoDB.

3. Install Backend Dependencies

Navigate to the backend directory:

cd backend

Install the required Node.js packages:

npm install

This installs dependencies defined in:

backend/package.json
4. Configure Environment Variables

Create a .env file inside the backend directory.

Example:

DB_CONNECTION=<your-mongodb-connection-string>
TOKEN_SECRET=<your-jwt-secret>

These values are required for:

Connecting the backend to MongoDB.
Creating JWT tokens during login.

Do not push the .env file or real secrets to GitHub.

5. Seed the Product Database

The application uses MongoDB to store product data.

Run:

node seed.js

This performs the following:

shop-data.js
      ↓
seed.js
      ↓
MongoDB
      ↓
Product collection

The seed script:

Deletes existing product documents.
Inserts the product data from shop-data.js.
Closes the MongoDB connection.
6. Start the Backend

Start the backend application:

node app.js

For keeping the application running as a process, we used PM2:

pm2 start app.js --name backend

Check running processes:

pm2 status

Check logs:

pm2 logs backend

Restart the backend after changes:

pm2 restart backend
7. Install Frontend Dependencies

Open another terminal and navigate to the frontend directory:

cd frontend

Install the required packages:

npm install
8. Start the Frontend

Run:

npm start

This starts the React development server.

The frontend can then be accessed through the browser at the URL displayed by the React application.

9. Application Flow

The complete manually deployed application works as follows:

User
  ↓
React Frontend
  ↓
Axios API Request
  ↓
Node.js / Express Backend
  ↓
MongoDB
  ↓
Express API Response
  ↓
Redux Store
  ↓
React Components
  ↓
Products Displayed
10. Product Category Flow

When a user selects a category such as:

Mens

The URL becomes:

/shop/mens

The ShopItem component reads the category from the URL:

match.params.catId

For /shop/mens:

catId = "mens"

The component then calls:

GET /api/v1/product/mens

The backend queries MongoDB:

Product.find({
  routeName: req.params["cat_name"],
});

MongoDB returns the matching category and its products.

The data flow is:

/shop/mens
      ↓
ShopItem
      ↓
useEffect()
      ↓
getProductByCategory("mens")
      ↓
Axios
      ↓
GET /api/v1/product/mens
      ↓
Express Backend
      ↓
MongoDB
      ↓
Redux Store
      ↓
ShopItemCard
      ↓
Products Displayed
11. Updating the Application

After making changes locally:

git status

Add the changes:

git add .

Commit them:

git commit -m "Update application"

Push them to GitHub:

git push origin main
Complete Manual Deployment Flow
GitHub Repository
        ↓
git clone
        ↓
Local Machine
        ↓
Install Backend Dependencies
        ↓
Configure .env
        ↓
Seed MongoDB
        ↓
Start Backend with PM2
        ↓
Install Frontend Dependencies
        ↓
Start React Frontend
        ↓
Access Application
