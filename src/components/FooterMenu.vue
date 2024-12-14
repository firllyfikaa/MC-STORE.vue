<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="logo"><span>MC</span> STORE</div>
          <p>
            The Game Server Co. – Instantly Deploy Dedicated Game Servers in 8 Data Centers on 4 Continents.
            <a href="./404.html">Read More</a>
          </p>
        </div>
        <div class="col-md-6 text-md-end social-icons">
          <a v-for="(icon, index) in socialLinks" :key="index" :href="icon.link" target="_blank">
            <i :class="icon.iconClass"></i>
          </a>
        </div>
      </div>

      <div class="row footer-links">
        <div v-for="(section, index) in footerLinks" :key="index">
          <h5>{{ section.title }}</h5>
          <ul>
            <li v-for="(item, i) in section.links" :key="i">
              <a :href="item.href">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        © ᴄᴏᴘʏʀɪɢʜᴛ ᴍᴄ ꜱᴛᴏʀᴇ 2024
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socialLinks: [
        { link: "https://github.com/firllyfikaa", iconClass: "bi bi-github" },
        { link: "https://www.youtube.com/@FirllyFikaa", iconClass: "bi bi-youtube" },
        { link: "https://www.tiktok.com/@firllyfikaa", iconClass: "bi bi-tiktok" },
      ],
      footerLinks: [
        {
          title: "Company",
          links: [
            { text: "About", href: "#hero" },
            { text: "Blog", href: "#benefits" },
            { text: "Node Status", href: "./404.html" },
          ],
        },
        {
          title: "Services",
          links: [
            { text: "Minecraft Hosting", href: "#produc" },
            { text: "Game Servers", href: "#produc" },
            { text: "Bot Hosting", href: "#produc" },
          ],
        },
        {
          title: "Help",
          links: [
            { text: "Terms of Service", href: "./404.html" },
            { text: "Privacy Policy", href: "./404.html" },
          ],
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 40px;
  background-color: #1a1a1d;
  color: #bbb;
  font-family: "Comfortaa", sans-serif;
}

.footer .logo {
  font-size: 24px;
  font-family: "Somatic", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}

.footer .logo span {
  color: #36d88d;
}

.social-icons a {
  color: white;
  font-size: 24px;
  margin-right: 15px;
  text-decoration: none;
}

.footer-links {
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
}

.footer-links h5 {
  color: white;
  margin-bottom: 15px;
  font-size: 18px;
  font-family: "Somatic", sans-serif;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li a {
  color: #bbb;
  text-decoration: none;
}

.footer-links ul li a:hover {
  color: white;
}

.copyright {
  text-align: center;
  border-top: 1px solid #444;
  padding-top: 15px;
  margin-top: 30px;
}

</style>
