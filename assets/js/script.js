const navbar = document.querySelector('.nav-menu');
const login = document.querySelector('.login');
const header = document.querySelector('.header');
const links = document.querySelectorAll('.navbar2 a');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  navbar.classList.remove('active');
};

links.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = 'rgb(33 36 40 / 71%)';
  } else {
    header.style.backgroundColor = 'transparent';
    header.style.backdropFilter = 'none';
  }
});
// scrool smoth 
let link = document.querySelectorAll('.scroll-link');

for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(event) {
    event.preventDefault();

    let target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// input searchButton

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const boxes = document.querySelectorAll(".box");
chek.addEventListener('click', function(){
  alert('sasasasasasa');
})


searchButton.addEventListener("click", function() {
  const filter = searchInput.value.toUpperCase();

  for (const box of boxes) {
    const h3 = box.querySelector("h3");

    if (h3.innerText.toUpperCase().indexOf(filter) > -1) {
      box.style.display = "";
    } else {
      box.style.display = "none";
    }
  }
});

    // <!-- Artikel lainnya -->


searchInput.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  searchButton.click();
}
});


// Variabel untuk menyimpan item cart
let cartItems = [];

// Fungsi untuk menambahkan item ke cart
function addToCart(item) {
cartItems.push(item);
renderCart();
}

// Fungsi untuk menghapus item dari cart
function removeFromCart(index) {
cartItems.splice(index, 1);
renderCart();
}



const item = document.querySelectorAll('.cart-item');










