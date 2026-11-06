import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resolveIcon } from "@/utils/resolve-icon";

export interface ServiceItem {
  title: string;
  category: "Mobile Detailing" | "Pressure Washing";
  description: string;
  highlight: string;
  icon: string;
  imageSrc: string;
}

interface FullServiceRangeProps {
  tag?: string;
  title?: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  textAnimation?: "slide-up" | "fade-blur" | "fade";
  services?: ServiceItem[];
}

const DEFAULT_SERVICES: ServiceItem[] = [
  {
    title: "Cars",
    category: "Mobile Detailing",
    description: "Deep vent steam sanitation, citrus foam pre-wash, and ceramic UV protection tailored for luxury sedans, coupes, and daily drivers.",
    highlight: "Showroom Finish",
    icon: "Car",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3LfZxSnU9hSlEaOYXn1eBLHqAHe/uploaded-1793989721196-beg48vh9.jpg",
  },
  {
    title: "Trucks",
    category: "Mobile Detailing",
    description: "Heavy-duty cab purging, seat rail channel sand extraction, and durable sealant engineered for work trucks and family SUVs.",
    highlight: "Deep Crevice Purge",
    icon: "Truck",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/detailing/features/features2.webp",
  },
  {
    title: "Decks",
    category: "Pressure Washing",
    description: "Calibrated pressure wash safely removing coastal mildew, salt crust, and algae build-up from wood and composite decking.",
    highlight: "Wood & Deck Renewal",
    icon: "Layers",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/landscaping/img-6.jpg",
  },
  {
    title: "Houses",
    category: "Pressure Washing",
    description: "Soft-wash home exterior revival for vinyl siding, brick, driveways, and porches that dramatically boosts curb appeal.",
    highlight: "Exterior Revival",
    icon: "Home",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/real-estate/properties/property1.webp",
  },
  {
    title: "Boats",
    category: "Pressure Washing",
    description: "Specialized marine pressure wash eliminating waterline algae, salt deposits, and deck residue to keep your watercraft sea-ready.",
    highlight: "Marine Scum Purge",
    icon: "Anchor",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/hotel/journeys/marinesacntuary.webp",
  },
];

const FullServiceRange = ({
  tag = "Roosevelt Gerald • Complete Service Lineup",
  title = "Expert Detailing & Precision Pressure Washing",
  description = "From high-end auto detailing for cars and trucks to professional pressure washing for decks, houses, and boats—Roosevelt Gerald delivers white-glove quality care straight to your driveway.",
  primaryButton = { text: "Book Mobile Service", href: "#contact" },
  secondaryButton = { text: "View 4-Stage Process", href: "#process" },
  textAnimation = "slide-up",
  services = DEFAULT_SERVICES,
}: FullServiceRangeProps) => {
  return (
    <section aria-label="Roosevelt Gerald Full Service Range" className="py-16 md:py-20">
      <div className="flex flex-col gap-10 md:gap-12 w-content-width mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="px-3.5 py-1 mb-1 text-sm card rounded w-fit font-medium tracking-wide">
            <p>{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-9/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold font-serif leading-[1.15] text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-8/10 text-base sm:text-lg md:text-xl leading-relaxed text-balance text-foreground/80"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {primaryButton && (
                <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />
              )}
              {secondaryButton && (
                <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
              )}
            </div>
          )}
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-stretch">
          {services.map((item, index) => {
            const IconComponent = resolveIcon(item.icon);
            return (
              <ScrollReveal
                variant="slide-up"
                delay={index * 0.08}
                key={item.title}
                className="card rounded p-0 overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Thumbnail Image */}
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <ImageOrVideo
                    imageSrc={item.imageSrc}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[11px] font-semibold rounded card backdrop-blur-md uppercase tracking-wider text-primary">
                    {item.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col justify-between flex-1 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded card text-primary">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold font-serif leading-tight">{item.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight Tag */}
                  <div className="pt-2 border-t border-border/40">
                    <span className="inline-flex items-center text-[11px] font-semibold text-primary">
                      ✓ {item.highlight}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FullServiceRange;
