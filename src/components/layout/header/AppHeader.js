import Navbar from "./Navbar";
import Toolbar from "./Toolbar";

const AppHeader = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col">
      <Toolbar />
      <Navbar />
    </div>
  );
};

export default AppHeader;
