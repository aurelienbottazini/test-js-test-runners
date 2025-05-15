
import sum3930 from '../sum3930.js';
import { expect, test } from 'vitest';

test('adds 73 + 8 to equal 81 + offset 0.8377596714732056', () => {
  expect(sum3930(73, 8)).toBe(81 + 0.8377596714732056);
});
