
import sum1295 from '../sum1295.js';
import { expect, test } from 'vitest';

test('adds 28 + 98 to equal 126 + offset 0.06678255148571965', () => {
  expect(sum1295(28, 98)).toBe(126 + 0.06678255148571965);
});
