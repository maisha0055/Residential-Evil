import { Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section id="download" className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Subtle glow behind button area */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[300px] w-[300px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Get the Game
        </p>
        <h2 className="font-serif text-4xl text-foreground md:text-6xl tracking-wide">
          Download Now
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Face the darkness. Explore the unknown. Try not to look away.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="gap-3 rounded-none border border-primary bg-primary/10 px-12 py-7 text-base font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <a
              href="https://drive.google.com/file/d/1jAdApBwMy40bjd7zf8IGDP8VQp7ca7b6/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-5 w-5" />
              Download
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-3 rounded-none border border-primary/50 bg-transparent px-12 py-7 text-base font-semibold uppercase tracking-widest text-primary transition-all hover:bg-primary/20 hover:border-primary"
          >
            <a
              href="https://drive.google.com/file/d/19_qE766Ah0q06gMmPCfeAHiqu9_7PndP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="h-5 w-5" />
              Demo Video
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
