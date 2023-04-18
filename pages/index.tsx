import { Inter } from "next/font/google";
import Header from "../components/heder";
import Body from "../components/body";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
