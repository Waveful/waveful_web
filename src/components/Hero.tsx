import React from "react";

// HeroUI
import { Button, Image, Link } from "@heroui/react";
import { motion } from "framer-motion";

// Icons
import { FaApple, FaInstagram } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { SiGoogleplay } from 'react-icons/si';

// Translation and Language
import useTranslation from "@/hooks/useTranslation";
import { useLanguage } from '@/contexts/LanguageContext';


export default function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const videoSources = [
    "/videos/creator_000.mp4",
    "/videos/creator_001.mp4",
    "/videos/creator_002.mp4",
    "/videos/creator_003.mp4",
    "/videos/creator_004.mp4",
    "/videos/creator_005.mp4",
    "/videos/creator_006.mp4",
    "/videos/creator_007.mp4",
    "/videos/creator_008.mp4",
    "/videos/creator_009.mp4",
    "/videos/creator_010.mp4",
    "/videos/creator_011.mp4",
    "/videos/creator_012.mp4",
    "/videos/creator_013.mp4",
    "/videos/creator_014.mp4",
    "/videos/creator_015.mp4",
    "/videos/creator_016.mp4",
    "/videos/creator_017.mp4",
    "/videos/creator_018.mp4",
    "/videos/creator_019.mp4",
    "/videos/creator_020.mp4",
    "/videos/creator_021.mp4",
    "/videos/creator_022.mp4",
    "/videos/creator_023.mp4",
  ];

  return (
    <>
    <section className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background grid of auto-scrolling vertical videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="px-2 md:px-4 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full h-full">
          {(() => {
            const shuffled = [...videoSources].sort(() => Math.random() - 0.5);
            const selected = shuffled.slice(0, 16);
            return [0, 1, 2, 3].map((col) => {
              const firstSrc = selected[col * 4];
              const secondSrc = selected[col * 4 + 1];
              const thirdSrc = selected[col * 4 + 2];
              const fourthSrc = selected[col * 4 + 3];
            return (
            <div key={col} className={`relative h-full overflow-hidden ${col >= 2 ? 'hidden md:block' : ''}`}>
              <motion.div
                className="absolute inset-x-0 top-0 h-[300%]"
                initial={{ y: "0%" }}
                animate={{ y: ["0%", "-66.67%"] }}
                transition={{
                  duration: col % 4 === 0 ? 12 : col % 4 === 1 ? 15 : col % 4 === 2 ? 18 : 21,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: col * 0.3,
                }}
              >
                <div className="h-1/4 py-2">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={firstSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="h-1/4 py-2">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={secondSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="h-1/4 py-2">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={thirdSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
                <div className="h-1/4 py-2">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    src={fourthSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                </div>
              </motion.div>
            </div>
            );
            });
          })()}
        </div>
      </div>

      <div aria-hidden className="absolute inset-0 bg-black/50 z-[1]" />

      <div className={"flex flex-col"}>
      <h1 className="relative z-[2] text-5xl md:text-4xl lg:text-6xl font-semibold leading-tight px-6">
        {t('hero.title')}
      </h1>

      <div className="relative z-[2] mt-6 flex flex-wrap items-center justify-center gap-3 px-4">
        <Button
          as={Link}
          href="https://apps.apple.com/us/app/waveful-become-a-creator/id1532913255"
          isExternal
          rel="noopener noreferrer"
          radius={"lg"}
          size={"lg"}
          className="w-56 h-20 flex items-center gap-3 border border-default-100 bg-black/60 hover:bg-black/80 text-left backdrop-blur transition-colors"
          startContent={<FaApple className="h-12 w-12" />}
        >
          <span className="flex flex-col leading-tight text-left">
            <span className="text-sm opacity-80">{t('hero.appStore.download')}</span>
            <span className="text-lg font-medium">{t('hero.appStore.name')}</span>
          </span>
        </Button>
        <Button
          as={Link}
          href="https://play.google.com/store/apps/details?id=app.waveful"
          isExternal
          rel="noopener noreferrer"
          radius={"lg"}
          size={"lg"}
          className="w-56 h-20 flex items-center gap-3 border border-default-100 bg-black/60 hover:bg-black/80 text-left backdrop-blur transition-colors"
          startContent={<SiGoogleplay className="h-12 w-12" />}
        >
          <span className="flex flex-col leading-tight text-left">
            <span className="text-sm opacity-80">{t('hero.playStore.download')}</span>
            <span className="text-lg font-medium">{t('hero.playStore.name')}</span>
          </span>
        </Button>
      </div>
      </div>

      <div className="absolute bottom-4 z-[2] flex flex-wrap items-center justify-center gap-3 px-4">
        <Button
          as={Link}
          href="https://help.waveful.com"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          {t('hero.contactUs')}
        </Button>

        <Button
          as={Link}
          href="/legal"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          {t('hero.legal')}
        </Button>

        <Button
          as={Link}
          href="/legal/cookies"
          className="rounded-full bg-white/10 hover:bg-white/20 text-sm backdrop-blur transition-colors"
        >
          {t('hero.cookiePolicy')}
        </Button>

        <Button
          as={Link}
          href="https://www.tiktok.com/@waveful.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
          startContent={
            <FaTiktok className="h-5 w-5" />
          }
        />

        <Button
          as={Link}
          href="https://www.instagram.com/waveful"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
          startContent={
            <FaInstagram className="h-5 w-5" />
          }
        />

        <Button
          as={Link}
          href="https://www.waveful.app/accounts/Waveful"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Waveful"
          className="rounded-full bg-white/10 hover:bg-white/20 p-2 backdrop-blur transition-colors"
          startContent={
            <Image src={"/waveful-app.png"} alt="Waveful Logo" className={"h-6 x-6 hover:cursor-pointer"} />
          }
        />

        <a
          href="https://scrapegraphai.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-hidden="true"
          tabIndex={-1}
          style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}
        >
          sponsors
        </a>

        {/* LEGACY: ONLY ITALY! */}
        {language === 'it' && (
          <Button className="w-48 p-0 bg-transparent">
                <Image 
                  src="/italy/logo_region.png" 
                  alt="Regione Italiana" 
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
          </Button>
        )}
      </div>

    </section>
    
    </>
  );
}


