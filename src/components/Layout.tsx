import { Outlet } from 'react-router-dom';
import NavbarCentered from '@/components/ui/NavbarCentered';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import FooterSimpleCard from "@/components/sections/footer/FooterSimpleCard";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarCentered
                logo="Elite Detail"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Why Us", href: "#why-us" },
                  { name: "Team", href: "#team" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Book Now", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleCard
                brand="Elite Detail"
                columns={[
                  {
                    title: "Services",
                    items: [
                      { label: "Interior Detail", href: "#services" },
                      { label: "Exterior Detail", href: "#services" },
                      { label: "Ceramic Coating", href: "#services" },
                      { label: "Full Detail Package", href: "#services" },
                    ],
                  },
                  {
                    title: "Company",
                    items: [
                      { label: "About Us", href: "#" },
                      { label: "Our Team", href: "#team" },
                      { label: "FAQ", href: "#faq" },
                      { label: "Testimonials", href: "#testimonials" },
                    ],
                  },
                  {
                    title: "Contact",
                    items: [
                      { label: "(555) 987-6543", href: "tel:5559876543" },
                      { label: "info@elitedetail.com", href: "mailto:info@elitedetail.com" },
                      { label: "Miami, FL" },
                    ],
                  },
                ]}
                copyright="© 2026 Elite Detail. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
