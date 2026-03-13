import { useState, useEffect } from 'react';
import { ThemeProvider } from '@rescui/ui-contexts';
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';

const Footer = (props: any) => {
  const [Component, setComponent] = useState<any>(null);

  useEffect(() => {
    // @ts-ignore
    import('@jetbrains/kotlin-web-site-ui/dist/footer.js').then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) {
    return <div style={{ minHeight: '200px' }} />;
  }

  return (
    <ThemeProvider theme="dark">
      <Component {...props} />
    </ThemeProvider>
  );
}

export default Footer;
