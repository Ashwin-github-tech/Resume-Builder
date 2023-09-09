
    // JavaScript code for live validation of Personal Details section
    document.addEventListener('DOMContentLoaded', function() {
        const fullNameInput = document.querySelector('.fullname');
        const emailInput = document.querySelector('.email');
        const phoneNoInput = document.querySelector('.phoneno');
        const addressInput = document.querySelector('.address');

        fullNameInput.addEventListener('input', validateFullName);
        emailInput.addEventListener('input', validateEmail);
        phoneNoInput.addEventListener('input', validatePhoneNo);
        addressInput.addEventListener('input', validateAddress);
        linkdeInInput.addEventListener('input', validateLinkedIn);
        githubInput.addEventListener('input', validategithub);



        function validateFullName() {
            const fullNameError = document.getElementById('fullname-error');
            if (fullNameInput.value.trim() === '') {
                fullNameError.textContent = 'Full name is required';
                fullNameInput.classList.add('invalid');
            } else {
                fullNameError.textContent = '';
                fullNameInput.classList.remove('invalid');
            }
        }

        function validateEmail() {
            const emailError = document.getElementById('email-error');
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailInput.classList.add('invalid');
            } else {
                emailError.textContent = '';
                emailInput.classList.remove('invalid');
            }
        }

        function validatePhoneNo() {
            const phoneNoError = document.getElementById('phoneno-error');
            const phoneNoPattern = /^[0-9]{10}$/;
            if (!phoneNoPattern.test(phoneNoInput.value)) {
                phoneNoError.textContent = 'Please enter a valid 10-digit phone number';
                phoneNoInput.classList.add('invalid');
            } else {
                phoneNoError.textContent = '';
                phoneNoInput.classList.remove('invalid');
            }
        }

        function validateAddress() {
            const addressError = document.getElementById('address-error');
            if (addressInput.value.trim() === '') {
                addressError.textContent = 'Address is required';
                addressInput.classList.add('invalid');
            } else {
                addressError.textContent = '';
                addressInput.classList.remove('invalid');
            }
        }
        function validateLinkedIn() {
            const linkedInInput = document.querySelector('.link_linkedin');
            const linkedInError = document.getElementById('linkedin-error');
            
            if (linkedInInput.value.trim() === '') {
                linkedInError.textContent = 'LinkedIn profile URL is required';
                linkedInInput.classList.add('input-error');
            } else {
                linkedInError.textContent = '';
                linkedInInput.classList.remove('input-error');
            }
        }

        function validategithub() {
            const githubInput = document.querySelector('.link_github');
            const githubError = document.getElementById('github-error');
            
            if (githubInput.value.trim() === '') {
                githubError.textContent = 'github profile URL is required';
                githubInput.classList.add('input-error');
            } else {
                githubError.textContent = '';
                githubInput.classList.remove('input-error');
            }
        }
    });






    // JavaScript code for live validation of Achievements section
    document.addEventListener('DOMContentLoaded', function() {
        const achieveTitleInputs = document.querySelectorAll('.achieve_title');
        const achieveDescriptionInputs = document.querySelectorAll('.achieve_description');

        for (const achieveTitleInput of achieveTitleInputs) {
            achieveTitleInput.addEventListener('input', function() {
                validateAchievement(achieveTitleInput);
            });
        }

        for (const achieveDescriptionInput of achieveDescriptionInputs) {
            achieveDescriptionInput.addEventListener('input', function() {
                validateAchievement(achieveDescriptionInput);
            });
        }

        function validateAchievement(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const achieveTitle = parentContainer.querySelector('.achieve_title');
            const achieveDescription = parentContainer.querySelector('.achieve_description');
            
            const titleError = parentContainer.querySelector('.achieve-title-error');
            const descriptionError = parentContainer.querySelector('.achieve-description-error');

            if (achieveTitle.value.trim() === '') {
                titleError.textContent = 'Achievement title is required';
                achieveTitle.classList.add('invalid');
            } else {
                titleError.textContent = '';
                achieveTitle.classList.remove('invalid');
            }

            if (achieveDescription.value.trim() === '') {
                descriptionError.textContent = 'Achievement description is required';
                achieveDescription.classList.add('invalid');
            } else {
                descriptionError.textContent = '';
                achieveDescription.classList.remove('invalid');
            }
        }
    });




    // JavaScript code for live validation of Education section
    document.addEventListener('DOMContentLoaded', function() {
        const eduUniversityInput = document.querySelector('.edu_university');
        const eduDegreeInput = document.querySelector('.edu_degree');
        const eduCityInput = document.querySelector('.edu_city');
        const eduYearInput = document.querySelector('.edu_year');

        eduUniversityInput.addEventListener('input', validateEduUniversity);
        eduDegreeInput.addEventListener('input', validateEduDegree);
        eduCityInput.addEventListener('input', validateEduCity);
        eduYearInput.addEventListener('input', validateEduYear);

        function validateEduUniversity() {
            const eduUniversityError = document.getElementById('edu-university-error');
            if (eduUniversityInput.value.trim() === '') {
                eduUniversityError.textContent = 'University/College is required';
                eduUniversityInput.classList.add('invalid');
            } else {
                eduUniversityError.textContent = '';
                eduUniversityInput.classList.remove('invalid');
            }
        }

        function validateEduDegree() {
            const eduDegreeError = document.getElementById('edu-degree-error');
            if (eduDegreeInput.value.trim() === '') {
                eduDegreeError.textContent = 'Degree is required';
                eduDegreeInput.classList.add('invalid');
            } else {
                eduDegreeError.textContent = '';
                eduDegreeInput.classList.remove('invalid');
            }
        }

        function validateEduCity() {
            const eduCityError = document.getElementById('edu-city-error');
            if (eduCityInput.value.trim() === '') {
                eduCityError.textContent = 'City is required';
                eduCityInput.classList.add('invalid');
            } else {
                eduCityError.textContent = '';
                eduCityInput.classList.remove('invalid');
            }
        }

        function validateEduYear() {
            const eduYearError = document.getElementById('edu-year-error');
            const yearPattern = /^\d{4}-\d{4}$/;
            if (!yearPattern.test(eduYearInput.value)) {
                eduYearError.textContent = 'Please enter a valid year range (YYYY-YYYY)';
                eduYearInput.classList.add('invalid');
            } else {
                eduYearError.textContent = '';
                eduYearInput.classList.remove('invalid');
            }
        }
    });





    // JavaScript code for live validation of Experience section
    document.addEventListener('DOMContentLoaded', function() {
        const expTitleInputs = document.querySelectorAll('.exp_title');
        const expOrganizationInputs = document.querySelectorAll('.exp_organization');
        const expYearInputs = document.querySelectorAll('.exp_year');
        const expDescriptionInputs = document.querySelectorAll('.exp_description');

        for (const expTitleInput of expTitleInputs) {
            expTitleInput.addEventListener('input', function() {
                validateExperience(expTitleInput);
            });
        }

        for (const expOrganizationInput of expOrganizationInputs) {
            expOrganizationInput.addEventListener('input', function() {
                validateExperience(expOrganizationInput);
            });
        }

        for (const expYearInput of expYearInputs) {
            expYearInput.addEventListener('input', function() {
                validateExperience(expYearInput);
            });
        }

        for (const expDescriptionInput of expDescriptionInputs) {
            expDescriptionInput.addEventListener('input', function() {
                validateExperience(expDescriptionInput);
            });
        }

        function validateExperience(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const expTitle = parentContainer.querySelector('.exp_title');
            const expOrganization = parentContainer.querySelector('.exp_organization');
            const expYear = parentContainer.querySelector('.exp_year');
            const expDescription = parentContainer.querySelector('.exp_description');
            
            const titleError = parentContainer.querySelector('.exp-title-error');
            const organizationError = parentContainer.querySelector('.exp-organization-error');
            const yearError = parentContainer.querySelector('.exp-year-error');
            const descriptionError = parentContainer.querySelector('.exp-description-error');

            if (expTitle.value.trim() === '') {
                titleError.textContent = 'Experience title is required';
                expTitle.classList.add('invalid');
            } else {
                titleError.textContent = '';
                expTitle.classList.remove('invalid');
            }

            if (expOrganization.value.trim() === '') {
                organizationError.textContent = 'Organization is required';
                expOrganization.classList.add('invalid');
            } else {
                organizationError.textContent = '';
                expOrganization.classList.remove('invalid');
            }

            const yearPattern = /^\d{4}-\d{4}$/;
            if (!yearPattern.test(expYear.value)) {
                yearError.textContent = 'Please enter a valid year range (YYYY-YYYY)';
                expYear.classList.add('invalid');
            } else {
                yearError.textContent = '';
                expYear.classList.remove('invalid');
            }

            if (expDescription.value.trim() === '') {
                descriptionError.textContent = 'Experience description is required';
                expDescription.classList.add('invalid');
            } else {
                descriptionError.textContent = '';
                expDescription.classList.remove('invalid');
            }
        }
    });




    // JavaScript code for live validation of Projects section
    document.addEventListener('DOMContentLoaded', function() {
        const projTitleInputs = document.querySelectorAll('.proj_title');
        const projLinkInputs = document.querySelectorAll('.proj_link');
        const projDescriptionInputs = document.querySelectorAll('.proj_description');

        for (const projTitleInput of projTitleInputs) {
            projTitleInput.addEventListener('input', function() {
                validateProject(projTitleInput);
            });
        }

        for (const projLinkInput of projLinkInputs) {
            projLinkInput.addEventListener('input', function() {
                validateProject(projLinkInput);
            });
        }

        for (const projDescriptionInput of projDescriptionInputs) {
            projDescriptionInput.addEventListener('input', function() {
                validateProject(projDescriptionInput);
            });
        }

        function validateProject(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const projTitle = parentContainer.querySelector('.proj_title');
            const projLink = parentContainer.querySelector('.proj_link');
            const projDescription = parentContainer.querySelector('.proj_description');
            
            const titleError = parentContainer.querySelector('.proj-title-error');
            const linkError = parentContainer.querySelector('.proj-link-error');
            const descriptionError = parentContainer.querySelector('.proj-description-error');

            if (projTitle.value.trim() === '') {
                titleError.textContent = 'Project name is required';
                projTitle.classList.add('invalid');
            } else {
                titleError.textContent = '';
                projTitle.classList.remove('invalid');
            }

            if (projLink.value.trim() === '') {
                linkError.textContent = 'Project link is required';
                projLink.classList.add('invalid');
            } else {
                linkError.textContent = '';
                projLink.classList.remove('invalid');
            }

            if (projDescription.value.trim() === '') {
                descriptionError.textContent = 'Project description is required';
                projDescription.classList.add('invalid');
            } else {
                descriptionError.textContent = '';
                projDescription.classList.remove('invalid');
            }
        }
    });



    // JavaScript code for live validation of Skills section
    document.addEventListener('DOMContentLoaded', function() {
        const skillsSkillInputs = document.querySelectorAll('.skills_skill');

        for (const skillsSkillInput of skillsSkillInputs) {
            skillsSkillInput.addEventListener('input', function() {
                validateSkill(skillsSkillInput);
            });
        }

        function validateSkill(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const skillsSkill = parentContainer.querySelector('.skills_skill');
            
            const skillError = parentContainer.querySelector('.skills-skill-error');

            if (skillsSkill.value.trim() === '') {
                skillError.textContent = 'Skill name is required';
                skillsSkill.classList.add('invalid');
            } else {
                skillError.textContent = '';
                skillsSkill.classList.remove('invalid');
            }
        }
    });



    // JavaScript code for live validation of Languages section
    document.addEventListener('DOMContentLoaded', function() {
        const langLanguageInputs = document.querySelectorAll('.lang_language');

        for (const langLanguageInput of langLanguageInputs) {
            langLanguageInput.addEventListener('input', function() {
                validateLanguage(langLanguageInput);
            });
        }

        function validateLanguage(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const langLanguage = parentContainer.querySelector('.lang_language');
            
            const languageError = parentContainer.querySelector('.lang-language-error');

            if (langLanguage.value.trim() === '') {
                languageError.textContent = 'Language name is required';
                langLanguage.classList.add('invalid');
            } else {
                languageError.textContent = '';
                langLanguage.classList.remove('invalid');
            }
        }
    });


    
    // JavaScript code for live validation of Certificate section
    document.addEventListener('DOMContentLoaded', function() {
        const intInterestInputs = document.querySelectorAll('.int_interest');

        for (const intInterestInput of intInterestInputs) {
            intInterestInput.addEventListener('input', function() {
                validateCertificate(intInterestInput);
            });
        }

        function validateCertificate(inputField) {
            const parentContainer = inputField.closest('.repeater-item');
            const intInterest = parentContainer.querySelector('.int_interest');
            
            const certificateError = parentContainer.querySelector('.int-interest-error');

            if (intInterest.value.trim() === '') {
                certificateError.textContent = 'Certificate name is required';
                intInterest.classList.add('invalid');
            } else {
                certificateError.textContent = '';
                intInterest.classList.remove('invalid');
            }
        }
    });





// Function to adjust the textarea height based on content
function adjustTextareaHeight(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = (textarea.scrollHeight) + "px";
}





