
import sum2798 from '../sum2798.js';
import { expect, test } from 'vitest';

test('adds 36 + 53 to equal 89 + offset 0.01867113298433487', () => {
  expect(sum2798(36, 53)).toBe(89 + 0.01867113298433487);
});
