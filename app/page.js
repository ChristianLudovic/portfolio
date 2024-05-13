"use client"

import Experience from "@/components/basis/experience";
import HorizontalDivider from "@/components/basis/horizontalDivider";
import MyStack from "@/components/basis/myStack";
import NavBar from "@/components/basis/navBar";
import Playlist from "@/components/basis/playlist";
import CertificationsSection from "@/components/layouts/certifications";
import EductionSection from "@/components/layouts/education";
import Footer from "@/components/layouts/footer";
import HeroSection from "@/components/layouts/heroSection";
import ProjectSection from "@/components/layouts/projectSection";
import StackExperiencePlaylistSection from "@/components/layouts/stackExperiencePlaylistSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HorizontalDivider />
      <EductionSection />
      <ProjectSection />
      <HorizontalDivider />
      <StackExperiencePlaylistSection />
      <Footer />
    </>
  );
}
