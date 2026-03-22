import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'

export default function CallToAction() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium sm:text-5xl">Stop Doing the Busywork. Start Growing.</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Join hundreds of SMBs who have automated their back-office with Karvan. Hire your AI agent today.</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <Button
                            asChild
                            className="pr-1.5">
                            <Link href="#link">
                                <span className="text-nowrap">Hire Your AI Agent</span>
                                <ChevronRight className="opacity-50" />
                            </Link>
                        </Button>
                        <Button
                            variant="secondary"
                            asChild>
                            <Link href="#link">Talk to Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
