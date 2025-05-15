
import sum4712 from '../sum4712.js';
import { expect, test } from 'vitest';

test('adds 43 + 26 to equal 69 + offset 0.662973833964267', () => {
  expect(sum4712(43, 26)).toBe(69 + 0.662973833964267);
});
