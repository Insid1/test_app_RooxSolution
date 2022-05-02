import { Routes, Route } from 'react-router-dom';
import MainPage from 'components/main-page/main-page';
import UserPage from 'components/user-page/user-page';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { AppRoute } from 'util/const';

function App() {
  return (
    <Routes>
      <Route path={AppRoute.MAIN} element={<MainPage />} />
      <Route path={`${AppRoute.USER}:id`} element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

  );
}

export default App;
