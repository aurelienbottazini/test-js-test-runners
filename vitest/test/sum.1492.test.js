
import sum1492 from '../sum1492.js';
import { expect, test } from 'vitest';

test('adds 17 + 27 to equal 44 + offset 0.5354567629958336', () => {
  expect(sum1492(17, 27)).toBe(44 + 0.5354567629958336);
});
