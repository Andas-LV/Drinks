<template>
  <header>
    <div class="wrapper">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/margarita">Margarita</router-link>
        <router-link to="/mojito">Mojito</router-link>
        <router-link to="/a1">A1</router-link>
        <router-link to="/kir">Kir</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import {RouterLink, RouterView} from "vue-router";
</script>
