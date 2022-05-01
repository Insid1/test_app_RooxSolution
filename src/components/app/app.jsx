import { Routes, Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import UserPage from '../user-page/user-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user/:id" element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
