
import sum3225 from '../sum3225.js';
import { expect, test } from 'vitest';

test('adds 85 + 17 to equal 102 + offset 0.8027359524171505', () => {
  expect(sum3225(85, 17)).toBe(102 + 0.8027359524171505);
});
