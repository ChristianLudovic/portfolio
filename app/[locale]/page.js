"use client"
import "./globals.css";
import HorizontalDivider from "@/components/basis/horizontalDivider";
import NavBar from "@/components/basis/navBar";
import EductionSection from "@/components/layouts/education";
import Footer from "@/components/layouts/footer";
import HeroSection from "@/components/layouts/heroSection";
import ProjectSection from "@/components/layouts/projectSection";
import StackExperiencePlaylistSection from "@/components/layouts/stackExperiencePlaylistSection";
import { useI18n, getScopedI18n } from '@/locales/client';

export default async function Home() {
  const t = await useI18n()
  return (
    <>
    <div className="relative bg-black"> 
      <div className="body-wrapper max-sm:rounded-b-[80px]">
        <div className="body-wrapper-content">
          <NavBar />
          <HeroSection t={t} />
          <HorizontalDivider />
          <EductionSection t={t}/>
          <ProjectSection t={t}/>
          <HorizontalDivider />
          <StackExperiencePlaylistSection t={t} />
        </div>
      </div>
      <Footer t={t}/>
    </div>
    
    </>
  );
}
