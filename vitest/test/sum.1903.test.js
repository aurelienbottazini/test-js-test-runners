
import sum1903 from '../sum1903.js';
import { expect, test } from 'vitest';

test('adds 90 + 91 to equal 181 + offset 0.6553915341487084', () => {
  expect(sum1903(90, 91)).toBe(181 + 0.6553915341487084);
});
