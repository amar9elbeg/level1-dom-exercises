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

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].style.color = "green";
}

allLinks[0].textContent = siteContent["nav"]["nav-item-1"];
allLinks[1].textContent = siteContent["nav"]["nav-item-2"];
allLinks[2].textContent = siteContent["nav"]["nav-item-3"];
allLinks[3].textContent = siteContent["nav"]["nav-item-4"];
allLinks[4].textContent = siteContent["nav"]["nav-item-5"];
allLinks[5].textContent = siteContent["nav"]["nav-item-6"];

// body starts here

const ctaTitle = document.getElementById("ctaTitle");
ctaTitle.textContent = siteContent["cta"]["h1"];
const ctaButton = document.getElementById("ctaButton");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const features = document.getElementById("features");
features.textContent = siteContent["main-content"]["features-h4"];

const featuresP = document.getElementById("featuresP");
featuresP.textContent = siteContent["main-content"]["features-content"];

const About = document.getElementById("About");
About.textContent = siteContent["main-content"]["about-h4"];

const AboutP = document.getElementById("AboutP");
AboutP.textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const services = document.getElementById("services");
services.textContent = siteContent["main-content"]["services-h4"];

const servicesP = document.getElementById("servicesP");
servicesP.textContent = siteContent["main-content"]["services-content"];

const product = document.getElementById("product");
product.textContent = siteContent["main-content"]["product-h4"];

const productP = document.getElementById("productP");
productP.textContent = siteContent["main-content"]["product-content"];

const vision = document.getElementById("vision");
vision.textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.getElementById("visionP");
visionP.textContent = siteContent["main-content"]["vision-content"];

const contact = document.getElementById("contact");
contact.textContent = siteContent["contact"]["contact-h4"];

const contactP1 = document.getElementById("contactP1");
contactP1.textContent = siteContent["contact"]["address"];

const contactP2 = document.getElementById("contactP2");
contactP2.textContent = siteContent["contact"]["phone"];

const contactP3 = document.getElementById("contactP3");
contactP3.textContent = siteContent["contact"]["email"];

const copyright = document.getElementById("copyright");
copyright.textContent = siteContent["footer"]["copyright"];
//footer starts here
