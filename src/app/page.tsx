"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, CheckCircle } from 'lucide-react';

const assetMap = [{"id":"hero-bg","url":"https://images.pexels.com/photos/34266111/pexels-photo-34266111.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern SaaS platform - Photo by Pramod Giri"},{"id":"features-1","url":"https://images.pexels.com/photos/19867468/pexels-photo-19867468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Wooden letter tiles spelling SaaS on rustic wood. Ideal for cloud computing and business concepts."},{"id":"features-2","url":"https://images.pexels.com/photos/19867468/pexels-photo-19867468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Wooden letter tiles spelling SaaS on rustic wood. Ideal for cloud computing and business concepts."},{"id":"faq-image","url":"https://images.pexels.com/photos/8867231/pexels-photo-8867231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling woman in call center with headset and microphone at office desk."}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="Webild" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our SaaS Platform"
            description="Streamline your business processes with our cutting-edge solutions."
            imageSrc={assetMap.find(a => a.id === 'hero-bg')?.url}
            buttons={[
              { text: "Learn More", href: "about" },
              { text: "Get Started", href: "https://example.com" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Empowering Businesses with Innovative SaaS Solutions"
            buttons={[{ text: "Discover More", href: "features" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Analytics", description: "Gain insights with detailed analytics.", icon: Zap, button: { text: "Learn More", href: "#" } },
              { title: "Automation", description: "Automate tasks to boost efficiency.", icon: CheckCircle, button: { text: "Learn More", href: "#" } }
            ]}
            title="Our Features"
            description="Discover what makes us different"
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqSplitMedia
            faqs={[
              { id: "1", title: "What is your return policy?", content: "We offer a 30-day money-back guarantee." },
              { id: "2", title: "How long does shipping take?", content: "Standard shipping typically takes 5-7 business days." }
            ]}
            imageSrc={assetMap.find(a => a.id === 'faq-image')?.url}
            imageAlt={assetMap.find(a => a.id === 'faq-image')?.alt}
            title="Frequently Asked Questions"
            mediaPosition="left"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for weekly updates and exclusive content."
            imageSrc={assetMap.find(a => a.id === 'faq-image')?.url}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About Us", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}