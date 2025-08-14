"use client"


import Header from "@/components/dashboardComponent/header";
import PinkCircleBg from "@/components/dashboardComponent/pinkBackground";
import HeroHeader from "@/components/dashboardComponent/heroSection";
// import FeatureCapsules from "@/components/dashboardComponent/featureCapsule";
import LuxuryServicesBanner from "@/components/dashboardComponent/luxuryService";
import SectionHeading from "@/components/dashboardComponent/sectionHeading";
import NewProductsGrid from "@/components/dashboardComponent/NewProduct";
import AboutBlock from "@/components/dashboardComponent/about";
// import BookingSummary from "@/components/dashboardComponent/bookingSummary";
import OutlinedButton from "@/components/dashboardComponent/outlinedButton";
import TestimonialSection  from "@/components/dashboardComponent/TestimonialSection";
import Footer from "@/components/dashboardComponent/footer";
import { playfairDisplay } from "@/app/fonts";


export default function DashboardPage() {
  return (
    <main className="relative mx-auto max-w-7xl px-6 ">
     
      <PinkCircleBg />
       
     
      {/* GRID: content + right summary */}
      <div className="space-y-8">
         <Header/>
       
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 space-y-8">
          
          <HeroHeader />

          <AboutBlock />

          <LuxuryServicesBanner />

          <section className={`${playfairDisplay.className} space-y-6`}>
            <SectionHeading  title="New Products / Services" cta={<OutlinedButton href="/Category">View all</OutlinedButton>} />
            <NewProductsGrid />
          </section>

          <TestimonialSection/>
          <Footer/>
        </div>

      </div>
    </main>
  );
}