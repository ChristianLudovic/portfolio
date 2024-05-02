"use client"

import Experience from "@/components/basis/experience";
import HorizontalDivider from "@/components/basis/horizontalDivider";
import MyStack from "@/components/basis/myStack";
import NavBar from "@/components/basis/navBar";
import Playlist from "@/components/basis/playlist";
import EductionSection from "@/components/layouts/education";
import HeroSection from "@/components/layouts/heroSection";
import StackExperiencePlaylistSection from "@/components/layouts/stackExperiencePlaylistSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HorizontalDivider />
      <EductionSection />
      <StackExperiencePlaylistSection />
    </>
  );
}
