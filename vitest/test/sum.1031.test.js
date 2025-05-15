
import sum1031 from '../sum1031.js';
import { expect, test } from 'vitest';

test('adds 14 + 36 to equal 50 + offset 0.4917171037729914', () => {
  expect(sum1031(14, 36)).toBe(50 + 0.4917171037729914);
});
