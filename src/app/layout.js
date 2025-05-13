import Footer from "@/constant/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/constant/Navbar/Header";
import BottomBar from "@/constant/BottomBar/BottomBar";
import WhatsApp from "@/constant/FAB/WhatsApp";
import Head from "next/head";
import ScrollIndicator from "@/components/ScrollIndicator"; // 👈 Import the scroll bar

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Intelgency IT Solutions",
  description:
    "All digital marketing services, seo, smo, PPC, web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="fl-verify" content="9be66eef7379e3946a735731ecf2c665" />
      </Head>
      <body className={poppins.className}>
        <ScrollIndicator /> {/* 👈 Add it at the top of the body */}
        <Header />
        {children}
        <BottomBar />
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
