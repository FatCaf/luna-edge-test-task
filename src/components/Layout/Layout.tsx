import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className="h-screen">
        <Outlet />
      </main>
    </>
  );
}
