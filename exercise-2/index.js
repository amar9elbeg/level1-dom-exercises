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

allLinks[0].style.color = "green";
allLinks[1].style.color = "green";
allLinks[2].style.color = "green";
allLinks[3].style.color = "green";
allLinks[4].style.color = "green";
allLinks[5].style.color = "green";


const link1 = (allLinks[0].textContent = siteContent["nav"]["nav-item-1"]);
const link2 = (allLinks[1].textContent = siteContent["nav"]["nav-item-2"]);
const link3 = (allLinks[2].textContent = siteContent["nav"]["nav-item-3"]);
const link4 = (allLinks[3].textContent = siteContent["nav"]["nav-item-4"]);
const link5 = (allLinks[4].textContent = siteContent["nav"]["nav-item-5"]);
const link6 = (allLinks[5].textContent = siteContent["nav"]["nav-item-6"]);
// body starts here
const ctaImg = document.getElementById("cta-img")
const ctaTitle = document.getElementById("ctaTitle")
let middleImg = document.getElementById("middle-img")
const ctaButton = document.getElementById("ctaButton")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

ctaTitle.textContent = siteContent["cta"]["h1"]

ctaButton.textContent = siteContent["cta"]["button"]

middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

//footer starts here
main-Content.textContent = siteContent["cta"]["h1"]