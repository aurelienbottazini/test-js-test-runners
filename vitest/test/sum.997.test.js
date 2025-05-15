
import sum997 from '../sum997.js';
import { expect, test } from 'vitest';

test('adds 49 + 10 to equal 59 + offset 0.15566745497342627', () => {
  expect(sum997(49, 10)).toBe(59 + 0.15566745497342627);
});
