
import sum1457 from '../sum1457.js';
import { expect, test } from 'vitest';

test('adds 75 + 47 to equal 122 + offset 0.7803638561920491', () => {
  expect(sum1457(75, 47)).toBe(122 + 0.7803638561920491);
});
