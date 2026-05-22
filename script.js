// =========================
// GALLERY FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if(filterButtons.length > 0){

  filterButtons.forEach(button => {

    button.addEventListener("click", () => {

      // remove active
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      // add active
      button.classList.add("active");

      const filter = button.dataset.filter;

      galleryItems.forEach(item => {

        if(filter === "all"){
          item.style.display = "block";
        }

        else if(item.classList.contains(filter)){
          item.style.display = "block";
        }

        else{
          item.style.display = "none";
        }

      });

    });

  });

}



// =========================
// NAVBAR ACTIVE LINK
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", function(){

    navLinks.forEach(nav => nav.classList.remove("active"));

    this.classList.add("active");

  });

});



// =========================
// SHOP BUTTONS
// =========================

const shopButtons = document.querySelectorAll(".btn");

shopButtons.forEach(button => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.05)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

  });

});



// =========================
// SUBSCRIBE BUTTON
// =========================

const subscribeButton = document.querySelector(".subscribe-btn");

if(subscribeButton){

  subscribeButton.addEventListener("click", () => {

    const emailInput = document.querySelector(".email-input");

    if(emailInput.value === ""){
      alert("Please enter your email");
    }

    else{
      alert("Subscribed Successfully 🎉");
      emailInput.value = "";
    }

  });

}