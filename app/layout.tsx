import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/inter";
import "@fontsource-variable/lora";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quaresma de São Miguel 2026 | 40 dias de oração",
  description:
    "Participe da Quaresma de São Miguel 2026 com planner espiritual, orações, materiais semanais e grupo de WhatsApp.",
  openGraph: {
    title: "Quaresma de São Miguel — Edição 2026",
    description:
      "Uma jornada de 40 dias com materiais guiados e uma comunidade inteira rezando com você.",
    images: ["/materials/planner-espiritual.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script id="hotmart-checkout-widget" strategy="afterInteractive">
          {`
            function importHotmart() {
              var imported = document.createElement('script');
              imported.src = 'https://static.hotmart.com/checkout/widget.min.js';
              document.head.appendChild(imported);

              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.type = 'text/css';
              link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
              document.head.appendChild(link);
            }

            importHotmart();
          `}
        </Script>
      </body>
    </html>
  );
}
