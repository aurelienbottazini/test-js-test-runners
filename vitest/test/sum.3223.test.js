
import sum3223 from '../sum3223.js';
import { expect, test } from 'vitest';

test('adds 50 + 55 to equal 105 + offset 0.6444499100790334', () => {
  expect(sum3223(50, 55)).toBe(105 + 0.6444499100790334);
});
