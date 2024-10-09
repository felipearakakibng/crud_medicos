<template>
  <div>
    <h1>{{ action }} médico</h1>

    <span>{{ doctor.nome }}</span>
  </div>
</template>

<script setup lang="ts">
  const action = "Adcionar"
  const doctor = {
    nome: NULL,
    crm: NULL,
    estado: NULL,
    situacao: NULL
  }
</script>




<style>
</style>
