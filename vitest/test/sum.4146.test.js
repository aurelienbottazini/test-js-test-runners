
import sum4146 from '../sum4146.js';
import { expect, test } from 'vitest';

test('adds 2 + 98 to equal 100 + offset 0.19630143764193286', () => {
  expect(sum4146(2, 98)).toBe(100 + 0.19630143764193286);
});
