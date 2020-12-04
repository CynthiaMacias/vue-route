<template>
  <div id="app" class="container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link>
    </div> -->
      <b-container>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }" exact>Home</b-nav-item>
            <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
            <b-nav-item :to="{ name: 'services' }">Services</b-nav-item>
            <b-nav-item :to="{ name: 'grid' }">Grid</b-nav-item>
            <b-nav-item :to="{ name: 'card' }">Card</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
      </b-container>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
