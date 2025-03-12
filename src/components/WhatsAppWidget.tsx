"use client";

import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+918090848008"
      accountName="Paras LED Light"
      darkMode
      avatar="/logo/logo-icon.png"
    />
  );
};

export default WhatsAppWidget;
