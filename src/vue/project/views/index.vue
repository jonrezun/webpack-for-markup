<template>
  <div class="page">
    <div>Hi, i am vue! <span v-if="show">Yes, i am work!</span></div>
    <button @click="show = !show">Check Me</button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data: () => ({
    show: false
  })
};
</script>

<style></style>
