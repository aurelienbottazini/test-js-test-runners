
import sum1489 from '../sum1489.js';
import { expect, test } from 'vitest';

test('adds 45 + 44 to equal 89 + offset 0.7132775417369903', () => {
  expect(sum1489(45, 44)).toBe(89 + 0.7132775417369903);
});
