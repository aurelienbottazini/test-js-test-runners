
import sum3315 from '../sum3315.js';
import { expect, test } from 'vitest';

test('adds 56 + 75 to equal 131 + offset 0.6471025895154061', () => {
  expect(sum3315(56, 75)).toBe(131 + 0.6471025895154061);
});
