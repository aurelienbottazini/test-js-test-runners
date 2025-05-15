
import sum1642 from '../sum1642.js';
import { expect, test } from 'vitest';

test('adds 35 + 1 to equal 36 + offset 0.7731585044040188', () => {
  expect(sum1642(35, 1)).toBe(36 + 0.7731585044040188);
});
