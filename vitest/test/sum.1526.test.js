
import sum1526 from '../sum1526.js';
import { expect, test } from 'vitest';

test('adds 23 + 47 to equal 70 + offset 0.7199984765309507', () => {
  expect(sum1526(23, 47)).toBe(70 + 0.7199984765309507);
});
