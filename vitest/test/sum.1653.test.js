
import sum1653 from '../sum1653.js';
import { expect, test } from 'vitest';

test('adds 36 + 98 to equal 134 + offset 0.8005369216124277', () => {
  expect(sum1653(36, 98)).toBe(134 + 0.8005369216124277);
});
