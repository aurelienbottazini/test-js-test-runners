
import sum1740 from '../sum1740.js';
import { expect, test } from 'vitest';

test('adds 8 + 35 to equal 43 + offset 0.3471157651498693', () => {
  expect(sum1740(8, 35)).toBe(43 + 0.3471157651498693);
});
