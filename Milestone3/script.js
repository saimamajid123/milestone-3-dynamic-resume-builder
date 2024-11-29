"use strict";
// Get references to the form and dispiay area
const form = document.getElementById('resume-form');
const resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission 
form.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent page reload
    // collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('Phone').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    //generate the resume contact dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>personal Information</h3> 
    <p><b> Name:</b>${name}</p>
    <p><b> Email:</b>${email}</p>
    <p><b> Phone:</b>${phone}</p>  
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>             

    <h3>Skills</h3>
    <p>${skills}</p> 
    `;
    // //dispaly the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
