let a = document.querySelector('.line');

let b = document.querySelector('.line2');

let page1 = document.querySelector('#sc p:nth-child(1)');
let page2 = document.querySelector('#sc p:nth-child(2)');
let page3 = document.querySelector('#sc p:nth-child(3)');
let page4 = document.querySelector('#sc p:nth-child(4)');

let titik1 = document.querySelector('.titik .satu');
let titik2 = document.querySelector('.titik .dua');
let titik3 = document.querySelector('.titik .tiga');

let homeH4 = document.querySelector('.in h4');
let homeH1 = document.querySelector('.in h1');
let homeP = document.querySelector('.in p');
let landing = document.querySelector('.landing');

let about = document.querySelector('.about');
let link1 = document.querySelector('.link-hero a:nth-child(1)');
let link2 = document.querySelector('.link-hero a:nth-child(2)');
let link3 = document.querySelector('.link-hero a:nth-child(3)');

let aboutH1 = document.querySelector('.about h1');
let aboutH1P = document.querySelector('.about h1 p');
let aboutP = document.querySelector('.about .learn');
let aboutImg1 = document.querySelector('.about h1 .img img:nth-child(1)');
let aboutImg2 = document.querySelector('.about h1 .img img:nth-child(2)');
let aboutImg4 = document.querySelector('.about h1 .img img:nth-child(4)');
let aboutImg5 = document.querySelector('.about h1 .img img:nth-child(5)');



let aboutLink = document.getElementById('about-link');
let skillsLink = document.getElementById('skills-link');
let projectLink = document.getElementById('project-link');
let aboutProject = document.querySelector('.project');
let projects = document.querySelector('.about .project');




let aboutContent = document.querySelector('.about .col2 .content .about-content');
let aboutSkills = document.querySelector('.about .col2 .content .skills');

let contact = document.querySelector('.contact');

let contactH1 = document.querySelector('.contact-content .contact-title h1');
let contactH1p = document.querySelector('.contact-content .contact-title p');
let contactH1p2 = document.querySelector('.contact-content .contact-mid p');
let contactH1a = document.querySelector('.contact-content .contact-mail .email a');
let contactH1p3 = document.querySelector('.contact-content .contact-mail p');
let contactMedia = document.querySelector('.contact-content .contact-mail .media-link');
let contactMediaP = document.querySelector('.contact-content .contact-mail .media p');


let media = document.querySelector('#home .media-main');
let copyright = document.querySelector('#home .copyright');

// console.log(aboutImg1)
// console.log(aboutImg2)
// console.log(aboutImg4)
// console.log(aboutImg5)

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    // console.log(value);
    
    if ( value > 1100 && value < 1400) {
        a.style.height = "130px";
        b.style.height = "130px";
        page3.style.bottom = "8px";
        about.style.display = "none";
        media.style.display = "none";
        copyright.style.display = "flex";

        contactH1.style.left = "0";
        contactH1p.style.left = "0";
        contactH1p2.style.left = "0";
        contactH1a.style.left = "0";
        contactH1p3.style.left = "0";
        contactMedia.style.right = "0";
        contactMediaP.style.right = "0";
        
    }else if (value > 800 && value < 1100) {
        a.style.height = "0";
        b.style.height = "0";
        page2.style.bottom = "40px";
        page3.style.bottom = "-25px";

        about.style.display = "grid";
        link1.style.left = "-100%";
        link2.style.left = "-100%";
        link3.style.left = "-100%";

        aboutH1.style.top = "-10px";
        aboutH1.style.opacity = "0";

        aboutH1P.style.fontSize= "calc(2vw + 1rem)";
        aboutH1P.style.bottom= "0";
        aboutH1P.style.opacity= "0";

        aboutImg1.style.right = "-66px";
        aboutImg2.style.right = "-36px";
        aboutImg4.style.left = "-36px";
        aboutImg5.style.left = "-66px";

        aboutP.style.top = "-50px";
        aboutP.style.opacity = "0";

        // aboutContent.style = "transform: translateY(120%);";
        aboutContent.classList.add('hide');
        aboutSkills.classList.remove('show');

        contact.style.display = "grid";

        media.style.display = "none";
        // media.style.top = "-100%";
        copyright.style.display = "flex";

        contactH1.style.left = "-100%";
        contactH1p.style.left = "-100%";
        contactH1p2.style.left = "-100%";
        contactH1a.style.left = "-100%";
        contactH1p3.style.left = "-100%";
        contactMedia.style.right = "-100%";
        contactMediaP.style.right = "-100%";
        
    }else if (value > 568 && value < 800 ) {
        a.style.height = "130px";
        b.style.height = "130px";
        page2.style.bottom = "8px";

        landing.style.display = "none";
        about.style.display = "grid";
        link1.style.left = "0";
        link2.style.left = "0";
        link3.style.left = "0";

        aboutContent.style.display = "grid";
        setTimeout(() => {
            aboutContent.classList.remove('hide');
        }, 10);
        // aboutContent.style = "transform: translateY(0);";

        aboutH1.style.top = "0";
        aboutH1.style.opacity = "1";

        aboutH1P.style.fontSize= "calc(1vw + 5rem)";
        aboutH1P.style.bottom= "-15px";
        aboutH1P.style.opacity= "1";

        aboutImg1.style.right = "0";
        aboutImg2.style.right = "0";
        aboutImg4.style.left = "0";
        aboutImg5.style.left = "0";

        aboutP.style.top = "-30px";
        aboutP.style.opacity = "1";

        media.style.display = "flex";
        contact.style.display = "none";
        copyright.style.display = "none";


    } else if(value > 200 && value < 568) {
        a.style.height = "0";
        b.style.height = "0";
        
        page1.style.top = "-25px";
        page2.style.bottom = "-25px";

        homeH4.style.transform = "translateX(-100%)";
        homeH1.style.transform = "translateX(-100%)";
        homeP.style.transform = "translateX(-100%)";
        landing.style.display = "grid";

        about.style.display = "grid";
        link1.style.left = "-100%";
        link2.style.left = "-100%";
        link3.style.left = "-100%";

        aboutH1.style.top = "-10px";
        aboutH1.style.opacity = "0";

        aboutH1P.style.fontSize= "calc(1vw + 2rem)";
        aboutH1P.style.bottom= "0";
        aboutH1P.style.opacity= "0";

        aboutImg1.style.right = "-66px";
        aboutImg2.style.right = "-36px";
        aboutImg4.style.left = "-36px";
        aboutImg5.style.left = "-66px";

        aboutP.style.top = "-50px";
        aboutP.style.opacity = "0";

        aboutContent.classList.add('hide');
        aboutSkills.classList.remove('show');
        // aboutContent.style = "transform: translateY(120%);";


        titik1.style.transform = "translateX(-100%)";
        titik2.style.transform = "translateX(-250%)";
        titik3.style.transform = "translateX(-350%)";


    } else if (value < 200) {
        a.style.height = "130px";
        b.style.height = "130px";

        page1.style.top = "9px";
        page2.style.bottom = "-25px";

        homeH4.style.transform = "translateX(0)";
        homeH1.style.transform = "translateX(0)";
        homeP.style.transform = "translateX(0)";
        landing.style.display = "grid";
        
        titik1.style.transform = "translateX(0)";
        titik2.style.transform = "translateX(0)";
        titik3.style.transform = "translateX(0)";
        

        about.style.display = "none";

    }
})




aboutLink.addEventListener('click', function() {
    aboutSkills.classList.remove('show');
    setTimeout(() => {
        aboutContent.style.display = "grid";
        setTimeout(() => {
            aboutContent.classList.remove('hide');
        }, 10)
    }, 700);
});
skillsLink.addEventListener('click', function() {
    aboutContent.classList.add('hide');
    setTimeout(() => {
        aboutContent.style.display = "none";
        aboutSkills.classList.add('show');
    }, 700);
});
projectLink.addEventListener('click', function() {
    projects.classList.add('show');
});



// projectLink.addEventListener('click', function() {
//     setTimeout(() => {
//         aboutProject.classList.add('show-project');
//     }, 600);
// });
// aboutLink.addEventListener('click', function() {
//     setTimeout(() => {
//         aboutProject.classList.remove('show-project');
//     }, 600);
// });