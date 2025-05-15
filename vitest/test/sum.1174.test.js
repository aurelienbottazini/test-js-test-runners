
import sum1174 from '../sum1174.js';
import { expect, test } from 'vitest';

test('adds 39 + 85 to equal 124 + offset 0.056446872838055495', () => {
  expect(sum1174(39, 85)).toBe(124 + 0.056446872838055495);
});
