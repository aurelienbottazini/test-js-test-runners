
import sum4893 from '../sum4893.js';
import { expect, test } from 'vitest';

test('adds 18 + 14 to equal 32 + offset 0.8591918723325128', () => {
  expect(sum4893(18, 14)).toBe(32 + 0.8591918723325128);
});
