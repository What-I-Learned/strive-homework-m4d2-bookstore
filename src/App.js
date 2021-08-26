import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Books from "./data/history.json";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyWelcomeJumbo from "./components/WelcomeJumbo";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="bookstore-container">
      <header className="w-100">
        <MyNavbar title="History for the mind" color="light" />
        <MyWelcomeJumbo />
      </header>
      <main>
        <BookList booklist={Books} />
      </main>
      <footer className="w-100">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
