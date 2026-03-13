// @ts-ignore
import Header from '@jetbrains/kotlin-web-site-ui/out/components/header';

const GlobalHeader = (props: any) => {
  return (
    <Header
      {...props}
      currentUrl="/"
      hasSearch={false}
      searchConfig={{
        searchAlgoliaId: '',
        searchAlgoliaApiKey: '',
        searchAlgoliaIndexName: '',
      }}
    />
  );
}

export default GlobalHeader;
