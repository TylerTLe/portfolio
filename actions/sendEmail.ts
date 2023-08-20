"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactForm from "@/email/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

// Server side validation
  if (!validateString(senderEmail, 500)) {
    return {
        error: "Invalid email"
    }
  }
  if (!validateString(message, 5000)) {
    return {
        error: "Invalid message"
    }
  }

  let data;
  try {
    data = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "tylertle00@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactForm, {
            message: message as string,
            senderEmail: senderEmail as string
        })
      });
  } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      }
    }

    return {
      data,
    };
};
