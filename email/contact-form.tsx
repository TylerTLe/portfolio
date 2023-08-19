import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContractFormProps = {
    message: string
    senderEmail: string
}

export default function ContactForm({
    message,
    senderEmail
}: ContractFormProps) {
  return <Html>
    <Head />
    <Preview>New message from portfolio website</Preview>
    <Tailwind>
        <Body className='bg-gray-100 text-black'>
            <Container>
                <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>You received the following message from the contact form</Heading>
                    <Text>{message}</Text>
                    <Hr />
                    <Text>From: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
  </Html>
}
