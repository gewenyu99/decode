<script setup>
import { useCounterStore } from '@/stores/counter'

// access the `store` variable anywhere in the component ✨
const store = useCounterStore()

setTimeout(() => {
  store.increment()
}, 1000)

// ✅ this one will be reactive
// 💡 but you could also just use `store.doubleCount` directly
const doubleValue = computed(() => store.doubleCount)
</script>

<template>
  <p>Count is: {{ store.count }}</p>
</template>
