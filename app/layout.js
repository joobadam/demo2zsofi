import { Lato } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { LanguageProvider } from "@/hooks/useLanguage";
import { Footer4 } from "./home/components/Footer4";
import Navbar from "./home/components/Navbar";
import CookieConsent from "@/components/CookieConsent";
import { TwentyFirstToolbar } from "@/components/TwentyFirstToolbar";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

// SEO-optimized metadata (büntetőjog & közlekedési jog fókusz)
export const metadata = {
  title:
    "Dr. Szomor Zsófia Anna | Büntetőjog és Közlekedési jog – Ügyvédi Iroda Budapesten",
  description:
    "Büntetőjogi és közlekedési jogi képviselet Budapesten: ittas vezetés, jogosítvány bevonás, közúti balesetek, büntetőeljárás, gyanúsított- és sértetti képviselet. Személyre szabott jogi tanácsadás és hatékony peres/peren kívüli képviselet.",
  keywords:
    "büntetőjog, közlekedési jog, ittas vezetés, jogosítvány bevonás, közúti baleset, cserbenhagyás, gyorshajtás, büntetőeljárás, gyanúsított képviselet, sértetti képviselet, ügyvéd, Budapest, jogi tanácsadás, Dr. Szomor Zsófia Anna",
  authors: [{ name: "Dr. Szomor Zsófia Anna" }],
  creator: "Dr. Szomor Zsófia Anna",
  publisher: "Dr. Szomor Zsófia Anna Ügyvédi Iroda",
  openGraph: {
    title:
      "Dr. Szomor Zsófia Anna | Büntetőjog és Közlekedési jog – Ügyvédi Iroda Budapesten",
    description:
      "Büntetőjogi és közlekedési jogi szakterület: ittas vezetés, jogosítvány bevonás, közúti balesetek, büntetőeljárás. Lépjen kapcsolatba irodánkkal bizalommal!",
    url: "https://drszomorzsofia.hu",
    siteName: "Dr. Szomor Zsófia Anna Ügyvédi Iroda",
    images: [
      {
        url: "/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Szomor Zsófia Anna ügyvédi iroda",
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dr. Szomor Zsófia Anna | Büntetőjog és Közlekedési jog – Ügyvédi Iroda Budapesten",
    description:
      "Személyre szabott büntetőjogi és közlekedési jogi tanácsadás, peres és peren kívüli képviselet Budapesten.",
    images: ["/images/6930F625-6A63-441B-BA7A-65C232D77FF9.jpeg"],
    creator: "@drszomorzsofia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drszomorzsofia.hu",
    languages: {
      "hu-HU": "https://drszomorzsofia.hu/hu",
      "en-US": "https://drszomorzsofia.hu/en",
    },
  },
};

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body
        className={`${lato.variable} antialiased min-h-screen relative overflow-x-hidden bg-white`}
      >
        {/* MagicUI Flickering Grid Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
        >
          {/* Purple Glow Top */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "#ffffff",
              backgroundImage: `
                radial-gradient(
                  circle at top center,
                  rgba(139, 92, 246, 0.5),
                  transparent 70%
                )
              `,
              filter: "blur(80px)",
              backgroundRepeat: "no-repeat",
            }}
          />
          
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#6B7280"
            maxOpacity={0.15}
            flickerChance={0.05}
          />
        </div>

        <LanguageProvider>
          <LenisProvider>
            <main className="relative z-10">
              <Navbar />
              {children}
            </main>
            <Footer4 />
            <CookieConsent />
            <TwentyFirstToolbar />
          </LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}