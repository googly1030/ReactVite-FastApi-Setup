# Hyre Track

## Overview
Hyre Track is a full-stack application that combines a React frontend built with Vite and a FastAPI backend. This project serves as a template for developing modern web applications with a clear separation between the client and server.

## Project Structure
The project is organized into two main directories:

- **client**: Contains the React application.
- **server**: Contains the FastAPI application.

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- Python (version 3.7 or higher)
- pip (Python package installer)

### Setup Instructions

#### Client Setup
1. Navigate to the client directory:
   ```
   cd client
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and go to `http://localhost:3000` to view the application.

#### Server Setup
1. Navigate to the server directory:
   ```
   cd server
   ```
2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
4. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```
5. Open your browser and go to `http://localhost:8000` to view the FastAPI documentation.

## Usage
You can use the React frontend to interact with the FastAPI backend. The API endpoints can be accessed through the FastAPI documentation at `http://localhost:8000/docs`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.