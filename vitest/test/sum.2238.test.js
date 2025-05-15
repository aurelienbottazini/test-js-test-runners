
import sum2238 from '../sum2238.js';
import { expect, test } from 'vitest';

test('adds 97 + 63 to equal 160 + offset 0.8433807550757225', () => {
  expect(sum2238(97, 63)).toBe(160 + 0.8433807550757225);
});
