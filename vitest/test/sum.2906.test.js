
import sum2906 from '../sum2906.js';
import { expect, test } from 'vitest';

test('adds 61 + 65 to equal 126 + offset 0.6127374956191404', () => {
  expect(sum2906(61, 65)).toBe(126 + 0.6127374956191404);
});
