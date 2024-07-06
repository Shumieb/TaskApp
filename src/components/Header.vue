<script setup>
</script>

<template>
  <header>
    <h1 class="page-header"><RouterLink to="/">Tasks App</RouterLink></h1>
    <nav class="header-navbar">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 8px 12px;
  margin-bottom: 20px;
  margin-top: 10px;
}

.page-header {
  font-size: 28px;
  padding: 4px;
}

.page-header:hover{
  color: #FFCB9A;
}

.header-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 20px;
  padding: 3px;
}

.header-navbar a:hover {
  color: #FFCB9A;
}
</style>

