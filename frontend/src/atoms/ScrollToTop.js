import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'test') {
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
}
