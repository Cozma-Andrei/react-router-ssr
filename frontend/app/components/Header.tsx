import { useState, useEffect } from 'react';
import '@jetbrains/kotlin-web-site-ui/dist/header.css';

const Header = (props: any) => {
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    import('@jetbrains/kotlin-web-site-ui/dist/header.js').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) {
    return <div className="header-skeleton" style={{ height: '64px' }} />;
  }

  return <Component {...props} />;
}

export default Header;
