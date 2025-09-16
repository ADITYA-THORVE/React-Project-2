import React from "react";
import{ personData } from "./PersonData";

const calculatAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

const PersonDetails = () => {
    return (
        <div>
            <h1>Person Details</h1>
            <ul>
            {personData.map((person, index) => (
                <li key={index}>
                    <h2>{person.name}</h2>
                    <p>Date of Birth:{person.dateofBirth}</p>
                    <p>Age: {calculatAge(person.dateofBirth)}</p>
                    </li>
            ))}
            </ul>
        </div>
    );
};  
export default PersonDetails;