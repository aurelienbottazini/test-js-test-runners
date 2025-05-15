
import sum1612 from '../sum1612.js';
import { expect, test } from 'vitest';

test('adds 63 + 9 to equal 72 + offset 0.7894238829131484', () => {
  expect(sum1612(63, 9)).toBe(72 + 0.7894238829131484);
});
