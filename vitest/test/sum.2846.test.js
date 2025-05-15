
import sum2846 from '../sum2846.js';
import { expect, test } from 'vitest';

test('adds 53 + 1 to equal 54 + offset 0.591029657315546', () => {
  expect(sum2846(53, 1)).toBe(54 + 0.591029657315546);
});
