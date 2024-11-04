"use client";
import React, { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { AlignRight, ChevronDown, XIcon } from "lucide-react";
import ServicesDropdown from "../ui/marketing/ServicesDropdown";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ["about", "blog", "gallery"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <p className="ml-2 font-serif text-inherit tracking-wide">
              Care Clinics
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6 uppercase font-sans text-[15px]"
        justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link className="text-inherit" href={`/${item}`}>
              {item}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <Suspense fallback={<></>}>
            <ServicesDropdown />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-myRed-100  text-myRed-800 rounded-3xl font-bold"
            href="/appointments"
            variant="flat">
            Book an Appointment
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="text-2xl text-inherit capitalize font-serif text-myYellow-600 tracking-wider">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href={`/${item}`} size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Suspense fallback={<></>}>
            <ServicesDropdown />
          </Suspense>
        </NavbarMenuItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-turqoise-600 text-white rounded-3xl mt-6"
            href="/appointments"
            variant="flat">
            Book an Appointment
          </Button>
        </NavbarItem>
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsMenuOpen((v) => !v)}
        className="text-fill-inherit sm:hidden focus:outline-none"
        icon={
          isMenuOpen ? (
            <XIcon className="text-turqoise-600" />
          ) : (
            <AlignRight className="text-turqoise-800" />
          )
        }
      />
    </Navbar>
  );
}
