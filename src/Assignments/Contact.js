import React from "react";
import ContactCard from "./ContactCard";

const contacts = [
  {
    name: "Aditya Thorve",
    email: "thorveaditya111@gmail.com",
    phone: "9322790131",
    address: "Junnar, Maharashtra",
  }
];

function Contact() {
    return (
        <div className="contact-list">
            <h1>Contact List</h1>
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    name={contact.name} 
                    email={contact.email}
                    phone={contact.phone}
                    address={contact.address}
                />
            ))}
        </div>
    );
}

export default Contact;