
import sum3210 from '../sum3210.js';
import { expect, test } from 'vitest';

test('adds 57 + 50 to equal 107 + offset 0.08624851949903556', () => {
  expect(sum3210(57, 50)).toBe(107 + 0.08624851949903556);
});
