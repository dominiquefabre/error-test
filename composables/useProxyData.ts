import type { NitroFetchRequest } from 'nitropack';

export default async <T>(endpoint: string, transformerName: string, body?: Record<string, any>) => {
  const query = transformerName ? `?transformer=${transformerName}` : '';
  const headers = useRequestHeaders(['cookie']);

  const fetchBody = body ? {
    method: 'POST',
    body: body,
  } as NitroFetchRequest : {};

  const { data, error, refresh }  = await useAsyncData(
    `${endpoint}${query}`,
    () => $fetch<T>(
      `/api/proxy${endpoint}${query}`,
      {
        headers,
        ...fetchBody,
      }
    )
  );

  if (!data.value && !error.value) {
    await refresh();
  }

  return { data, error };
};
