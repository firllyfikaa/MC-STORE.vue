<template>
  <section id="hero" class="hero">
        <div class="hero-content">
            <h1 data-aos="fade-up" data-aos-duration="2200">Welcome Mc Store</h1>
            <p data-aos="fade-up" data-aos-duration="2000">Selamat datang di MC STORE, marii menuju petualangan gaming tanpa batas!!. MC STORE lahir dari keinginan untuk menciptakan pengalaman gaming yang seru bagi para penggemar permainan online di seluruh Indonesia.</p>
            <a href="#benefits" data-aos="zoom-in-up" data-aos-duration="1900" class="cta-btn">Get Started</a>
        </div>
        <img src="../assets/image/bg.png" alt="" class="curveImg" />
  </section>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
section {
  padding: 20px;
  text-align: center;
}
.hero {
    height: 100vh;
    background-image: url('../assets/background.webp');
    background-size: cover;
    background-position: center;
    display: flex;
    top: 0;
    left: 7px;
    margin-left: -15px;;
    justify-content: center;
    align-items: center;
    position: relative;
    object-fit: cover;
}

.hero::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
}

.hero h1 {
    font-family: "Somatic";
    font-size: 1.7rem;
    font-weight: 800;
    text-shadow: 1px 2px 2px #222;
}

.hero p {
    font-family: "Comfortaa", Sans-Serif;
    margin: 20px 0;
    text-shadow: 1px 2px 2px #222;
    font-size: 1rem;
}
.curveImg {
    color: #0b0b0d;
    background-color: rgba(0, 0, 0, 0.0);
    position: absolute;
    bottom: 0;
    width: 100%;
    pointer-events: none;
}
.cta-btn {
    background-color: #36d88d;
    color: white;
    font-family: "Comfortaa";
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 10px;
    font-size: 0.8em;
}

.cta-btn:hover {
    background-color: #223;
    color: #999;
}
</style>
