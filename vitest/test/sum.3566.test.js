
import sum3566 from '../sum3566.js';
import { expect, test } from 'vitest';

test('adds 18 + 44 to equal 62 + offset 0.74724839688301', () => {
  expect(sum3566(18, 44)).toBe(62 + 0.74724839688301);
});
