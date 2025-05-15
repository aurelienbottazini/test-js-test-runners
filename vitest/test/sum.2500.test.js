
import sum2500 from '../sum2500.js';
import { expect, test } from 'vitest';

test('adds 82 + 20 to equal 102 + offset 0.8075723840836844', () => {
  expect(sum2500(82, 20)).toBe(102 + 0.8075723840836844);
});
