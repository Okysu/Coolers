<template>
  <div id="head">
    <div class="title">
      Coolers
      <div class="smallControl">冷却<div class="subtitle">工坊</div>
      </div>
    </div>
    <div class="desc">
      冷却浮躁、不随大流。
    </div>
    <div class="nav">
      <ul>
        <NuxtLink to="/">
          <li class="firstNav">
            简介
          </li>
        </NuxtLink>
        <NuxtLink to="/team">
          <li>
            成员
          </li>
        </NuxtLink>
        <NuxtLink to="/work">
          <li>
            作品
          </li>
        </NuxtLink>
        <NuxtLink to="/contact">
          <li class="lastNav">
            联系
          </li>
        </NuxtLink>
      </ul>
    </div>
  </div>
  <div id="main">
    <NuxtPage />
  </div>
</template>

<style>
@font-face {
  font-family: 'title';
  font-weight: normal;
  src: url('~/assets/fonts/logoTitle.ttf') format('truetype');
}



body {
  margin: 0;
}

#head {
  position: relative;
  margin: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#head .title {
  width: 100%;
  height: 60px;
  color: #000;
  text-align: center;
  line-height: 50px;
  font-size: 50px;
  font-family: 'title';
}

#head .subtitle {
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #000;
  text-align: center;
  line-height: 50px;
  font-size: 50px;
  font-family: 'title';
  display: inline;
}

#head .subtitle:hover {
  background-color: #fff;
  color: #000;
  transition: color 1s;
  transition: background-color 1s;
}

#head .desc {
  width: 100%;
  height: 30px;
  color: #a0a1a5;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
}

#head .nav {
  height: 50px;
  width: 65%;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
}

#main {
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  position: relative;
}

#head .nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#head .nav ul li {
  float: left;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.firstNav {
  border-radius: 10px 0 0 10px;
}

.lastNav {
  border-radius: 0 10px 10px 0;
}

#head .nav ul li:hover {
  background-color: #a0a1a5;
  transition: background-color 0.5s;
}

.smallControl {
  display: inline;
}


@media only screen and (max-width: 550px) {
  .smallControl {
    display: none;
  }

  #head .nav {
    width: 90%;
  }

  #main .content {
    width: 88%;
  }

}

.router-link-active,
a {
  color: #fff;
  text-decoration: none;
}

h1::before {
  content: "#";
  margin-right: 10px;
  color: #000;
}
</style>