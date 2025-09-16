import React from "react";


const ContactCard = ({ name, email, phone, address }) => {
    return (
        <div className="contact-card">
            <h2>{name}</h2>
            
             <b><p><strong>Name:</strong>Aditya Thorve {name}</p>
            <p><strong>Email:</strong>thorveaditya111@gmail.com {email}</p>
            <p><strong>Phone:</strong>9322790131{phone}</p>
            <p><strong>Address:</strong>Junnar,Maharashtra {address}</p>
            

                <h2>{name}</h2>
             <p><strong>Name:</strong>Dipak Mundhe {name}</p>
            <p><strong>Email:</strong>dipakmundhe111@gmail.com {email}</p>
            <p><strong>Phone:</strong>8468943682{phone}</p>
            <p><strong>Address:</strong>Junnar,Maharashtra {address}</p>

            <h2>{name}</h2>
             <p><strong>Name:</strong>Sagar Tayade {name}</p>
            <p><strong>Email:</strong>sagartayade111@gmail.com {email}</p>
            <p><strong>Phone:</strong>8483913495{phone}</p>
            <p><strong>Address:</strong>Nagpur,Maharashtra {address}</p>
            </b>
            


        </div>
    );
};  

export default ContactCard;