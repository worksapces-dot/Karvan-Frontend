import HeroSection from "@/components/hero-section-2"
import LogoCloud from "@/components/logo-cloud-2"
import FeaturesSection from "@/components/features-2"
import ContentSection from "@/components/content-3"
import StatsSection from "@/components/stats-2"
import TeamSection from "@/components/team-2"
import TestimonialsSection from "@/components/testimonials-4"
import CTASection from "@/components/call-to-action-1"
import FooterSection from "@/components/footer-2"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <LogoCloud />
      <FeaturesSection />
      <ContentSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  )
}
