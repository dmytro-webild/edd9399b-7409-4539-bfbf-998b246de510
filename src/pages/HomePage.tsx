import { StyleProvider } from "@/components/ui/StyleProvider";
import HeroBillboardFeatures from "@/components/sections/hero/HeroBillboardFeatures";
import FullServiceRange from "@/components/sections/features/FullServiceRange";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import FeaturesComparison from "@/components/sections/features/FeaturesComparison";
import FeaturesDetailedCards from "@/components/sections/features/FeaturesDetailedCards";
import FeaturesStickyCards from "@/components/sections/features/FeaturesStickyCards";
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
        secondaryButton={{ text: "View Full Service Range", href: "#full-service" }}
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

      {/* Roosevelt Gerald Full Service Range Section */}
      <div id="full-service">
        <FullServiceRange />
      </div>

      {/* 4-Stage Cleaning Workflow Section */}
      <div id="process">
        <FeaturesDetailedSteps
          tag="Step-by-Step Detailing Workflow"
          title="Our 4-Stage Deep-Cleaning Process"
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
              imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1793989721196-beg48vh9.jpg?_wi=2",
            },
            {
              tag: "Stage 02",
              title: "Fine-Brush Agitation for Hard-to-Reach Spots",
              subtitle: "Delicate micro-brushing for buttons, dials & steering wheel seams",
              description: "Using soft horsehair and ultra-fine synthetic detailing brushes, Rozay meticulously agitates every steering wheel button, climate control dial, door handle recess, and emblem surround where standard microfiber towels cannot reach.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1793990120999-2ldrg0jv.png",
            },
            {
              tag: "Stage 03",
              title: "Deep Soil Extraction & Rinse",
              subtitle: "Lifting embedded North Myrtle Beach sand & deep fibers",
              description: "Commercial-grade pressure washing, tuned to cause no harm to the paint or exterior of your vehicle. Caution is very important; this is almost the finishing touch.",
              imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1793990566153-x90dncmg.jpg",
            },
            {
              tag: "Stage 04",
              title: "Ceramic UV Protection & Multi-Point Inspection",
              subtitle: "Non-greasy matte shield & white-glove quality pass",
              description: "We coat the outside with a UV-Blocking matte Protectant to withstand the South Carolina Sunshine. It adds a finishing touch to the outside of the vehicle that stands out and protects the paint from wear and tear up to 6 months.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/team/team3.webp",
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

      {/* Inside Detail to Perfection Section */}
      <div id="inside-detail">
        <FeaturesDetailedCards
          tag="Precision Interior Craftsman Work"
          title="Inside Detail to Perfection"
          description="Every cabin contour, vent seam, and leather stitch is restored using high-heat steam, micro-brush agitation, and premium matte protection."
          primaryButton={{ text: "Reserve Interior Detail", href: "#contact" }}
          textAnimation="slide-up"
          items={[
            {
              title: "Air Vent & Climate Duct Sanitation",
              description: "220°F commercial dry steam sterilizes air vents and flushes out trapped dust, mold, and coastal humidity odors for fresh, clean cabin air.",
              tags: ["Steam Sanitation", "Odor Purge", "Allergen-Free Air"],
              imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/feature1.webp",
            },
            {
              title: "Console & Seat Rail Deep Crevice Purge",
              description: "High-pressure air streams and specialized micro-brushes dislodge embedded sand, crumbs, and debris from seat rail channels and button clusters.",
              tags: ["Crevice Specialist", "Sand Extraction", "Micro-Brushing"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1793999942776-irxpujet.jpg",
            },
            {
              title: "Leather Conditioning and Shiny Finish",
              description: "pH-neutral formulas deep-clean leather grain and apply a non-greasy UV barrier to protect seats and dash panels against harsh South Carolina sunshine.",
              tags: ["UV Protection", "Non-Greasy Matte Shield", "Leather Care"],
              imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1794000556274-qy73x0sm.jpg",
            },
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
              leftImageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1794000556274-qy73x0sm.jpg",
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
              question: "What does the 4-stage cleaning process involve?",
              answer: "Our workflow includes: 1) Rinse & citrus foam pre-wash, 2) Fine-brush agitation for tight spots & buttons, 3) Deep soil extraction & rinse, and 4) Ceramic UV protection & white-glove inspection.",
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
          description="Ready to give your vehicle the deep-cleaning treatment it deserves? Call 843-516-0826 or email rozay3020@gmail.com to request your detail."
          phone="843-516-0826"
          phoneLabel="Direct Line for Booking Appointments"
          email="rozay3020@gmail.com"
          emailLabel="Direct Email Address"
          freeQuotesNote="Free quotes are available on all mobile detailing services."
          inquiriesNote="Visitors are welcome to call or email at any time for questions or pricing inquiries."
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
