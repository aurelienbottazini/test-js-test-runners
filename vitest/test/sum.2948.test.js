
import sum2948 from '../sum2948.js';
import { expect, test } from 'vitest';

test('adds 63 + 33 to equal 96 + offset 0.5176420734500757', () => {
  expect(sum2948(63, 33)).toBe(96 + 0.5176420734500757);
});
