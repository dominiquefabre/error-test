export const useStore = defineStore(
  'errorTestStore',
  () => {
    const isLoading = ref<boolean|undefined>();
    const isClient = ref<boolean|undefined>(false);
    const fetchedData = ref<string[] | undefined>();

    const fetch = async () => {
      if (!isClient.value) {
        return;
      }
      isLoading.value = true;
      const { data, error } = await useAsyncData(
        'yolo',
        () => $fetch<string[]>(
          `/api/test`,
          {
            method: 'POST',
            body: {
              fake: 'data',
            },
          }
        ),
      );
      if (error.value) {
        throw showError(error.value as Error);
      }
      if (data.value) {
        fetchedData.value = data.value;
        isLoading.value = false;
      }
    }

    const setIsClient = () => {
      isClient.value = true;
    }

    return {
      fetch,
      setIsClient,
      isLoading,
      isClient,
      fetchedData
    };
  }
);
