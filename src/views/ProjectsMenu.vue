<template>
  <section id="benefits" class="features-section">
    <div>
      <h2 data-aos="zoom-in-up" data-aos-duration="600">
        Keuntungan dari <span>MC STORE</span>
      </h2>
      <p data-aos="zoom-in-up" data-aos-duration="700">
        Pelanggan memilih <span>MC STORE</span> karena kami memiliki berbagai macam fitur 
        yang <span>bermanfaat</span> untuk melindungi Anda dari bahaya dunia digital. Kami 
        <span>menjamin</span> bahwa Anda dapat menikmati hosting dengan sangat 
        <span>aman</span> dan nyaman.
      </p>
    </div>
    <div class="features-grid">
      <div 
        v-for="feature in features" 
        :key="feature.id" 
        class="feature-item" 
        data-aos="zoom-in-up" 
        data-aos-duration="600"
      >
        <i :class="feature.icon" class="icon"></i>
        <div class="text-content">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Software Scroll Section -->
   <section id="software" class="game-section">
    <h2 class="line-title">Software Yang <span>Tersedia</span></h2>
    <swiper
      :slides-per-view="'auto'"
      :space-between="15"
      :centered-slides="false"
      grab-cursor
      class="software-carousel"
    >
     <swiper-slide
      v-for="software in softwares"
      :key="software.id"
      :style="{ backgroundImage: `url(${software.image})` }"
      :class="{ active: activeItem === software.id }"
      class="item"
      v-on:click="clickItem(software.id)"
    >
        <div class="item-desc">
          <h3>{{ software.title }}</h3>
          <p>{{ software.description }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>



<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
const minecraftLogo = "../assets/image/Software/minecraft_logo.png";


export default {
  name: "Projects",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      activeItem: null,
      features: [
        { id: 1, title: "Proses Gercep", description: "Dapatkan servermu segera dengan teknologi pengiriman instan kami.", icon: "bi bi-lightning-fill" },
        { id: 2, title: "Kontrol Panel", description: "Bangun server Anda dengan kontrol panel yang mudah digunakan.", icon: "bi bi-wrench-adjustable-circle" },
        { id: 3, title: "Proteksi Ddos", description: "Kami memberikan proteksi DDoS terbaik yang pernah ada di penjuru dunia.", icon: "bi bi-shield-lock-fill" },
        { id: 4, title: "Latensi Rendah", description: "Kami menjamin latensi yang sangat rendah terutama di Indonesia.", icon: "bi bi-speedometer2" },
        { id: 5, title: "Hardware Gacor", description: "Kami menawarkan kinerja terbaik berkat perangkat keras premium kami.", icon: "bi bi-cpu-fill" },
        { id: 6, title: "Bantuan Cepat", description: "Selesaikan semua masalah dan pertanyaan dengan tim profesional kami.", icon: "bi bi-headset" },
      ],
      softwares: [
  { id: 1, title: "Minecraft Vanilla", description: "Minecraft Software Untuk Server Bedrock Vanilla.", image: new URL("../assets/image/Software/minecraft_logo.png", import.meta.url).href,
 },
  { id: 2, title: "Pocketmine MP", description: "Minecraft Software Untuk Server Bedrock Plugins.", image: new URL("../assets/image/Software/pocketmine_logo.png", import.meta.url).href,
 },
  { id: 3, title: "Paper MC", description: "Minecraft Software Untuk Server Java Plugins.", image: new URL("../assets/image/Software/papermc_logo.png", import.meta.url).href, },
  { id: 4, title: "Terraria", description: "Terraria Software Untuk Server Terraria.", image: new URL("../assets/image/Software/terraria_logo.png", import.meta.url).href, },
  { id: 5, title: "Node Js", description: "Node Software Untuk Node Js.", image: new URL("../assets/image/Software/nodejs.png", import.meta.url).href, },
  { id: 6, title: "Python", description: "Node Software Untuk Node Python.", image: new URL("../assets/image/Software/python.png", import.meta.url).href,
 },
    ],
    };
  },
  methods: {
  clickItem(id) {
    this.activeItem = this.activeItem === id ? null : id;
  }
}
};
</script>

<style scoped>
.features-section {
  text-align: center;
  padding: 100px 25px;
}
.features-section h2 {
    font-family: "Somatic";
    font-size: 18px;
    margin-bottom: 10px;
}

.features-section span {
    color: #36d88d; /* Warna hijau sesuai gambar */
}

.features-section p {
    font-size: 12px;
    font-family: "Comfortaa";
    line-height: 1.5;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.feature-item {
  background-color: #1a1a1d;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: transform 0.8s;
}

.feature-item:hover {
  transform: scale(-2);
}

.icon {
  font-size: 2.5em;
  color: #36d88d;
  margin-right: 15px;
}

.text-content h3 {
  font-size: 1.3em;
  color: #36d88d;
  margin-bottom: 10px;
}

.text-content p {
  font-size: 1em;
  color: #ccc;
}

/* Swiper Styles */
.software-carousel {
  margin: 20px 0;
}
.item {
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.item:hover {
  transform: scale(1.05);
}

.item-desc {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  text-align: left;
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr; /* Menampilkan 1 kolom pada layar kecil */
    }

    .feature-item {
        flex-direction: column; /* Menumpuk teks dan ikon di atas */
        text-align: center; /* Teks rata tengah */
    }

    .icons {
        object-fit: cover;
        width: 120px;
       /* background-size: cover;*/
        margin-left: 70%; /* Hilangkan margin kiri saat di mobile */
        margin-top: 10px; /* Tambahkan margin atas pada ikon di mobile */
    }
}

/* -------- Software menu style ------- */
.swiper-wrapper {
  justify-content: flex-start; /* Pastikan konten mulai dari kiri */
}

.line-title {
  position: relative;
  width: 200px;
}
.game-section h2 {
  font-family: "Somatic";
  font-size: 1.8em;
  margin-bottom: 10px;
}
.game-section h3 {
  font-family: "Somatic";
  font-size: 1rem;
  margin-bottom: 10px;
}
.game-section p {
  font-family: "Comfortaa";
  font-size: 0.6rem;
  margin-bottom: 10px;
}
.game-section span {
   color: #36d88d; /* Warna hijau sesuai gambar */
}
.line-title::before,
.line-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  border-radius: 2px;
}
.line-title::before {
  width: 23px;
  background: #f2f2f2;
}
.line-title::after {
  width: 100%;
  background: #36d88d;
}

/******* Middle section CSS Start ******/
/* -------- Landing page ------- */
.game-section {
  padding: 100px 50px;
}
.game-section .owl-stage {
  margin: 15px 0;
  display: flex;
  display: -webkit-flex;
}
.game-section .item {
  filter: grayscale(1);
  clip-path: polygon(0.9rem 0, 100% 0, calc(100% - 0.9rem) 100%, 0 100%);
  margin: 0 20px 60px;
  gap: 0px;
  width: 320px;
  height: 400px;
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  background: #343434 no-repeat center center / cover;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.game-section .item:hover {
  filter: grayscale(0);
}
.game-section .item.active {
  filter: grayscale(0);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  width: 500px;
  box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 12px 40px 40px rgba(0, 0, 0, 0.25);
}
.game-section .item:after {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.game-section .item-desc {
  padding: 0 24px 12px;
  color: #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transform: translateY(calc(100% - 54px));
  -webkit-transform: translateY(calc(100% - 54px));
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.game-section .item.active .item-desc {
  transform: none;
  -webkit-transform: none;
}
.game-section .item-desc p {
  opacity: 0;
  -webkit-transform: translateY(32px);
  transform: translateY(32px);
  transition: all 0.4s ease-in-out 0.2s;
  -webkit-transition: all 0.4s ease-in-out 0.2s;
}
.game-section .item.active .item-desc p {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}
.game-section .owl-theme.custom-carousel .owl-dots {
  margin-top: 0px;
  position: relative;
  z-index: 5;
}
/******** Middle section CSS End *******/

/***** responsive css Start ******/

@media (min-width: 992px) and (max-width: 1199px) {
  h2 {
    margin-bottom: 32px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 32px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 50px 30px;
  }
  .game-section .item {
    margin: 0 12px 60px;
    width: 260px;
    height: 360px;
  }
  .game-section .item.active {
    width: 400px;
  }
  .game-section .item-desc {
    transform: translateY(calc(100% - 46px));
    -webkit-transform: translateY(calc(100% - 46px));
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  h2 {
    margin-bottom: 32px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 24px;
    line-height: 32px;
  }
  .line-title {
    width: 330px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 50px 30px 40px;
  }
  .game-section .item {
    margin: 0 12px 60px;
    width: 240px;
    height: 330px;
  }
  .game-section .item.active {
    width: 360px;
  }
  .game-section .item-desc {
    transform: translateY(calc(100% - 42px));
    -webkit-transform: translateY(calc(100% - 42px));
  }
}

@media (max-width: 767px) {
  body {
    font-size: 14px;
  }
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin: 0 0 8px;
    font-size: 19px;
    line-height: 24px;
  }
  .line-title {
    width: 250px;
  }

  /* -------- Landing page ------- */
  .game-section {
    padding: 100px 15px 20px;
  }
  .game-section .item {
    margin: 0 10px 40px;
    width: 200px;
    height: 280px;
  }
  .game-section .item.active {
    width: 270px;
    box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 6px 10px 10px rgba(0, 0, 0, 0.25);
  }
  .game-section .item-desc {
    padding: 0 14px 5px;
    transform: translateY(calc(100% - 42px));
    -webkit-transform: translateY(calc(100% - 42px));
  }
}
</style>
