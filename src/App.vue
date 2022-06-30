<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Ferienreservation">Ferienreservation</router-link>  |
    <router-link to="/reservations">Reservations</router-link> |
  </nav>
  <router-view/>
</template>

<style lange="sass"> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 img {
  width: 200px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ff2d2d;
}

button {
  border-bottom: 2px solid #ff2d2d;
  background-color: #ff2d2d;
  border: none;
  color: white;
  border-radius: 1.2em;
  padding: 0.4em;
  margin: 1em;
}
input[type="text"],input[type="date"], select {
  padding: 0.4em;
  border: none;
  border-bottom: 2px solid #000000;
  font: inherit;
}
label {
  text-align:  right;
}
label::after {
  content: ":";
}
</style>

