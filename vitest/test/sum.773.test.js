
import sum773 from '../sum773.js';
import { expect, test } from 'vitest';

test('adds 94 + 10 to equal 104 + offset 0.006985296866267032', () => {
  expect(sum773(94, 10)).toBe(104 + 0.006985296866267032);
});
