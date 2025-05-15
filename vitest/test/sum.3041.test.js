
import sum3041 from '../sum3041.js';
import { expect, test } from 'vitest';

test('adds 71 + 15 to equal 86 + offset 0.8727115751475203', () => {
  expect(sum3041(71, 15)).toBe(86 + 0.8727115751475203);
});
