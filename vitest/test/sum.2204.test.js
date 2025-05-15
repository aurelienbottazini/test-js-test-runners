
import sum2204 from '../sum2204.js';
import { expect, test } from 'vitest';

test('adds 8 + 44 to equal 52 + offset 0.8190194023402895', () => {
  expect(sum2204(8, 44)).toBe(52 + 0.8190194023402895);
});
