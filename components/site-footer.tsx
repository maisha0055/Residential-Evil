export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-serif text-2xl text-primary tracking-wide">
          Residential Evil
        </p>
        <nav className="flex gap-8" aria-label="Footer navigation">
          <a
            href="#download"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Download
          </a>
          <a
            href="#controls"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Controls
          </a>
          <a
            href="https://github.com/maisha0055/Residential-Evil"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </nav>
        <p className="text-sm text-muted-foreground">
          {'© 2026 Residential Evil. All rights reserved.'}
        </p>
      </div>
    </footer>
  )
}
