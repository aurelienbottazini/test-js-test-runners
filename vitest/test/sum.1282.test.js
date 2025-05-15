
import sum1282 from '../sum1282.js';
import { expect, test } from 'vitest';

test('adds 32 + 86 to equal 118 + offset 0.5709437263406612', () => {
  expect(sum1282(32, 86)).toBe(118 + 0.5709437263406612);
});
