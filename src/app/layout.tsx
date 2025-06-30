import "./css/style.css";
import { Metadata } from "next";
import { getSeoSettings } from "@/get-api-data/seo-setting";

export async function generateMetadata(): Promise<Metadata> {
  const seoSettings = await getSeoSettings();

  return {
    title: `${seoSettings?.title || "Home Page"} | ${seoSettings?.siteName || ""}`,
    description: "Cozy-commerce is a next.js e-commerce boilerplate built with nextjs, typescript, tailwindcss, and prisma.",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
