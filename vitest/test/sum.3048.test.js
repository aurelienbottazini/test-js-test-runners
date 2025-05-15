
import sum3048 from '../sum3048.js';
import { expect, test } from 'vitest';

test('adds 7 + 1 to equal 8 + offset 0.27651254113463897', () => {
  expect(sum3048(7, 1)).toBe(8 + 0.27651254113463897);
});
