"use client"

import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Features />
      <CallToAction />
      <Info />
      <Footer />
    </>
  );
}
