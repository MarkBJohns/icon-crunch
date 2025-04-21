const reviews = [
    {
        name: "Ed Rizor",
        profile: "https://lh3.googleusercontent.com/a/ACg8ocI3TNGGn-iFd6v5n_8wGAsrB5nuJcsgjCtHnCPP88YQHdg4mg=w75-h75-p-rp-mo-br100",
        content: `JP was great working with! He was responsive and texted me  pictures, a cost sheet and did everything he said he would. The service was amazing & the Icon is a great golf cart. I would recommend anyone looking to buy a golf cart to contact JP at Icon Golf Carts of Tampa Bay for a smooth and easy purchase!!!`,
        link: "https://g.co/kgs/Qi4Ah4c"
    },
    {
        name: "Greg Hawker",
        profile: "https://lh3.googleusercontent.com/a-/ALV-UjX91FgOb_WmMYoSH9SwgqbpAJfZk_UcGZQi7Zk_8qofO2xnggw=w75-h75-p-rp-mo-br100",
        content: `I felt the need to write a second review about Keith and JP at Tampa Bay Carts. I bought my cart several months ago and live two hours away. I've had some questions and learning curve stuff along the way. Every time I reach out they are happy to help and trouble shoot me. I can't say enough about these guys. First class all the way.`,
        link: "https://g.co/kgs/R4ZmTE9"
    },
    {
        name: "Norma Miller",
        profile: "https://lh3.googleusercontent.com/a/ACg8ocLYDtokjHeI2jLVO-_AuMIzkH-JGbNmLRGa1ze__YwNep3ehQ=w75-h75-p-rp-mo-br100",
        content: `I love my golf cart from ICON golf carts! Jimmy and Penny were very helpful and friendly! I  almost bought one somewhere else and I am so glad I waited and checked out these! Mine has everything on it! Nice speaker and light system! Nice seats, a back up camera, digital speedometer, charging unit on board, fold down backseat, shoulder seat belts for my granddaughter! The process was simple and they delivered in two days! It seems to be made really well! I would say they are the Cadillac of golf carts!  If you want a golf cart, I would recommend going to see them!`,
        link: "https://g.co/kgs/GwsVXo4"
    },
    {
        name: "Robert Spoto",
        profile: "https://lh3.googleusercontent.com/a-/ALV-UjVNsAc3Fs48w-H5yVmsAH9uXl6zA7fAll8u28t8yXnuZr6JMHgncw=w75-h75-p-rp-mo-ba3-br100",
        content: `I would definitely refer anybody including my family to this golf cart store. The owners Jimmy and Keith are very professional very nice and they are just Pleasant to be around. The golf carts are absolutely gorgeous they have all different kinds lowered lifted they come with sound bars LED lights rear backup cameras and anything else you would like to add on to it. They deliver your cart and the carts are priced to sell. If you're looking for a golf cart icon golf carts is definitely the place to go.`,
        link: "https://g.co/kgs/XEM9so6"
    },
    {
        name: "Don-Olga Petersen",
        profile: "https://lh3.googleusercontent.com/a/ACg8ocKzJljXzoI-QpVUzm9yOfHO_YYC3irFv0QO1Afeclp4ddsOhQ=w75-h75-p-rp-mo-ba2-br100",
        content: `We had been looking for the perfect the golf cart for quite a while, visited practically every dealer within a 30 mile radius. After stopping into Icon Golf Cart of Tampa Bay., we knew we’d found not only the best dealer, but also the most incredible customer service ever! Jimmy walked us around the dealership and answered every question we had with professionalism, kindness, and a smile. Immediately, we not only knew that we would buy from them, but also that we would be taken care of way beyond the sale.

        It has been a few weeks since we purchased, we have nothing but appraise for the staff and owners of this incredible establishment! Jimmy has stayed in touch with us to make sure everything is good, and that we are happy; I can’t stress enough how wonderful our experience has been, and how exceptional every step of the process was!

        We 100% percent recommend them and wish them years of success! If you are in the market for a golf cart, I promise that you will not be disappointed by choosing Icon Golf Carts of Tampa Bay!!! Ask for Jimmy Alexander, he’s the best!`,
        link: "https://g.co/kgs/3rvv5JT"
    },
    {
        name: "Wyatt Christie",
        profile: "https://lh3.googleusercontent.com/a/ACg8ocLhOE-5xa859I0Y65nZaVucuO5v4MPU4XIzN7tAAqmiN8KGPA=w75-h75-p-rp-mo-ba2-br100",
        content: `1st and foremost let me say how amazing, kind and courteous Jimmy and his wife Penny are!!! Amazing people and an amazing product... We could not be happier with our purchase ICON I60L Golf Cart... I was able to pick what I thought was an amazing color/seat combo for my wife...As it sat on their showroom floor it sold twice before I was able to take delivery...I feel like we have made life long friendship with the dealership as well as the people... Keith delivered the cart and was nothing but professional... I wish everyone's experience could go as well as ours... Jimmy thank you for taking the time to personally wire the cart with the utmost professionalism and class... We look forward to a long friendship`,
        link: "https://g.co/kgs/HetY84o"
    }
];

const container = document.getElementById("reviews-content");

reviews.forEach(({ name, profile, content, link }) => {
    const card = document.createElement("div");
    card.className = "review-card";
    
    card.innerHTML = `
      <img class="review-stars" src="./imgs/5-stars-pink.svg" alt="" aria-hidden="true" />
      <p class="review-content">${content}</p>
      <div class="review-author">
        <a href="${link}" target="_blank" class="review-link">
          <img class="review-profile" src="${profile}" alt="" aria-hidden="true" />
          <span class="review-name">${name}</span>
        </a>
        <span class="review-toggle">See More</span>
      </div>
    `;
    
    const contentElement = card.querySelector(".review-content");
    const toggleElement = card.querySelector(".review-toggle");
    
    toggleElement.addEventListener("click", () => {
        const expanded = contentElement.classList.toggle("full");
        toggleElement.textContent = expanded ? "See Less" : "See More";
        toggleElement.classList.toggle("active");
    });
    
    container.appendChild(card);
});