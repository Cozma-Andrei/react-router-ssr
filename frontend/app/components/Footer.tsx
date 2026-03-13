// @ts-ignore
import Footer from '@jetbrains/kotlin-web-site-ui/out/components/footer';
import { ThemeProvider } from '@rescui/ui-contexts';

const GlobalFooter = (props: any) => {
  return (
    <ThemeProvider theme="dark">
      <Footer
        {...props}
        currentUrl="/"
        hasSearch={false}
        searchConfig={{
          searchAlgoliaId: '',
          searchAlgoliaApiKey: '',
          searchAlgoliaIndexName: '',
        }}
      />
    </ThemeProvider>
  );
}

export default GlobalFooter;
