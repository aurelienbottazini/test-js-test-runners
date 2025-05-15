
import sum1864 from '../sum1864.js';
import { expect, test } from 'vitest';

test('adds 95 + 14 to equal 109 + offset 0.7486428526129685', () => {
  expect(sum1864(95, 14)).toBe(109 + 0.7486428526129685);
});
