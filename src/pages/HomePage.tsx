import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FeaturesComparison from "@/components/sections/features/FeaturesComparison";
import FeaturesStickyCards from "@/components/sections/features/FeaturesStickyCards";
import TestimonialMarqueeOverlayCards from "@/components/sections/testimonial/TestimonialMarqueeOverlayCards";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import FaqSimple from "@/components/sections/faq/FaqSimple";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function HomePage() {
  return (
    <StyleProvider siteBackground="none" heroBackground="lightRaysCenter" buttonVariant="expand">
      {/* Hero Section */}
      <HeroBillboardFeatures
        textAnimation="slide-up"
        badge="Locally Owned • North Myrtle Beach, SC"
        title="Rozay's Mobile Detailing"
        description="North Myrtle Beach's premier mobile detailing specialist. We specialize in deep-crack cleaning, vent steam extraction, and hard-to-reach spots, bringing professional equipment right to your driveway."
        primaryButton={{ text: "Book Mobile Service", href: "#contact" }}
        secondaryButton={{ text: "View 5-Stage Process", href: "#process" }}
        videoSrc="https://storage.googleapis.com/webild/default/templates/detailing/hero/hero.mp4"
        features={[
          {
            icon: "Sparkles",
            title: "Deep Crevice Specialist",
            description: "Air vents, seat rail channels, cup holder cracks, and emblem seams thoroughly purged",
          },
          {
            icon: "Truck",
            title: "100% Mobile to Your Door",
            description: "We bring high-heat steam & detailing power anywhere in North Myrtle Beach & Grand Strand",
          },
          {
            icon: "Shield",
            title: "Local Owner-Operator",
            description: "Hands-on craftsmanship & personal pride from a local North Myrtle Beach business owner",
          },
        ]}
      />

      {/* 5-Stage Cleaning Workflow Section */}
      <div id="process">
        <FeaturesDetailedSteps
          tag="Step-by-Step Detailing Workflow"
          title="Our 5-Stage Deep-Cleaning Process"
          description="Explore our detailed workflow step by step, designed to eliminate dirt, sand, and grime from every hard-to-reach spot on your vehicle."
          primaryButton={{ text: "Reserve Your Mobile Detail", href: "#contact" }}
          secondaryButton={{ text: "Compare Our Method", href: "#specialty" }}
          textAnimation="slide-up"
          steps={[
            {
              tag: "Stage 01",
              title: "Rinse and Citrus Foam Pre-Wash",
              subtitle: "Loosening hidden dirt in seams, rubber seals & body contours",
              description: "We initiate the detailing workflow by applying thick, pH-neutral citrus foam and using regulated high-pressure compressed air to force trapped coastal sand and dust out of body panel gaps, window rubber trim, and emblem crevices before touching the paint.",
              imageSrc: "https://picsum.photos/seed/1511038028/1200/800",
            },
            {
              tag: "Stage 02",
              title: "Deep Interior Crack & Vent Steam Sanitation",
              subtitle: "220°F high-heat steam penetrating tight vents & console cracks",
              description: "Pressurized 220°F dry steam is injected directly into air vent louvers, center console seams, gear shifters, and seat rail channels to melt sticky spills, sanitize surfaces, and kill odor-causing bacteria deep inside tight crevices.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team1.webp",
            },
            {
              tag: "Stage 03",
              title: "Fine-Brush Agitation for Hard-to-Reach Spots",
              subtitle: "Delicate micro-brushing for buttons, dials & steering wheel seams",
              description: "Using soft horsehair and ultra-fine synthetic detailing brushes, Rozay meticulously agitates every steering wheel button, climate control dial, door handle recess, and emblem surround where standard microfiber towels cannot reach.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team2.webp",
            },
            {
              tag: "Stage 04",
              title: "Carpet & Upholstery Deep Soil Extraction",
              subtitle: "Lifting embedded North Myrtle Beach sand & deep fibers",
              description: "Commercial-grade hot water extraction injects specialized fabric cleaner deep into floor carpets and seat upholstery, pulling out ground-in coastal sand, stubborn stains, and salt residue from under seat tracks.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
            },
            {
              tag: "Stage 05",
              title: "Ceramic UV Protection & Multi-Point Inspection",
              subtitle: "Non-greasy matte shield & white-glove quality pass",
              description: "We coat interior vinyl and leather with UV-blocking matte protectant to withstand South Carolina sunshine, seal exterior surfaces, and perform a final LED inspection pass checking every single crack and seam.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team3.webp",
            },
          ]}
        />
      </div>

      {/* About Local Business / Rozay Section */}
      <div id="about">
        <AboutFeaturesSplit
          tag="Local Small Business"
          title="Meet Rozay — Your Local NMB Mobile Detailer"
          description="Born out of a passion for absolute cleanliness and personal craftsmanship, Rozay's Mobile Detailing provides North Myrtle Beach vehicle owners with honest, high-end care right at their doorstep."
          primaryButton={{ text: "Book with Rozay", href: "#contact" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial3.webp?_wi=1"
          textAnimation="slide-up"
          items={[
            {
              icon: "UserCheck",
              title: "Owner-Operated Care",
              description: "Rozay personally handles every detail job to ensure zero missed spots.",
            },
            {
              icon: "Target",
              title: "Specialized Crevice Tools",
              description: "Utilizing professional steam extractors, narrow nozzles, and detail micro-brushes.",
            },
            {
              icon: "MapPin",
              title: "North Myrtle Beach Local",
              description: "Proudly serving Cherry Grove, Ocean Drive, Little River, and the Grand Strand.",
            },
          ]}
        />
      </div>

      {/* Specialty & Comparison Section */}
      <div id="specialty">
        <FeaturesComparison
          textAnimation="slide-up"
          tag="The Crevice Difference"
          title="Why Rozay Outperforms Standard Car Washes"
          description="Standard tunnel washes rush through jobs and leave dirt trapped inside interior cracks. Here is how Rozay's precision mobile process compares."
          primaryButton={{ text: "Get Your Custom Quote", href: "#contact" }}
          negativeItems={[
            "Tunnel brushes leave swirl marks and micro-scratches",
            "Trapped sand remains in air vents, cup holders & seat tracks",
            "Automatic blowers push moisture deeper into body seams",
            "Harsh bulk chemicals strip leather and dull dashboard plastic",
            "Rushed 10-minute automated assembly line clean",
          ]}
          positiveItems={[
            "100% scratch-free hand foam wash & ceramic protection",
            "High-heat steam & compressed air purge every crevice clean",
            "Meticulous micro-brushing of controls, seams & emblems",
            "pH-neutral premium conditioners nourish leather & trim",
            "Dedicated 3 to 5 hour custom detail at your location",
          ]}
        />
      </div>

      {/* Mobile Services & Packages Section */}
      <div id="services">
        <FeaturesStickyCards
          items={[
            {
              title: "The Deep-Crack Interior Purge",
              description: "Comprehensive interior deep cleaning focusing on hard-to-reach crevices. Includes air vent steam sanitation, seat rail channel degreasing, console seam micro-brushing, hot water carpet extraction, and leather conditioning.",
              primaryButton: { text: "Book Interior Purge", href: "#contact" },
              leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
              rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team1.webp",
            },
            {
              title: "Exterior Crevice & Paint Protection",
              description: "Hand citrus foam bath, emblem/rubber seal brush detailing, wheel well scrub, iron paint decontamination, clay bar smoothing, and 12-month ceramic sealant shield.",
              primaryButton: { text: "Book Exterior Detail", href: "#contact" },
              leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team2.webp",
              rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
            },
            {
              title: "The Ultimate Rozay Signature Detail",
              description: "Our top-tier mobile package combining our deep-crack interior purge with full exterior decontamination, engine bay trim dressing, and hydrophobic glass treatment.",
              primaryButton: { text: "Book Full Detail", href: "#contact" },
              leftImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
              rightImageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team3.webp",
            },
          ]}
        />
      </div>

      {/* Customer Reviews Section */}
      <div id="testimonials">
        <TestimonialMarqueeOverlayCards
          textAnimation="slide-up"
          tag="North Myrtle Beach Reviews"
          title="Loved by Grand Strand Car Owners"
          description="See what local drivers in North Myrtle Beach say about Rozay's attention to detail."
          primaryButton={{ text: "Schedule Your Detail", href: "#contact" }}
          secondaryButton={{ text: "View Services", href: "#services" }}
          testimonials={[
            {
              name: "Marcus Vance",
              role: "Ford F-150 Owner",
              company: "North Myrtle Beach, SC",
              rating: 5,
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial1.webp?_wi=1",
            },
            {
              name: "Brenda Holloway",
              role: "BMW X5 Owner",
              company: "Cherry Grove, SC",
              rating: 5,
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial2.webp",
            },
            {
              name: "Dave Miller",
              role: "Corvette Owner",
              company: "Barefoot Landing, SC",
              rating: 5,
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial3.webp?_wi=2",
            },
            {
              name: "Sarah Jenkins",
              role: "Jeep Wrangler Owner",
              company: "Little River, SC",
              rating: 5,
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial4.webp",
            },
            {
              name: "Robert Taylor",
              role: "Porsche 911 Owner",
              company: "Ocean Drive, SC",
              rating: 5,
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial5.webp",
            },
          ]}
        />
      </div>

      {/* Team / Local Owner Section */}
      <div id="team">
        <TeamOverlayCards
          textAnimation="slide-up"
          tag="Local Owner-Operator"
          title="Dedicated to Meticulous Perfection"
          description="Hands-on detailing experience serving North Myrtle Beach with pride"
          members={[
            {
              name: "Rozay",
              role: "Founder & Master Detailer",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial3.webp?_wi=3",
            },
            {
              name: "Marcus",
              role: "Steam Extraction Specialist",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/testimonials/testimonial1.webp?_wi=2",
            },
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FaqSimple
          textAnimation="slide-up"
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our mobile setup and crevice detailing process"
          items={[
            {
              question: "Where in North Myrtle Beach do you provide mobile service?",
              answer: "We offer complete mobile detailing across North Myrtle Beach, Cherry Grove, Ocean Drive, Windcrest, Barefoot Landing, Little River, and surrounding Horry County communities. We bring our equipment directly to your driveway, condo, or office.",
            },
            {
              question: "How do you clean deep cracks and hard-to-reach spots?",
              answer: "We utilize 220°F commercial dry steam, regulated compressed air purgers, ultra-fine horsehair micro-brushes, and narrow extractor nozzles. This combination safely removes dust, spilled liquids, and coastal sand from air vents, button clusters, console seams, and seat rail channels.",
            },
            {
              question: "What does the 5-stage cleaning process involve?",
              answer: "Our workflow includes: 1) Rinse & citrus foam pre-wash, 2) High-heat interior vent & crack steam extraction, 3) Fine-brush agitation for tight spots & buttons, 4) Deep-fiber carpet sand extraction, and 5) Ceramic UV protection & white-glove inspection.",
            },
            {
              question: "Do I need to provide water or electricity?",
              answer: "We connect to standard residential exterior outlets and water spigots. If you are located at a condo or workplace without direct access, let us know when booking so we can accommodate your setup.",
            },
            {
              question: "Is Rozay's Mobile Detailing locally owned?",
              answer: "Yes! Rozay's Mobile Detailing is 100% locally owned and operated by Rozay in North Myrtle Beach, SC. Every customer gets personalized attention and local small-business care.",
            },
          ]}
        />
      </div>

      {/* Contact & Booking Section */}
      <div id="contact">
        <ContactSplitForm
          textAnimation="slide-up"
          tag="Book Mobile Service"
          title="Schedule Your Mobile Detail in NMB"
          description="Ready to give your vehicle the deep-cleaning treatment it deserves? Fill out the form below or text (843) 555-7692."
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number (for text confirmation)", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "vehicle", type: "text", placeholder: "Vehicle Make & Model (e.g. 2023 Ford F-150)", required: true },
          ]}
          textarea={{ name: "message", placeholder: "Tell us your location in North Myrtle Beach and any specific hard-to-reach spots or interior cracks that need special attention...", rows: 4, required: true }}
          buttonText="Request Appointment"
          videoSrc="https://storage.googleapis.com/webild/default/templates/detailing/contact/cta-video.mp4"
        />
      </div>
    </StyleProvider>
  );
}
