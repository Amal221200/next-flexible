import Image from "next/image"
import Link from "next/link"
import React from "react"
import { NavLinks } from "@/constants"
import AuthProviders from "./AuthProviders"

const Header = () => {
  const session = null;

  return (
    <header className="flex-between header">
      <div className="flex-1 flex-start gap-10">
        <Link href={'/'}>
          <Image src="/logo.svg" width={115} height={43} alt="logo" />
        </Link>
        <nav className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-center gap-4">
        {session ?
          <>
            UserPhoto

            <Link href="/create-project">Share Work</Link>
          </> :
          <>
            <AuthProviders />
          </>
        }
      </div>
    </header>
  )
}
export default Header