
import sum834 from '../sum834.js';
import { expect, test } from 'vitest';

test('adds 20 + 18 to equal 38 + offset 0.8232228524586203', () => {
  expect(sum834(20, 18)).toBe(38 + 0.8232228524586203);
});
