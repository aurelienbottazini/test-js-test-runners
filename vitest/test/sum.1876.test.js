
import sum1876 from '../sum1876.js';
import { expect, test } from 'vitest';

test('adds 82 + 26 to equal 108 + offset 0.9878755120382842', () => {
  expect(sum1876(82, 26)).toBe(108 + 0.9878755120382842);
});
