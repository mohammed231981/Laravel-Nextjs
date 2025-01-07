"use client";

import { useEffect, useState } from "react";

import { VerlofModal } from "@/components/modals/verlof/VerlofModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <VerlofModal />
     
    </>
  )
}