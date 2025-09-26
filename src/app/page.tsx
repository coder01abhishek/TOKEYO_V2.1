import Hero from "./components/Hero";
import SwiperGallery from "./components/SwiperGallery";
import AtTokyo from "./components/AtTokyo";
import Webelieve from "./components/Webelieve";
import HowItWorks from "./components/HowItWork/HowItWork";
import ModulesSection from "./components/ModulesSection";
import UnderDevelopmentSlider from "./components/UnderDevelopmentSection";
import AICharacterSection from "./components/AICharacterSection";
import FaqSection from "./components/FaqSection";
// import TokyoIntelligenceSection from "./components/TokyoIntelligenceSection";
import NewAiAnimate from "./components/NewAiAnimate";
import MobilePillTabs from "./components/MobilePillTabs";
import Section from "./components/ui/Section";
import HeroNew from "./components/HerNew";
import Language from "./components/language";

const pills = [
  { label: 'Models', gif: '/assets/gifs/models.svg' },
  { label: 'Scene', gif: '/assets/gifs/scene.svg' },
  { label: 'Modules', gif: '/assets/gifs/modules.svg' },
  { label: 'Memory', gif: '/assets/gifs/memory.svg' },
  { label: 'Providers', gif: '/assets/gifs/providers.svg' },
  { label: 'System', gif: '/assets/gifs/system.svg' },
];

const bottomTabs = [
  'Construct Behavioral Architecture',
  'Fuse Personality with Digital Embodiment',
  'Deploy Agent into Immersive Ecosystems',
];

export default function Home() {
  return (
    <div>
      <main>

        <Section>
          <Hero />
        </Section>


        <Section>
          <SwiperGallery />
        </Section>

        <Section>
          <AtTokyo />
        </Section>

        <NewAiAnimate />

        <MobilePillTabs pills={pills} bottomTabs={bottomTabs} />
        <Section>
          <HeroNew />
        </Section>
        <Section>
          <HowItWorks />
        </Section>

        <Section>
          <Webelieve />
        </Section>

        <Section>
          <section className="bg-black sm:py-20 py-16" id="modules">
            <ModulesSection />
            <UnderDevelopmentSlider />
          </section>
        </Section>

        <Section>
          <AICharacterSection />
        </Section>

        <Section>
          <Language />
        </Section>
        <Section>
          <FaqSection />
        </Section>

      </main>
    </div>
  );
}