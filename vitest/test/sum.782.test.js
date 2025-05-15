
import sum782 from '../sum782.js';
import { expect, test } from 'vitest';

test('adds 26 + 65 to equal 91 + offset 0.24504004170044602', () => {
  expect(sum782(26, 65)).toBe(91 + 0.24504004170044602);
});
