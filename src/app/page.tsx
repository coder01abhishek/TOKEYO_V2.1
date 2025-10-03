import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Section from "./components/ui/Section";

const SwiperGallery = dynamic(() => import("./components/SwiperGallery"), { loading: () => <div className="h-96" /> });
const AtTokyo = dynamic(() => import("./components/AtTokyo"));
const Webelieve = dynamic(() => import("./components/Webelieve"));
const HowItWorks = dynamic(() => import("./components/HowItWork/HowItWork"));
const ModulesSection = dynamic(() => import("./components/ModulesSection"));
const UnderDevelopmentSlider = dynamic(() => import("./components/UnderDevelopmentSection"), { loading: () => <div className="h-96" /> });
const AICharacterSection = dynamic(() => import("./components/AICharacterSection"));
const FaqSection = dynamic(() => import("./components/FaqSection"));
const NewAiAnimate = dynamic(() => import("./components/NewAiAnimate"));
const MobilePillTabs = dynamic(() => import("./components/MobilePillTabs"));
const HeroNew = dynamic(() => import("./components/HerNew"));
const Language = dynamic(() => import("./components/language"));

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