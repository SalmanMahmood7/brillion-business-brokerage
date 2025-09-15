import HeroSection from '../components/HeroSection';
import PerfectMatchmakerSection from '../components/PerfectMatchmakerSection';
import ServicesOffered from '../components/ServicesOffered';
import CallToActionSection from '../components/CallToActionSection';
import FeaturedListingsSection from '../components/FeaturedListingsSection';
import TrackRecordSection from '../components/TrackRecordSection';
import LatestArticlesSection from '../components/LatestArticlesSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PerfectMatchmakerSection />
      <ServicesOffered />
      <CallToActionSection />
      <FeaturedListingsSection />
      <TrackRecordSection />
      <LatestArticlesSection />
    </div>
  );
}