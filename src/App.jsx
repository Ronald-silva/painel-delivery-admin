// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainContent } from './components/Layout/MainContent';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { OrderProvider } from './contexts/OrderContext';

export function App() {
 return (
   <BrowserRouter>
     <OrderProvider>
       <Routes>
         <Route path="/login" element={<Login />} />
         <Route element={<MainContent />}>
           <Route path="/" element={<Dashboard />} />
           <Route path="/dashboard" element={<Dashboard />} />
         </Route>
       </Routes>
     </OrderProvider>
   </BrowserRouter>
 );
}

export default App;