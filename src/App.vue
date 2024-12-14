<template>
  <div id="app">
    <HeaderMenu />
    <main>
      <AboutMenu />
      <ProjectsMenu />
      <ContactMenu />
    </main>
    <FooterMenu />
    <!-- Tombol Scroll-to-Top -->
    <div class="scroll-to-top" id="scrollToTopBtn" @click="scrollToTop" :class="{ show: isVisible }">
      <i class="bi bi-arrow-up"></i>
    </div>
  </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
import AboutMenu from './views/AboutMenu.vue';
import ProjectsMenu from './views/ProjectsMenu.vue';
import ContactMenu from './views/ContactMenu.vue';
import FooterMenu from './components/FooterMenu.vue';

export default {
  components: {
    HeaderMenu,
    AboutMenu,
    ProjectsMenu,
    ContactMenu,
    FooterMenu,
  },
  data() {
    return {
      isVisible: false, // Tombol disembunyikan secara default
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan animasi smooth
    },
    handleScroll() {
      this.isVisible = window.scrollY > 200; // Tombol muncul setelah scroll > 200px
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Pantau aktivitas scroll
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Hapus event listener saat komponen dihancurkan
  },
};
</script>

<style>
/* Tambahkan CSS global di sini */
body {
  font-family: Arial, sans-serif;
  background-color: #0b0b0d;
  color: white;
  line-height: 1.6;
}

/* Tombol Scroll-to-Top */
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #36d88d;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.scroll-to-top:hover {
  background-color: #2bc97e;
}

.scroll-to-top.show {
  opacity: 1;
  visibility: visible;
}
</style>
