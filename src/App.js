import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyWelcomeJumbo from "./components/WelcomeJumbo";
import LatestReleases from "./components/LatestRelease";

function App() {
  return (
    <div className="bookstore-container">
      <header className="w-100">
        <MyNavbar title="History for the soul" color="light" />
        <MyWelcomeJumbo />
      </header>
      <main>
        <LatestReleases />
      </main>
      <footer className="w-100">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
