"use client"
import "./globals.css";
import Experience from "@/components/basis/experience";
import HorizontalDivider from "@/components/basis/horizontalDivider";
import MyStack from "@/components/basis/myStack";
import NavBar from "@/components/basis/navBar";
import Playlist from "@/components/basis/playlist";
import EductionSection from "@/components/layouts/education";
import Footer from "@/components/layouts/footer";
import HeroSection from "@/components/layouts/heroSection";
import ProjectSection from "@/components/layouts/projectSection";
import StackExperiencePlaylistSection from "@/components/layouts/stackExperiencePlaylistSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="relative bg-black"> 
      <div className="body-wrapper max-sm:rounded-b-[80px]">
        <div className="body-wrapper-content">
          <NavBar />
          <HeroSection />
          <HorizontalDivider />
          <EductionSection />
          <ProjectSection />
          <HorizontalDivider />
          <StackExperiencePlaylistSection />
        </div>
      </div>
      <Footer />
    </div>
    
    </>
  );
}
