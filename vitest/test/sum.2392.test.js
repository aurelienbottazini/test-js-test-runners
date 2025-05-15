
import sum2392 from '../sum2392.js';
import { expect, test } from 'vitest';

test('adds 63 + 41 to equal 104 + offset 0.8292697801464216', () => {
  expect(sum2392(63, 41)).toBe(104 + 0.8292697801464216);
});
