
import sum2632 from '../sum2632.js';
import { expect, test } from 'vitest';

test('adds 86 + 62 to equal 148 + offset 0.11045138508897556', () => {
  expect(sum2632(86, 62)).toBe(148 + 0.11045138508897556);
});
