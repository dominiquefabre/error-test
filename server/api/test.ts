import delay from 'delay';
import type { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
  await delay(1500);

  if (false) {
    throw createError({
      statusCode: 511,
      statusMessage: 'Fuck'
    });
  }

  return [ 'some', 'fetched', 'data' ]
});
