
import sum1880 from '../sum1880.js';
import { expect, test } from 'vitest';

test('adds 17 + 63 to equal 80 + offset 0.9655726550069453', () => {
  expect(sum1880(17, 63)).toBe(80 + 0.9655726550069453);
});
