import type { Route } from "./+types/home";
import { ThemeProvider } from '@rescui/ui-contexts';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { HeaderSection } from '../components/sections/HeaderSection';
import { LatestFromKotlinSection } from '../components/sections/LatestFromKotlinSection';
import { WhyKotlinSection } from '../components/sections/WhyKotlinSection';
import { UsageSection } from '../components/sections/UsageSection';
import { StartSection } from '../components/sections/StartSection';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "A modern programming language that makes developers happier" },
  ];
}

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <Header />
        <HeaderSection />
        <LatestFromKotlinSection />
        <WhyKotlinSection />
        <UsageSection />
        <StartSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
