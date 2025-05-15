
import sum1947 from '../sum1947.js';
import { expect, test } from 'vitest';

test('adds 83 + 16 to equal 99 + offset 0.019122717457057514', () => {
  expect(sum1947(83, 16)).toBe(99 + 0.019122717457057514);
});
