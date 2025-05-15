
import sum2497 from '../sum2497.js';
import { expect, test } from 'vitest';

test('adds 80 + 2 to equal 82 + offset 0.08585451437571445', () => {
  expect(sum2497(80, 2)).toBe(82 + 0.08585451437571445);
});
