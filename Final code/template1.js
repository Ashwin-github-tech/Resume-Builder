
    // Get input elements
    const fullnameInput = document.querySelector(".fullname");
    const imageInput = document.querySelector(".image");
    const designationInput = document.querySelector(".designation");
    const addressInput = document.querySelector(".address");
    const emailInput = document.querySelector(".email");
    const phonenoInput = document.querySelector(".phoneno");
    const linkedinInput = document.querySelector(".link_linkedin");
    const githubInput = document.querySelector(".link_github");
    const aboutmeInput = document.querySelector(".aboutme");

    // Get preview elements
    const fullnameDisplay = document.getElementById("fullname_dsp");
    const imageDisplay = document.getElementById("image_dsp");
    const designationDisplay = document.getElementById("designation_dsp");
    const addressDisplay = document.getElementById("address_dsp");
    const emailDisplay = document.getElementById("email_dsp");
    const phonenoDisplay = document.getElementById("phoneno_dsp");
    const linkedinDisplay = document.getElementById("linkedin_dsp");
    const githubDisplay = document.getElementById("github_dsp");
    const aboutmeDisplay = document.getElementById("aboutme_dsp");

    // Add event listeners to input fields
    fullnameInput.addEventListener("input", updatePreview);
    imageInput.addEventListener("change", previewImage);
    designationInput.addEventListener("input", updatePreview);
    addressInput.addEventListener("input", updatePreview);
    emailInput.addEventListener("input", updatePreview);
    phonenoInput.addEventListener("input", updatePreview);
    linkedinInput.addEventListener("input", updatePreview);
    githubInput.addEventListener("input", updatePreview);
    aboutmeInput.addEventListener("input", updatePreview);

    // Function to update the preview
    function updatePreview() {
        fullnameDisplay.textContent = fullnameInput.value;
        designationDisplay.textContent = designationInput.value;
        addressDisplay.textContent = addressInput.value;
        emailDisplay.textContent = emailInput.value;
        phonenoDisplay.textContent = phonenoInput.value;
        linkedinDisplay.textContent = linkedinInput.value;
        githubDisplay.textContent = githubInput.value;
        aboutmeDisplay.textContent = aboutmeInput.value;
    }

    // Function to preview image
    function previewImage() {
        const file = imageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imageDisplay.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }
    }

 // Get input elements for achievements
 const achieveTitleInputs = document.querySelectorAll(".achieve_title");
 const achieveDescriptionInputs = document.querySelectorAll(".achieve_description");

 // Get preview element for achievements
 const achievementsDisplay = document.getElementById("achievements_dsp");

 // Add event listeners to achievement input fields
 achieveTitleInputs.forEach(input => {
     input.addEventListener("input", updateAchievementsPreview);
 });
 achieveDescriptionInputs.forEach(input => {
     input.addEventListener("input", updateAchievementsPreview);
 });

 // Function to update achievements preview
 function updateAchievementsPreview() {
     const achievements = [];
     achieveTitleInputs.forEach((titleInput, index) => {
         const title = titleInput.value;
         const description = achieveDescriptionInputs[index].value;
         if (title.trim() !== "" && description.trim() !== "") {
             achievements.push({ title, description });
         }
     });

     renderAchievements(achievements);
 }

 // Function to render achievements in the preview
 function renderAchievements(achievements) {
     achievementsDisplay.innerHTML = "";
     achievements.forEach(achievement => {
         const achievementDiv = document.createElement("div");
         achievementDiv.classList.add("preview-item");
         achievementDiv.innerHTML = `
             <h4 class="preview-item-title">${achievement.title}</h4>
             <p class="preview-item-description">${achievement.description}</p>
         `;
         achievementsDisplay.appendChild(achievementDiv);
     });
 }


    
       

 // Get input elements for education
 const eduUniversityInputs = document.querySelectorAll(".edu_university");
 const eduDegreeInputs = document.querySelectorAll(".edu_degree");
 const eduCityInputs = document.querySelectorAll(".edu_city");
 const eduYearInputs = document.querySelectorAll(".edu_year");

 // Get preview element for education
 const educationsDisplay = document.getElementById("educations_dsp");

 // Add event listeners to education input fields
 eduUniversityInputs.forEach(input => {
     input.addEventListener("input", updateEducationPreview);
 });
 eduDegreeInputs.forEach(input => {
     input.addEventListener("input", updateEducationPreview);
 });
 eduCityInputs.forEach(input => {
     input.addEventListener("input", updateEducationPreview);
 });
 eduYearInputs.forEach(input => {
     input.addEventListener("input", updateEducationPreview);
 });

 // Function to update education preview
 function updateEducationPreview() {
     const educations = [];
     eduUniversityInputs.forEach((universityInput, index) => {
         const university = universityInput.value;
         const degree = eduDegreeInputs[index].value;
         const city = eduCityInputs[index].value;
         const year = eduYearInputs[index].value;
         if (university.trim() !== "" && degree.trim() !== "" && city.trim() !== "" && year.trim() !== "") {
             educations.push({ university, degree, city, year });
         }
     });

     renderEducations(educations);
 }

 // Function to render educations in the preview
 function renderEducations(educations) {
     educationsDisplay.innerHTML = "";
     educations.forEach(education => {
         const educationDiv = document.createElement("div");
         educationDiv.classList.add("preview-item");
         educationDiv.innerHTML = `
             <h4 class="preview-item-title">${education.university}</h4>
             <p class="preview-item-description">${education.degree}, ${education.city}, ${education.year}</p>
         `;
         educationsDisplay.appendChild(educationDiv);
     });
 }





       
           
      
        
  


// This function is called whenever a change happens in the "Experience" form
function updateExperiencePreview() {
    const experienceItems = document.querySelectorAll(".cv-form-row-experience");
    const experiencesContainer = document.getElementById("experiences_dsp");
  
    // Clear the existing content in the experiences container
    experiencesContainer.innerHTML = "";
  
    // Loop through each experience item and update the preview
    experienceItems.forEach(item => {
      const title = item.querySelector(".exp_title").value;
      const organization = item.querySelector(".exp_organization").value;
      const year = item.querySelector(".exp_year").value;
      const description = item.querySelector(".exp_description").value;
  
      if (title.trim() !== "" && organization.trim() !== "" && year.trim() !== "" && description.trim() !== "") {
        const experienceElement = document.createElement("div");
        experienceElement.className = "preview-item";
        experienceElement.innerHTML = `<span class="preview-item-val">${title}, ${organization}, (${year}): ${description}</span>`;
        experiencesContainer.appendChild(experienceElement);
      }
    });
  }
  
  // Attach the updateExperiencePreview function to the necessary events
  const experienceForm = document.getElementById("cv-form");
  experienceForm.addEventListener("input", updateExperiencePreview);
  experienceForm.addEventListener("click", updateExperiencePreview);
  





      // Get input elements for projects
      const projTitleInputs = document.querySelectorAll(".proj_title");
      const projLinkInputs = document.querySelectorAll(".proj_link");
      const projDescriptionInputs = document.querySelectorAll(".proj_description");
  
      // Get preview element for projects
      const projectsDisplay = document.getElementById("projects_dsp");
  
      // Add event listeners to project input fields
      projTitleInputs.forEach(input => {
          input.addEventListener("input", updateProjectsPreview);
      });
      projLinkInputs.forEach(input => {
          input.addEventListener("input", updateProjectsPreview);
      });
      projDescriptionInputs.forEach(input => {
          input.addEventListener("input", updateProjectsPreview);
      });
  
      // Function to update projects preview
      function updateProjectsPreview() {
          const projects = [];
          projTitleInputs.forEach((titleInput, index) => {
              const title = titleInput.value;
              const link = projLinkInputs[index].value;
              const description = projDescriptionInputs[index].value;
              if (title.trim() !== "" && description.trim() !== "") {
                  projects.push({ title, link, description });
              }
          });
  
          renderProjects(projects);
      }
  
      // Function to render projects in the preview
      function renderProjects(projects) {
          projectsDisplay.innerHTML = "";
          projects.forEach(project => {
              const projectDiv = document.createElement("div");
              projectDiv.classList.add("preview-item");
              projectDiv.innerHTML = `
                  <h4 class="preview-item-title">${project.title}</h4>
                  <p class="preview-item-description"><a href="${project.link}" target="_blank">${project.link}</a></p>
                  <p class="preview-item-description">${project.description}</p>
              `;
              projectsDisplay.appendChild(projectDiv);
          });
      }
  
  
  
  





    // Get input elements for languages
    const langLanguageInputs = document.querySelectorAll(".lang_language");

    // Get preview element for languages
    const languagesDisplay = document.getElementById("language_dsp");

    // Add event listeners to language input fields
    langLanguageInputs.forEach(input => {
        input.addEventListener("input", updateLanguagesPreview);
    });

    // Function to update languages preview
    function updateLanguagesPreview() {
        const languages = [];
        langLanguageInputs.forEach(input => {
            const language = input.value;
            if (language.trim() !== "") {
                languages.push(language);
            }
        });

        renderLanguages(languages);
    }

    // Function to render languages in the preview
    function renderLanguages(languages) {
        languagesDisplay.innerHTML = languages.join(", ");
    }




   
  
    // Get input elements for interests
    const intInterestInputs = document.querySelectorAll(".interest");

    // Get preview element for interests
    const interestDisplay = document.getElementById("interest_dsp");

    // Add event listeners to interest input fields
    intInterestInputs.forEach(input => {
        input.addEventListener("input", updateInterestPreview);
    });

    // Function to update interests preview
    function updateInterestPreview() {
        const interests = [];
        intInterestInputs.forEach(input => {
            const interest = input.value;
            if (interest.trim() !== "") {
                interests.push(interest);
            }
        });

        renderInterests(interests);
    }

    // Function to render interests in the preview
    function renderInterests(interests) {
        interestDisplay.innerHTML = interests.join(", ");
    }



// Get input elements for skills
const skillsSkillInputs = document.querySelectorAll(".skills_skill");
        
// Get preview element for skills
const skillsDisplay = document.getElementById("skills_dsp");

// Add event listeners to skill input fields
skillsSkillInputs.forEach(input => {
    input.addEventListener("input", updateSkillsPreview);
});

// Function to update skills preview
function updateSkillsPreview() {
    const skills = [];
    skillsSkillInputs.forEach(input => {
        const skill = input.value;
        if (skill.trim() !== "") {
            skills.push(skill);
        }
    });

    renderSkills(skills);
}

// Function to render skills in the preview
function renderSkills(skills) {
    skillsDisplay.innerHTML = skills.map(skill => `<span class="preview-item-tag">${skill}</span>`).join("");
}

            
// Function to update the theme preview based on user input
function updateThemePreview() {
    const backgroundColor = document.getElementById("background-color").value;
    const textColor = document.getElementById("text-color").value;
    
    const themePreview = document.getElementById("theme-preview");
    themePreview.style.backgroundColor = backgroundColor;
    themePreview.style.color = textColor;
}

// Attach event listeners to input fields
document.getElementById("background-color").addEventListener("input", updateThemePreview);
document.getElementById("text-color").addEventListener("input", updateThemePreview);







// Function to preview the selected image
function previewImage() {
    const imageInput = document.querySelector(".image");
    const imagePreview = document.getElementById("image_dsp");
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(imageInput.files[0]);
    } else {
        imagePreview.src = ""; // Clear the preview if no image is selected
    }
}

// Add event listener to image input for live preview
document.querySelector(".image").addEventListener("change", previewImage);

// Function to validate and update personal details preview

//generate CV

document.getElementById("page7submit").addEventListener("click", () => {
    window.print();

});


document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-button');
    const previewContainer = document.getElementById('preview-container');
  
    addButton.addEventListener('click', function() {
      // Create a new preview item element (e.g., a paragraph)
      const newItem = document.createElement('p');
  
      // Customize the content of the new item (you can get input values here)
      newItem.textContent = 'Newly added item';
  
      // Append the new item to the preview container
      previewContainer.appendChild(newItem);
    });
  });
  


const generateCV = () => {
    let userData = getUserInputs();
    displayCV(userData);
    console.log(userData);
}




function printCV(){
    window.print();
}

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the "Add" and "Remove" buttons
    const addSkillButton = document.querySelector('repeater-add-btn');
    const removeSkillButtons = document.querySelectorAll('.repeater-remove-btn');

    // Function to add a new set of input fields
    function addSkillItem() {
        // Clone the template element (you need to define this)
        const template = document.querySelector('.repeater-template');
        const newItem = template.cloneNode(true);

        // Clear the values in the cloned input fields if needed
        const inputFields = newItem.querySelectorAll('input[type="text"]');
        inputFields.forEach(function(inputField) {
            inputField.value = '';
        });

        // Append the cloned item to the form
        const form = document.getElementById('cv-form');
        form.appendChild(newItem);
    }

    // Function to remove the clicked item
    function removeSkillItem(event) {
        const itemToRemove = event.currentTarget.closest('.repeater-item');
        const form = document.getElementById('cv-form');
        form.removeChild(itemToRemove);
    }

    // Add a click event listener to the "Add" button
    addSkillButton.addEventListener('click', addSkillItem);

    // Add click event listeners to each "Remove" button
    removeSkillButtons.forEach(function(removeButton) {
        removeButton.addEventListener('click', removeSkillItem);
    });
});


  

