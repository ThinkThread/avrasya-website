"use client";
import { useEffect, useState } from "react";
import Header from "./Header";
import HeaderModal from "./HeaderModal";

export default function HeaderContainer() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <>
                <HeaderModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </>}
        </>
    )
}