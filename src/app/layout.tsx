import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import cn from "classnames";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { BuilderHeader } from "./_components/builder-header";
import { BuilderFooter } from "./_components/builder-footer";

import "./styles/scss/globals.scss";

const inter = Inter({ subsets: ["latin"] });

const title = `Civic Tech Exit Interviews`;
const description = `TODO`;

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL("https://todo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: title,
    title: title,
    description:
      description,
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  other: {
    "pinterest-rich-pin": "true",
    "fb:app_id": "",
    "og:video": "",
    "og:image:type": "image/jpeg",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:site_name": title,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script defer data-domain="wethebuilders.org" src="https://plausible.io/js/script.js" />
        <Script>
          {`window.plausible = window.plausible || function() {(window.plausible.q = window.plausible.q || []).push(arguments)}`}
        </Script>
      </head>
      <body className={cn(inter.className)}>
        <BuilderHeader />
        {children}
        <BuilderFooter />
      </body>
    </html>
  );
}
