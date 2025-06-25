<template>
  <div
    class="cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
    @click="goToPage"
  >
    <img :src="image" alt="Destino" class="w-full h-48 object-cover" />
    <div class="p-4 bg-white">
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

interface Props {
  title: string
  description: string
  image: string
  routeName: string
}

const props = defineProps<Props>()
const router = useRouter()

function goToPage() {
  router.push({ name: props.routeName })
}
</script>
