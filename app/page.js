import ToggleThemeSwitcher from './components/ToggleThemeSwitcher';
import TwoColumnLayout from './components/TwoColumnLayout';
import FullScreenIframe from './components/FullScreenIframe';
import Acc from './components/AccordionContent';
import Footer from './components/Footer';


export default function HomePage() {
  return (
    <div className="">
      <TwoColumnLayout  />
      <Acc />
      <Footer/>
    </div>
  );
}