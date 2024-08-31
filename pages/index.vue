<script setup lang="ts">

const store = useStore();
const { fetchedData, isLoading, isClient } = storeToRefs(store);

watch(isClient, () => {
  store.fetch();
});

if (process.client) {
  store.setIsClient();
}

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