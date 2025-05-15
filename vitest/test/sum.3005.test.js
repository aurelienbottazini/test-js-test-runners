
import sum3005 from '../sum3005.js';
import { expect, test } from 'vitest';

test('adds 30 + 71 to equal 101 + offset 0.005214331607692024', () => {
  expect(sum3005(30, 71)).toBe(101 + 0.005214331607692024);
});
