import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chinnara Chilipili – 25 Years of Summer Camp",
  description:
    "Chinnara Chilipili is a children’s summer camp celebrating 25 years of learning, teamwork, yoga, sports, drawing, and joyful memories in Mangalore.",

  openGraph: {
    title: "Chinnara Chilipili – 25 Years of Summer Camp",
    description:
      "A trusted children’s summer camp with 25 years of adventure, learning, and unforgettable memories.",
    url: "https://chinnara-chilipili-frontend.vercel.app",
    siteName: "Chinnara Chilipili",
    images: [
      {
        url: "https://chinnara-chilipili-frontend.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chinnara Chilipili Summer Camp – 25 Years",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chinnara Chilipili – Summer Camp",
    description:
      "Celebrating 25 years of childhood adventure, learning, and growth.",
    images: ["https://chinnara-chilipili-frontend.vercel.app/twitter-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
