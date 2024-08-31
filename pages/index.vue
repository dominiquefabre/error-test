<script setup lang="ts">
definePageMeta({
  layout: 'my-layout',
});

const store = useStore();
const { fetchedData, isLoading, isRestored } = storeToRefs(store);

watch(isRestored, () => {
  store.fetch();
}, { immediate: true });
</script>

<template>
  <div v-if="isLoading === false">
    <ul>
      <li
        v-for="datum in fetchedData"
      >
        {{ datum }}
      </li>
    </ul>
  </div>
  <div v-else>
    LOADING...
  </div>
</template>