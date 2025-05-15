
import sum1134 from '../sum1134.js';
import { expect, test } from 'vitest';

test('adds 94 + 15 to equal 109 + offset 0.6322341518362757', () => {
  expect(sum1134(94, 15)).toBe(109 + 0.6322341518362757);
});
