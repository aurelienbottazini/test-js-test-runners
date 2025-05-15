
import sum4623 from '../sum4623.js';
import { expect, test } from 'vitest';

test('adds 17 + 26 to equal 43 + offset 0.48838532895434705', () => {
  expect(sum4623(17, 26)).toBe(43 + 0.48838532895434705);
});
