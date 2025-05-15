
import sum2081 from '../sum2081.js';
import { expect, test } from 'vitest';

test('adds 31 + 23 to equal 54 + offset 0.3245090398427106', () => {
  expect(sum2081(31, 23)).toBe(54 + 0.3245090398427106);
});
