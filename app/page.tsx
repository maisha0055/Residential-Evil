import { HeroSection } from "@/components/hero-section"
import { DownloadSection } from "@/components/download-section"
import { FeaturesSection } from "@/components/features-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <DownloadSection />
      <FeaturesSection />
      <SiteFooter />
    </main>
  )
}
