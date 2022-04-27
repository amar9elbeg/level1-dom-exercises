const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpeg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};
// Example: Update the img src for the logo
// header starts here
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
const allLinks = document.querySelectorAll("a");

// allLinks.style.color = 'green';

// allLinks[0].style.color = "green";

const link1 = (allLinks[0].textContent = siteContent["nav"]["nav-item-1"]);
const link2 = (allLinks[1].textContent = siteContent["nav"]["nav-item-2"]);
const link3 = (allLinks[2].textContent = siteContent["nav"]["nav-item-3"]);
const link4 = (allLinks[3].textContent = siteContent["nav"]["nav-item-4"]);
const link5 = (allLinks[4].textContent = siteContent["nav"]["nav-item-5"]);
const link6 = (allLinks[5].textContent = siteContent["nav"]["nav-item-6"]);
// body starts here
const allTitle = document.querySelectorAll("h1");
const ctaImg = document.getElementById('cta-img');
const ctaButton = document.querySelectorAll("button");
const middleImg = document.getElementById('middle-img');
const middleTitle = document.querySelectorAll("h4");
const middleParagraph = document.querySelectorAll('p');


let domIsAwesome = (allTitle[0].textContent = siteContent["cta"]["h1"]);
let buttonOne = (ctaButton[0].textContent = siteContent["cta"]["button"]);

ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const title1 = (middleTitle[0].textContent = siteContent["main-content"]["features-h4"])
const title2 = (middleTitle[1].textContent = siteContent["main-content"]["about-h4"])
const title3 = (middleTitle[2].textContent = siteContent["main-content"]["services-h4"])
const title4 = (middleTitle[3].textContent = siteContent["main-content"]["product-h4"])
const title5 = (middleTitle[4].textContent = siteContent["main-content"]["vision-h4"])
const title6 = (middleTitle[5].textContent = siteContent["contact"]["contact-h4"])

const para1 = (middleParagraph[0].textContent = siteContent["main-content"]["features-content"])
const para2 = (middleParagraph[1].textContent = siteContent["main-content"]["about-content"])
const para3 = (middleParagraph[2].textContent = siteContent["main-content"]["services-content"])
const para4 = (middleParagraph[3].textContent = siteContent["main-content"]["product-content"])
const para5 = (middleParagraph[4].textContent = siteContent["main-content"]["vision-content"])
const para6 = (middleParagraph[5].textContent = siteContent["contact"]["address"])
const para7 = (middleParagraph[6].textContent = siteContent["contact"]["phone"])
const para8 = (middleParagraph[7].textContent = siteContent["contact"]["email"])

// let middleImg = document.getElementById('middle-img')
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


//footer starts here

const footerPara = document.querySelectorAll("p");

const paragraph = (footerPara[8].textContent = siteContent["footer"]["copyright"]);