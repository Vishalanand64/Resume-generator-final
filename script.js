console.log("script is running");
const cvWrapper = document.querySelector(".cv-wrapper");
cvWrapper.classList.add("hidden");

const getImg = () =>{
    let file =document.querySelector(".user-input-image").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)
    
    reader.onloadend = function (){
        document.querySelector(".image").src = reader.result;
    }
}

const getName = () =>{
    const userName = document.querySelector(".user-name").value;
    const upperCase = userName.toUpperCase();
    const displayName = document.querySelector(".cv-user-name");
    displayName.innerText = upperCase;
}

const getConatct = () =>{
    const contact = document.querySelector(".user-contact").value;
    const displayContact = document.querySelector(".cv-contact-number");
    displayContact.innerText = contact;
}

const getEmail = () =>{
    const email = document.querySelector(".user-email").value;
    const displayEmail = document.querySelector(".cv-email");
    displayEmail.innerText = email;
}

const getAddress = () =>{
    const address = document.querySelector(".user-address").value;
    const displayAddress = document.querySelector(".cv-addres");
    displayAddress.innerText = address
}

const getEducation =() =>{
    const yearOne = document.querySelector(".year-one").value;
    const degreeOne = document.querySelector(".degree-one").value;
    const universityOne = document.querySelector(".university-one").value;
    
    const displayYearOne = document.querySelector(".year-education-one");
    const displayDegreeOne = document.querySelector(".degree-education-one");
    const displayUniversityone = document.querySelector(".uni-education-one");
    displayYearOne.innerText = yearOne;
    displayDegreeOne.innerText = degreeOne;
    displayUniversityone.innerText = universityOne;
    
    
    const yeartwo = document.querySelector(".year-two").value;
    const degreetwo = document.querySelector(".degree-two").value;
    const universitytwo = document.querySelector(".university-two").value;
    
    const displayYeartwo = document.querySelector(".year-education-two");
    const displayDegreetwo = document.querySelector(".degree-education-two");
    const displayUniversitytwo = document.querySelector(".uni-education-two");
    displayYeartwo.innerText = yeartwo;
    displayDegreetwo.innerText = degreetwo;
    displayUniversitytwo.innerText = universitytwo;
    
    
    
    const yearthree = document.querySelector(".year-three").value;
    const degreethree = document.querySelector(".degree-three").value;
    const universitythree = document.querySelector(".university-three").value;
    
    const displayYearthree = document.querySelector(".year-education-three");
    const displayDegreethree = document.querySelector(".degree-education-three");
    const displayUniversitythree = document.querySelector(".uni-education-three");
    displayYearthree.innerText = yearthree;
    displayDegreethree.innerText = degreethree;
    displayUniversitythree.innerText = universitythree;
    
}

const getskill = () =>{
    const skillOne = document.querySelector(".skill-one").value;
    const skillTwo = document.querySelector(".skill-two").value;
    const skillThree = document.querySelector(".skill-three").value;
    const skillFour = document.querySelector(".skill-four").value;
    
    const displaySkillOne = document.querySelector(".expertise1");
    const displaySkillTwo = document.querySelector(".expertise2");
    const displaySkillThree = document.querySelector(".expertise3");
    const displaySkillFour = document.querySelector(".expertise4");
    
    displaySkillOne.innerText = skillOne;
    displaySkillTwo.innerText = skillTwo;
    displaySkillThree.innerText = skillThree;
    displaySkillFour.innerText = skillFour;
}

const getProfession = () =>{
    const profession = document.querySelector(".user-profession").value;
    const displayProfession = document.querySelector(".cv-user-profession");
    displayProfession.innerText = profession;
}

const getAbout = () =>{
    const about = document.querySelector(".user-about").value;
    const displayAbout = document.querySelector(".about-content");
    displayAbout.innerText = about;
}

const getExperience = () =>{
    const fromYearOne = document.querySelector(".from-year-one").value;
    const toYearOne = document.querySelector(".to-year-one ").value;
    const expOne = document.querySelector(".user-experience-one").value;
    
    const fromYeartwo = document.querySelector(".from-year-two").value;
    const toYeartwo = document.querySelector(".to-year-two ").value;
    const exptwo = document.querySelector(".user-experience-two").value;
    
    const diaplayFromOne = document.querySelector(".from-one");
    const displatToOne = document.querySelector(".to-one");
    const displayExpOne = document.querySelector(".exp-one-content");
    diaplayFromOne.innerText = fromYearOne;
    displatToOne.innerText = toYearOne;
    displayExpOne.innerText = expOne;
    
    const diaplayFromtwo = document.querySelector(".from-two");
    const displatTotwo = document.querySelector(".to-two");
    const displayExptwo = document.querySelector(".exp-two-content");
    diaplayFromtwo.innerText = fromYeartwo;
    displatTotwo.innerText = toYeartwo;
    displayExptwo.innerText = exptwo;
}

const getLanguage = () =>{
    const lanOne = document.querySelector(".lan-one").value;
    const lanTwo = document.querySelector(".lan-two").value;
    const lanThree = document.querySelector(".lan-three").value;
    const lanFour = document.querySelector(".lan-four").value;
    const lanFive = document.querySelector(".lan-five").value;
    const lanSix = document.querySelector(".lan-six").value;
    const displayLanOne = document.querySelector(".language1");
    const displayLanTwo = document.querySelector(".language2");
    const displayLanThree = document.querySelector(".language3");
    const displayLanfour = document.querySelector(".language4");
    const displayLanFive = document.querySelector(".language5");
    const displayLanSix = document.querySelector(".language6");
    
    displayLanOne.innerText = lanOne;
    displayLanTwo.innerText = lanTwo;
    displayLanThree.innerText = lanThree;
    displayLanfour.innerText = lanFour;
    displayLanFive.innerText = lanFive;
    displayLanSix.innerText = lanSix;
}

const getLink = () =>{
    const fb = document.querySelector(".fb-link").value;
    const li = document.querySelector(".linkedin-link").value;
    const ins = document.querySelector(".insta-links ").value;
    const displayFb = document.querySelector(".link-1 ");
    const displayLi = document.querySelector(".link-2");
    const displayIns = document.querySelector(".link-3");
    displayFb.innerText = fb;
    displayLi.innerText = li;
    displayIns.innerText = ins;
}

const visible = () =>{
    const cvWrapper = document.querySelector(".cv-wrapper");
    cvWrapper.classList.remove("hidden");
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.add("hidden")
    const geBtn = document.querySelector("#generate-Button");
    geBtn.classList.add("hidden");
}

//  function RunAll(){
    
//     getImg()
//     getName()
//     getConatct()
//     getEmail()
//     getaddress()
//     getEducation()
//     getskill()
//     getProfession()
//     getAbout()
//     getexperience()
//     getLanguage()
//     getLink()
//     visible()


// }

// const generate = document.querySelector("#generate-Button");
// generate.style.color = "red"
// generate.addEventListener("click" , () => {
//     getImg()
//     getName()
//     getConatct()
//     getEmail()
//     getaddress()
//     getEducation()
//     getskill()
//     getProfession()
//     getAbout()
//     getexperience()
//     getLanguage()
//     getLink()
//     visible()
// });

const generate  = document.querySelector("#generate-Button");
generate.addEventListener("click" , visible)

const generateTwo  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getName)

const generateThree  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getConatct)

const generateFour  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getEmail)

const generateFive  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getAddress)

const generateSix  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getImg)

const generateSeven  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getEducation)

const generateEight  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getskill)

const generateNine  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getProfession)


const generateTen  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getAbout)

const generateEleven  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getExperience)

const generatetwelve  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getLanguage)

const generateThirteen  = document.querySelector("#generate-Button");
generate.addEventListener("click" , getLink)


function BuildCv(){
    window.print();
    
}

const printBtn = document.querySelector(".printButton")

printBtn.addEventListener("click" , BuildCv)