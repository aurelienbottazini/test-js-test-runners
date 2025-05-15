
import sum1486 from '../sum1486.js';
import { expect, test } from 'vitest';

test('adds 74 + 69 to equal 143 + offset 0.6668799705175408', () => {
  expect(sum1486(74, 69)).toBe(143 + 0.6668799705175408);
});
