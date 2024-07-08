import ToggleThemeSwitcher from './components/ToggleThemeSwitcher';
import TwoColumnLayout from './components/TwoColumnLayout';
import FullScreenIframe from './components/FullScreenIframe';

export default function HomePage() {
  return (
    <div className="">
      <TwoColumnLayout  />
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7u5rif8unf" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=cnio385hp8" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
    </div>
  );
}