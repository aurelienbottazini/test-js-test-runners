
import sum1393 from '../sum1393.js';
import { expect, test } from 'vitest';

test('adds 72 + 81 to equal 153 + offset 0.012890626980962994', () => {
  expect(sum1393(72, 81)).toBe(153 + 0.012890626980962994);
});
