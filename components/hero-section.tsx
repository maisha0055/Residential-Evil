import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <h1 className="font-serif text-6xl text-primary md:text-8xl lg:text-9xl tracking-wide">
          Residential Evil
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Surviving is challenging if your gaze drifts
        </p>
      </div>

      <a
        href="#download"
        className="relative z-10 mt-20 flex flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to download"
      >
        <span className="text-xs uppercase tracking-widest">Enter</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>

      {/* Decorative bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
