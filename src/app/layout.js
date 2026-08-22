import "../styles/globals.css";
import "../styles/fonts.css";
import SiteLayout from "@/components/common/SiteLayout";
import { createRootMetadata } from "@/lib/seo";
import ScrollToTop from "@/components/common/ScrollToTop";

export const experimental = {
  viewTransition: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        
        <SiteLayout> <ScrollToTop /> {children}</SiteLayout>
      </body>
    </html>
  );
}

export const metadata = createRootMetadata();
