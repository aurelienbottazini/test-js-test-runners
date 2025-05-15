
import sum1068 from '../sum1068.js';
import { expect, test } from 'vitest';

test('adds 14 + 4 to equal 18 + offset 0.5689458543558196', () => {
  expect(sum1068(14, 4)).toBe(18 + 0.5689458543558196);
});
