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
                logo="Rozay's Mobile Detailing"
                navItems={[
                  { name: "Workflow", href: "#process" },
                  { name: "Crevice Specialty", href: "#specialty" },
                  { name: "Services", href: "#services" },
                  { name: "About Rozay", href: "#about" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" },
                ]}
                ctaButton={{ text: "Book Mobile Detail", href: "#contact" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSimpleCard
                brand="Rozay's Mobile Detailing"
                columns={[
                  {
                    title: "Specialties",
                    items: [
                      { label: "Deep Crevice Purge", href: "#process" },
                      { label: "Interior Steam Sanitation", href: "#process" },
                      { label: "Exterior Crevice Wash", href: "#services" },
                      { label: "Full Signature Detail", href: "#services" },
                    ],
                  },
                  {
                    title: "Service Area",
                    items: [
                      { label: "North Myrtle Beach, SC", href: "#contact" },
                      { label: "Cherry Grove, SC", href: "#contact" },
                      { label: "Little River, SC", href: "#contact" },
                      { label: "Grand Strand Area", href: "#contact" },
                    ],
                  },
                  {
                    title: "Contact Rozay",
                    items: [
                      { label: "(843) 555-7692", href: "tel:8435557692" },
                      { label: "rozay@rozaysmobiledetailing.com", href: "mailto:rozay@rozaysmobiledetailing.com" },
                      { label: "North Myrtle Beach, SC" },
                    ],
                  },
                ]}
                copyright="© 2026 Rozay's Mobile Detailing. All rights reserved."
                links={[
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                ]}
              />
    </StyleProvider>
  );
}
