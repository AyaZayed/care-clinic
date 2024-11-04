import React from "react";
import {
  name,
  phone1,
  email,
  facebook,
  youtube,
  instagram,
  address,
} from "@/utils/constants";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import footerShape from "@/public/footer-bg-cropped.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-[#6f352d] text-myBeige-300">
      {/* <div className="footer-shape relative">
        <Image
          src={footerShape}
          alt="desert landscape"
          className="absolute top-0 right-0 h-[390px]"
        />
      </div> */}
      <div className="footer-content bg-[#6f352d] w-full h-fit p-10">
        <h2 className="text-[38px] text-myWhite">{name}</h2>
        <div className="footer-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="col col-1">
            <h3 className="text-myWhite">Questions?</h3>
            <a href="tel:{phone1}">{phone1}</a>
            <a href="mailto:{email}">{email}</a>
            <p>{address}</p>
            <div className="social-icons">
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                <Youtube />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </div>
            <a href="/contact">Contact us</a>
          </div>
          <div className="col col-2">
            <h3 className="text-myWhite">Navigation</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="col col-3">
            <Button color="primary" href="/contact">
              Schedule Your Visit
            </Button>
          </div>
        </div>
        <div className="links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/medical-disclaimer">Medical Disclaimer</a>
        </div>
        <p>© {name} 2024</p>
      </div>
    </footer>
  );
}
