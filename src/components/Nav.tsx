import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button, Image, Link } from "@heroui/react";
import LanguageSwitcher from "./LanguageSwitcher";
import useTranslation from "@/hooks/useTranslation";

export default function Nav() {
  const { t } = useTranslation();
  return (
    <Navbar 
      maxWidth={"2xl"} 
      isBlurred={false}
      position={"static"}
      classNames={{
        base: "bg-transparent",
        content: "bg-transparent",
        item: "bg-transparent",
      }}
      className={"fixed top-0 left-0 w-full z-[20] py-6"}
    >
      <NavbarBrand className="">
        <Button 
          as={Link} 
          radius={"none"}
          href="/" 
          startContent={<Image src="/waveful-app.png" alt="Waveful" className={"block bg-transparent h-16"} />}
          className="text-4xl py-12 bg-transparent text-default-900 font-semibold"
        >
          <span className="hidden md:inline font-cocogoose">Waveful</span>
        </Button>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as={Link} 
            radius={"lg"}
            href="https://waveful.com/download"
            size={"lg"}
            className="py-8 text-xl font-semibold text-default-100 bg-default-900"
          >
            {t('home.downloadApp')}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}