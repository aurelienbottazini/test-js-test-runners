
import sum3858 from '../sum3858.js';
import { expect, test } from 'vitest';

test('adds 48 + 10 to equal 58 + offset 0.1110262254557135', () => {
  expect(sum3858(48, 10)).toBe(58 + 0.1110262254557135);
});
