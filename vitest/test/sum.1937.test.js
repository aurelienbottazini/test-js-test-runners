
import sum1937 from '../sum1937.js';
import { expect, test } from 'vitest';

test('adds 43 + 2 to equal 45 + offset 0.4911528876314686', () => {
  expect(sum1937(43, 2)).toBe(45 + 0.4911528876314686);
});
