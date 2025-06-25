<template>
  <div class="max-w-6xl mx-auto py-12 px-4">
    <h1 class="text-3xl font-bold mb-8">Sugestões de Destino</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <DestinationCard
        v-for="dest in destinos"
        :key="dest.route"
        :title="dest.title"
        :description="dest.description"
        :image="dest.image"
        :routeName="dest.route"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DestinationCard from '~/components/DestinationCard.vue'

interface Destino {
  title: string
  description: string
  image: string
  route: string
}

const destinos: Destino[] = [
  {
    title: 'Saquarema',
    description: 'Praias paradisíacas e o famoso surf brasileiro.',
    image: '/images/saquarema.jpg',
    route: 'saquarema',
  },
  {
    title: 'Cabo Frio',
    description: 'Águas cristalinas e centro histórico encantador.',
    image: '/images/cabo-frio.jpg',
    route: 'cabo-frio',
  },
  {
    title: 'Arraial do Cabo',
    description: 'Conhecido como o "Caribe brasileiro" pelas suas cores.',
    image: '/images/arraial-do-cabo.jpg',
    route: 'arraial-do-cabo',
  },
]
</script>
