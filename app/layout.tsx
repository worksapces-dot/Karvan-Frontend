import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  metadataBase: new URL("https://karavan-frontend.vercel.app"), // Replace with your actual domain
  title: {
    default: "Karvan | The AI Backbone for Your SMB",
    template: "%s | Karvan",
  },
  description: "Automate your Support, Finance, and Operations with Karvan, the autonomous AI agent built to help small businesses thrive.",
  keywords: ["AI agent", "SMB automation", "autonomous back office", "finance AI", "support AI", "Karvan AI"],
  openGraph: {
    title: "Karvan | The AI Backbone for Your SMB",
    description: "The autonomous AI agent that runs your SMB back-office. Support, Finance, and Ops on autopilot.",
    url: "https://karavan-frontend.vercel.app",
    siteName: "Karvan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karvan | The AI Backbone for Your SMB",
    description: "Automate your SMB back-office with Karvan. The agent that handles Support, Finance, and Ops.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
