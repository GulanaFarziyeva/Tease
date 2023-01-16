import AppHeader from "./components/layout/header/AppHeader";
import Home from "./features/home/Home";



const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden">
      <AppHeader />
      <Home />
    </div>
  );
};

export default App;
