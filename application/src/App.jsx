import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Router } from "./Models";

import {
  Navbar, 
  Sidebar
} from './Components'
import { AuthProvider } from "./Context";


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="h-screen w-screen">
        <Navbar />
        <div className="flex h-full w-full">
          <div className="flex pt-12 w-full ">
            <Sidebar />
            <Routes>
              <Route path="/*" element={<Router />} />
            </Routes>
          </div>
        </div>
      </div>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;
