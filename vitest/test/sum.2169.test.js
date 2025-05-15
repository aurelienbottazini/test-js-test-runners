
import sum2169 from '../sum2169.js';
import { expect, test } from 'vitest';

test('adds 29 + 79 to equal 108 + offset 0.21433671606598814', () => {
  expect(sum2169(29, 79)).toBe(108 + 0.21433671606598814);
});
