import { useState } from "react";
import { Phone, Mail, Tag as TagIcon, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { sendContactEmail } from "@/lib/api/email";

type InputField = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type TextareaField = {
  name: string;
  placeholder: string;
  rows?: number;
  required?: boolean;
};

type ContactSplitFormProps = {
  tag: string;
  title: string;
  description: string;
  phone?: string;
  phoneLabel?: string;
  email?: string;
  emailLabel?: string;
  freeQuotesNote?: string;
  inquiriesNote?: string;
  inputs: InputField[];
  textarea?: TextareaField;
  buttonText: string;
  onSubmit?: (data: Record<string, string>) => void;
  textAnimation: "slide-up" | "fade-blur" | "fade";
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const ContactSplitForm = ({
  tag,
  title,
  description,
  phone,
  phoneLabel,
  email,
  emailLabel,
  freeQuotesNote,
  inquiriesNote,
  inputs,
  textarea,
  buttonText,
  onSubmit,
  imageSrc,
  videoSrc,
  textAnimation,
}: ContactSplitFormProps) => {
  const [formData, setFormData] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    inputs.forEach((input) => {
      initial[input.name] = "";
    });
    if (textarea) {
      initial[textarea.name] = "";
    }
    return initial;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await sendContactEmail({ formData });
      onSubmit?.(formData);
      const reset: Record<string, string> = {};
      inputs.forEach((input) => {
        reset[input.name] = "";
      });
      if (textarea) {
        reset[textarea.name] = "";
      }
      setFormData(reset);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 card rounded">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
                  <p>{tag}</p>
                </div>

                <TextAnimation
                  text={title}
                  variant={textAnimation}
                  gradientText={true}
                  tag="h2"
                  className="text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-balance"
                />

                <TextAnimation
                  text={description}
                  variant={textAnimation}
                  gradientText={false}
                  tag="p"
                  className="text-lg md:text-xl leading-snug text-balance"
                />
              </div>

              {(phone || email || freeQuotesNote || inquiriesNote) && (
                <div aria-label="Contact information" className="w-full p-4 md:p-5 card rounded flex flex-col gap-3 text-left border border-accent/20 bg-accent/5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                    <Phone className="size-4" />
                    <span>Contact Information & Direct Booking</span>
                  </div>

                  {phone && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 card rounded bg-card/70">
                      <div>
                        <p className="text-xs text-foreground/70">{phoneLabel || "Call or Text for Booking Appointments"}</p>
                        <a
                          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                          className="text-2xl md:text-3xl font-bold text-accent hover:underline inline-flex items-center gap-2 mt-0.5"
                        >
                          {phone}
                        </a>
                      </div>
                      <a
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="px-4 py-2 text-xs font-semibold primary-button text-primary-cta-text rounded text-center shrink-0 self-start sm:self-center"
                      >
                        Call Now
                      </a>
                    </div>
                  )}

                  {email && (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 card rounded bg-card/70">
                      <div>
                        <p className="text-xs text-foreground/70">{emailLabel || "Email Direct Inquiries"}</p>
                        <a
                          href={`mailto:${email}`}
                          className="text-base md:text-lg font-bold text-accent hover:underline inline-flex items-center gap-2 mt-0.5 break-all"
                        >
                          <Mail className="size-4 shrink-0" />
                          {email}
                        </a>
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="px-4 py-2 text-xs font-semibold secondary-button rounded text-center shrink-0 self-start sm:self-center"
                      >
                        Send Email
                      </a>
                    </div>
                  )}

                  {(freeQuotesNote || inquiriesNote) && (
                    <div className="flex flex-col gap-2 pt-1 text-sm text-foreground/90">
                      {freeQuotesNote && (
                        <div className="flex items-start gap-2">
                          <TagIcon className="size-4 text-accent shrink-0 mt-0.5" />
                          <span>{freeQuotesNote}</span>
                        </div>
                      )}
                      {inquiriesNote && (
                        <div className="flex items-start gap-2">
                          <HelpCircle className="size-4 text-accent shrink-0 mt-0.5" />
                          <span>{inquiriesNote}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col gap-3">
                {inputs.map((input) => (
                  <input
                    key={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={formData[input.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [input.name]: e.target.value })}
                    required={input.required}
                    aria-label={input.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none card rounded"
                  />
                ))}

                {textarea && (
                  <textarea
                    placeholder={textarea.placeholder}
                    value={formData[textarea.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [textarea.name]: e.target.value })}
                    required={textarea.required}
                    rows={textarea.rows || 5}
                    aria-label={textarea.placeholder}
                    className="w-full px-5 py-3 text-base bg-transparent placeholder:opacity-75 focus:outline-none resize-none card rounded"
                  />
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center w-full h-10 px-6 text-sm primary-button text-primary-cta-text rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : buttonText}
                </button>

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}
              </div>
            </form>
          </div>

          <div className="h-100 md:h-auto card rounded overflow-hidden">
            <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className="size-full object-cover rounded" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSplitForm;
