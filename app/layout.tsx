import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Nano SkillUp | Learn. Build. Transform.",
  description: "Career-focused technology training with practical projects and expert guidance."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}