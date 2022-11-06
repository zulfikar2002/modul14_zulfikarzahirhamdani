import React from "react";
import { useState } from "react";

function About() {
    const [me, setMe] = useState({ name: "Zulfikar",
    npm: "320200401025",
    university: "Semarang", hobbies: "myself"
    });
    
    return (
    <>
    <h1>My name is {me.name}</h1>
    <p>
    I am from {me.university} with NPM {me.npm}. I love {me.hobbies}
    </p>
    </>
    )
    }
    

export default About;

