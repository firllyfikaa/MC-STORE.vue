<template>
  <header>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css">
    <nav>
      <div class="logo"><span>MC</span> STORE</div>
      <ul class="menu_items" :class="{ showMenu: menu_toggle }">
        <li><a href="#hero" class="nav_link bi bi-house-door"> Home</a></li>
        <li><a href="#benefits" class="nav_link bi bi-wrench-adjustable-circle"> Service</a></li>
        <li><a href="#software" class="nav_link bi bi-menu-button-wide"> Software</a></li>
        <li><a href="#produc" class="nav_link bi bi-box-seam"> Produc</a></li>
        <li><a href="#faq" class="nav_link bi bi-question-circle"> Faq</a></li>
        <li><a href="#contact" class="nav_link bi bi-telephone"> Contact</a></li>
      </ul>
      <button class="button"
  :class="{ back: buttonText === 'Back' }" id="menu_toggle" type="button" v-on:click="toggleNavbar()">
        {{ buttonText }}
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      buttonText: "Menu",
      menu_toggle: false
    };
  },
  methods: {
    toggleNavbar() {
      this.menu_toggle = !this.menu_toggle;
      this.buttonText = this.menu_toggle ? "Back" : "Menu";
    }
  }
};
</script>

<style>
/* Nav bar and Home */
header {
  background-color: #1a1a1d;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.menu_items {
  display: flex;
  list-style: none;
  gap: 15px;
  transition: all 0.5s ease;
  margin-right: 60px;
}
#menu_toggle {
  display: none;
}
.nav_link {
  font-size: 1rem;
  gap: 2rem;
  color: #ffff;
}
.nav_link:hover {
  color: #36d88d
}
@media (max-width: 860px) {
  #menu_toggle {
    display: block;
  }
  .nav {
    padding: 0 15px;
    background-color: #36d88d;
  }
  .menu_items {
    position: fixed;
    top: -15px;
    left: -100%;
    width: 120px;
    background-color: rgba(0, 0, 0, 0.75);
    height: 100%;
    padding: 60px 40px 40px;
    flex-direction: column;
    transition: all 0.5s ease;
  }
  .showMenu {
    left: 0;
  }
  button {
    background-color: rgba(0, 0, 0, 0.2);
    border: 5px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0px 12px 15px rgba(41, 41, 41, 0.3);
    padding: 6px 6px 6px;
    backdrop-filter: blur(5px);
    color: #eaeaea;
    margin-right: 60px;
    border-radius: 90px;
    width: 100px;
    font-family: "Baloo";
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
 
    /* Hover untuk mengecilkan tombol */
    button:hover {
      transform: scale(0.9);
      background-color: #36d89d;
    }
    
    button.back {
      background-color: rgba(255, 255, 255, 0.2);
      border: 5px solid rgba(0, 0, 0, 0.2);
      color: #000;
    }
    
    button.back:hover {
      transform: scale(1.1);
    }


  .nav_link {
    font-size: 0.9rem;
}
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: transparent;
  width: 100%;
}
nav .logo {
  font-family: "Baloo";
  font-size: 1.6rem;
  color: #fff;
}
nav .logo span {
  color: #36d88d;
}
</style>
