<!-- Template Section -->
<template>
  <section id="produc" class="pricing-section">
    <h2 data-aos="zoom-in-up" data-aos-duration="600">Hosting Basic <span>(BAST SELER)</span></h2>
    <div class="pricing-grid">
      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="600">
        <div class="icons">
          <img src="../assets/image/icon/mc-grass@2x.webp" alt="Grass Block" />
        </div>
        <h3>Paket Grass</h3>
        <div class="specifications">
          <p><i>1GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>8GB SSD</i></p>
        </div>
        <div class="price">15k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Grass"
          >&raquo;</a
        >
      </div>

      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="650">
        <div class="icons">
          <img src="../assets/image/icon/mc-wood@2x.webp" alt="Wood Block" />
        </div>
        <h3>Paket Wood</h3>
        <div class="specifications">
          <p><i>2GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>16GB SSD</i></p>
        </div>
        <div class="price">22k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Wood"
          >&raquo;</a
        >
      </div>

      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="700">
        <div class="icons">
          <img src="../assets/image/icon/mc-stone@2x.webp" alt="Stone Block" />
        </div>
        <h3>Paket Stone</h3>
        <div class="specifications">
          <p><i>3GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>24GB SSD</i></p>
        </div>
        <div class="price">33k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Stone"
          >&raquo;</a
        >
      </div>

      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="750">
        <div class="icons">
          <img src="../assets/image/icon/mc-coal@2x.webp" alt="Coal Block" />
        </div>
        <h3>Paket Coal</h3>
        <div class="specifications">
          <p><i>4GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>32GB SSD</i></p>
        </div>
        <div class="price">41k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Coal"
          >&raquo;</a
        >
      </div>

      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="800">
        <div class="icons">
          <img src="../assets/image/icon/mc-iron@2x.webp" alt="Iron Block" />
        </div>
        <h3>Paket Iron</h3>
        <div class="specifications">
          <p><i>5GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>42GB SSD</i></p>
        </div>
        <div class="price">52k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Iron"
          >&raquo;</a
        >
      </div>

      <div class="pricing-item" data-aos="fade-up-right" data-aos-duration="800">
        <div class="icons">
          <img src="../assets/image/icon/mc-gold@2x.webp" alt="Gold Block" />
        </div>
        <h3>Paket Gold</h3>
        <div class="specifications">
          <p><i>6GB Ram</i></p>
          <p><i>AMD Ryzen 9 3900X</i></p>
          <p><i>48GB SSD</i></p>
        </div>
        <div class="price">64k/mo</div>
        <a
          href="https://api.whatsapp.com/send/?phone=62882003166946&text=Kakk Beli Hostingg Donggg&type=phone_number&app_absent=0"
          class="cta-button"
          aria-label="Beli hosting paket Gold"
          >&raquo;</a
        >
      </div>
    </div>

    <div id="faq" class="faq-container">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <p>Below is a list with most asked questions by our customers.</p>
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
        :class="{ active: faq.active }"
        @click="toggleFaq(index)"
      >
        <div class="faq-question">
          <i class="bi bi-question-circle faq-icon"></i>
          {{ faq.question }}
        </div>
        <i class="bi bi-chevron-down arrow"></i>
        <div class="faq-answer">{{ faq.answer }}</div>
      </div>
    </div>
  </section>
</template>

<!-- Script Section -->
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      faqs: [
        {
          question: "Apakah ada autobackup?",
          answer: "Ya, semua server dilengkapi dengan fitur autobackup.",
          active: false,
        },
        {
          question: "Cpu apa yang digunakan?",
          answer: "Kami, menggunakan CPU AMD Ryzen dan Intel Xeon.",
          active: false,
        },
        {
          question: "Apakah ini shared Hosting?",
          answer:
            "Ya, tetapi Anda jangan kawatir kami telah membagi specifications sesuai server yang kami miliki.",
          active: false,
        },
        {
          question: "Apakah server dapat diperpanjang?",
          answer: "Ya, server dapat diperpanjang kapan saja sesuai kebutuhan.",
          active: false,
        },
        {
          question: "Apakah software server dapat diubah?",
          answer: "Ya, software server bisa diubah sesuai preferensi Anda.",
          active: false,
        },
        {
          question: "Apakah server selalu online 24/7 jam?",
          answer: "Ya, server kami tersedia selama 24 jam setiap harinya.",
          active: false,
        },
      ],
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].active = !this.faqs[index].active;
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<!-- Style Section -->
<style scoped>
/* Hosting Menu Style */
        .pricing-section {
            position: relative;
            text-align: center;
            padding: 100px 0;
            margin-top: 20px;
            top: 100px;
            left: 0;
            gap: 25px;
            height: 100%;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            /*grid-template-columns: repeat(3, 1fr);*/
            gap: 20px;
            width: 85%;
            margin: 0 auto;
        }
        .pricing-section h2 {
            font-family: "Somatic";
            font-size: 2em;
            margin-bottom: 10px;
        }

        .pricing-section span {
            color: #36d88d; /* Warna hijau sesuai gambar */
        }

        .pricing-item {
            background-color: #1f2336;
            padding: 20px;
            border-radius: 10px;
            position: relative;
            transition: transform 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            text-align: left;
        }

        .pricing-item:hover {
            transform: scale(1.05);
        }

        .icon {
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .icon img {
            width: 50px;
            height: 50px;
        }

        .pricing-item h3 {
            font-size: 1.6em;
            margin-bottom: 10px;
            color: #fff;
        }

        .specifications {
            font-size: 0.9em;
            color: #ccc;
            margin-bottom: 15px;
        }

        .price {
            font-size: 1.8em;
            color: #fff;
            margin-top: 10px;
        }

        .order-now {
            font-size: 1.1em;
            color: #36d88d;
            margin-top: 10px;
            text-decoration: none;
            font-weight: bold;
        }

        .order-now:hover {
            text-decoration: underline;
        }

        /* Button style */
        .cta-button {
            background-color: #262A3B;
            color: white;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            bottom: 20px;
            right: 20px;
            font-size: 1.5em;
            width: 50px;
            height: 50px;
            text-align: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .pricing-grid {
                grid-template-columns: 1fr;
            }

            .icon img {
                width: 40px;
                height: 40px;
            }

            .cta-button {
                width: 40px;
                height: 40px;
                font-size: 1.3em;
            }
        }
        
        .faq-container {
            width: 75%;
            position: relative;
            padding: 100px 0;
            top: 20px;
            margin-block: 20px;
            margin: 0 auto;
        }

        .faq-item {
            background-color: #1a1a1d;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 8px;
            border: 1px solid #333;
            position: relative;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .faq-item:hover {
            background-color: #252529;
        }

        .faq-question {
            display: flex;
            align-items: center;
            font-size: 1.1rem;
            font-weight: 600;
        }

        .faq-icon {
            color: #36d88d;
            font-size: 1.5rem;
            margin-right: 10px;
        }

        .arrow {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            transition: transform 0.3s;
            color: #ccc;
        }

        .faq-answer {
            display: none;
            padding-top: 10px;
            color: #ccc;
            font-size: 1rem;
            line-height: 1.2;
        }

        .faq-item.active .faq-answer {
            display: block;
        }

        .faq-item.active .arrow {
            transform: translateY(-50%) rotate(180deg);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            h1 {
                font-size: 2rem;
            }

            .faq-item {
                padding: 10px;
            }

            .faq-question {
                font-size: 1rem;
            }

            .faq-icon {
                font-size: 1.2rem;
            }

            .arrow {
                font-size: 1.2rem;
            }

            .faq-answer {
                font-size: 0.9rem;
            }
        }
        
        .footer {
            position: relative;
            padding: 40px;
            background-color: #1A1A1D;
            top: 150px;
        }

        .footer .logo {
            font-size: 24px;
            font-family: "Somatic";
            font-weight: bold;
            margin-bottom: 10px;
        }
        .footer .logo span {
             color: #36d88d; /* Warna hijau sesuai gambar */
        }

        .footer p {
            color: #bbb;
            font-family: "Comfortaa";
        }

        .social-icons {
            margin-top: 20px;
            margin-bottom: 30px;
        }

        .social-icons a {
            color: white;
            border: 50px;
            font-size: 24px;
            margin-right: 15px;
            text-decoration: none;
            font-family: "Comfortaa";
        }

        .footer-links {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .footer-links div {
            width: 30%;
        }

        .footer-links h5 {
            color: white;
            margin-bottom: 15px;
            font-size: 18px;
            font-family: "Somatic";
        }

        .footer-links ul {
            list-style: none;
            padding: 0;
        }

        .footer-links ul li {
            margin-bottom: 10px;
        }

        .footer-links ul li a {
            color: #bbb;
            text-decoration: none;
            font-family: "Comfortaa";
        }

        .footer-links ul li a:hover {
            color: white;
        }

        .footer .copyright {
            text-align: center;
            color: #bbb;
            border-top: 1px solid #444;
            padding-top: 15px;
            margin-top: 30px;
        }

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
            display: none;
            z-index: 999;
        }

        .scroll-to-top:hover {
            background-color: #36d88d;
        }
</style>
