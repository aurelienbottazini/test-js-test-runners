
import sum3402 from '../sum3402.js';
import { expect, test } from 'vitest';

test('adds 26 + 74 to equal 100 + offset 0.29058524556782717', () => {
  expect(sum3402(26, 74)).toBe(100 + 0.29058524556782717);
});
