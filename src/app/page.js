import './globals.css';
import Header from './components/header';
import DetailsFade from './components/homepage-components/details-fade';
import IdentityFade from './components/homepage-components/identity-fade';
import PartnersFade from './components/homepage-components/partners-fade';
import ContactFade from './components/homepage-components/contact-fade';
import AboutFade from './components/homepage-components/about-fade';
import TitleFade from './components/homepage-components/title-fade';

export default function Home() {
  return (
    <div className="grid grid-rows-2 bg-gray-200">
      <div className="grid grid-rows-12">
          <Header></Header>
          
          <TitleFade></TitleFade>

          <IdentityFade></IdentityFade>

          <DetailsFade></DetailsFade>
      </div>


      


      <div className="grid grid-rows-9 sm:grid-rows-12 bg-gray-200">
        <AboutFade></AboutFade>

        <PartnersFade></PartnersFade>

        <ContactFade></ContactFade>
      </div>
    </div>
  );
}