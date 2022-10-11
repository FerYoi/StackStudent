import NotificationHeader from "./components/NotificationHeader";
import TopBar from "./components/TopBar";
import CategoriesBar from "./components/CategoriesBar";
import Hero from "./components/Hero";

// Footer Components

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import LearningNext from "./components/LearningNext";



const App = () => {
  return (
    <div className='App'>
      <header>
        <GlobalStyle />
        <NotificationHeader
          contentBold='Bienvenido a StackStudent'
          bgColor='#488d8a'
        />
        <TopBar />
        <CategoriesBar />
        <Hero />
      </header>
      <main>
        <LearningNext />
       
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;