import delay from "delay";

export const useStore = defineStore(
  'errorTestStore',
  () => {
    const isLoading = ref<boolean|undefined>();
    const isRestored = ref<boolean|undefined>(false);
    const fetchedData = ref<string[] | undefined>();
    const inputData = ref<Record<string, string>>({});

    const fetch = async () => {
      if (!isRestored.value) {
        return;
      }
      isLoading.value = true;
      const { data, error } = await useProxyData<string[] | null>(
        '/test',
        'none',
        inputData.value
      );
      if (error.value) {
        throw showError(error.value as Error);
      }
      if (data.value) {
        fetchedData.value = data.value;
        isLoading.value = false;
      }
    }

    const restoreInputData = async () => {
      await delay(1000);
      inputData.value = { fake: 'data' };
      isRestored.value = true;
    }

    return {
      fetch,
      restoreInputData,
      isLoading,
      isRestored,
      fetchedData
    };
  }
);
