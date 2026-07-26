const controls = [
  { key: "SPACE", action: "Start Game / Shoot" },
  { key: "V", action: "Reload Ammo" },
  { key: "F", action: "Toggle Flashlight" },
  { key: "W A S D", action: "Move Mono" },
  { key: "ARROWS", action: "Adjust Camera" },
  { key: "E", action: "Toggle Camera" },
  { key: "K", action: "Reveal Entire Map" },
  { key: "P", action: "Wins when red door appears" },
]

export function FeaturesSection() {
  return (
    <section id="controls" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Controls
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-6xl tracking-wide">
            How to Play
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {controls.map((control) => (
            <div
              key={control.key}
              className="group flex items-center gap-4 rounded-none border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent"
            >
              <kbd className="flex min-w-[80px] items-center justify-center rounded-none border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-sm font-bold text-primary">
                {control.key}
              </kbd>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {control.action}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 border border-border bg-card px-8 py-4">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              {'Press'}
            </span>
            <kbd className="rounded-none border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-sm font-bold text-primary">
              E
            </kbd>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              {'to start the game'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
