
import sum1586 from '../sum1586.js';
import { expect, test } from 'vitest';

test('adds 10 + 9 to equal 19 + offset 0.14107181542897396', () => {
  expect(sum1586(10, 9)).toBe(19 + 0.14107181542897396);
});
