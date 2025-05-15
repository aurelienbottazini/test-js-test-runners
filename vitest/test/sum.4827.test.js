
import sum4827 from '../sum4827.js';
import { expect, test } from 'vitest';

test('adds 24 + 27 to equal 51 + offset 0.6070134498885377', () => {
  expect(sum4827(24, 27)).toBe(51 + 0.6070134498885377);
});
