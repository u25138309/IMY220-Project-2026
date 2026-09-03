# IMY220-Project-2026
Link to Repo:
  https://github.com/u25138309/IMY220-Project-2026

This is my main project for IMY220 2026.
Docker Commands to Build and Run:
  In Root:
    Backend:
      docker build -t photoshare-backend ./backend
      docker run -p 3000:3000 photoshare-backend
    Frontend:
      docker build -t photoshare-frontend ./frontend
      docker run -p 5173:5173 photoshare-frontend
