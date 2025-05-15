
import sum3656 from '../sum3656.js';
import { expect, test } from 'vitest';

test('adds 71 + 6 to equal 77 + offset 0.9645970248750245', () => {
  expect(sum3656(71, 6)).toBe(77 + 0.9645970248750245);
});
