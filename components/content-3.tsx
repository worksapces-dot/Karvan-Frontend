import { Lightbulb, Pencil, PencilRuler } from 'lucide-react'

export default function Content() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="space-y-4">
                    <h2 className="text-balance font-serif text-4xl font-medium">The Back Office of the Future</h2>
                    <p className="text-muted-foreground">Karvan isn't just another tool; it's a full-time partner for your business. We integrate with your stack to handle the data heavy-lifting.</p>
                </div>
                <div className="@xl:grid-cols-3 mt-12 grid grid-cols-2 gap-6 text-sm">
                    <div className="space-y-3 border-t pt-6">
                        <Lightbulb className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Deep Integration</span> Karvan connects directly to your existing finance and support tools.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <Pencil className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Smart Insights</span> Get real-time financial reporting and operational alerts automatically.
                        </p>
                    </div>

                    <div className="space-y-3 border-t pt-6">
                        <PencilRuler className="text-muted-foreground size-4" />
                        <p className="text-muted-foreground leading-5">
                            <span className="text-foreground font-medium">Tailored Automation</span> Customize how Karvan handles your specific business workflows.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
