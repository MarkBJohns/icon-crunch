const questions = [
    {
        q: "What are ICON golf carts",
        a: `ICON golf carts are high-performance, street-legal 
        electric vehicles designed for both leisure and utility. 
        They offer a range of features, including customizable 
        options, advanced safety features, and superior warranties. 
        Experience the perfect blend of style and functionality with 
        our ICON models.`
    },
    {
        q: "How can I finance",
        a: `We offer flexible financing options, including 0% 
        financing plans to help you get your dream golf cart. Our team 
        is here to assist you in finding the best financing solution 
        tailored to your needs. Explore our current promotions for even 
        more savings!`
    },
    {
        q: "Can I customize my cart",
        a: `Absolutely! We provide a variety of customization options, 
        including lift kits, premium seating, LED lighting, and advanced 
        sound systems. Our goal is to ensure your golf cart reflects your 
        personal style and meets your specific needs. Let us help you 
        create the perfect ride!`
    },
    {
        q: "What is the warranty",
        a: `Our golf carts come with industry-leading warranties that provide 
        peace of mind and protect your investment. We stand behind the quality 
        of our products, ensuring you receive expectional support throughout 
        your ownership experience. Learn more about our warranty coverage on 
        our dedicated page.`
    },
    {
        q: "Where can I test drive",
        a: `You can schedule a test drive at our showroom, where our knowledgeable 
        staff will guide you through the experience. We encourage you to feel the 
        performance and comfort of our carts firsthand. Visit our contact page to 
        book your appointment today!`
    }
];

const faqContainer = document.getElementById("faq-questions");

for (let i = 0; i < questions.length; i++) {
    const { q, a } = questions[i];
    
    const block = document.createElement("div");
    block.className = "faq-question-block";
    
    const showing = i === 0
        ? "revealed" : "";
    
    block.innerHTML = `
      <div class="faq-question-heading ${showing}">
        <h3 class="faq-question">${q}</h3>
        <span class="faq-question-toggle ${showing}">
          <sup>v</sup>
        </span>
      </div>
      <p class="faq-question-answer ${showing}">${a}</p>
    `
    
    faqContainer.appendChild(block);
}

document.querySelectorAll(`.faq-question-heading`).forEach(heading => {
    heading.addEventListener("click", () => {
        heading.classList.toggle("revealed");
        heading.nextElementSibling.classList.toggle("revealed");
        heading.querySelector(".faq-question-toggle").classList.toggle("revealed")
    });
});