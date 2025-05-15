
import sum3271 from '../sum3271.js';
import { expect, test } from 'vitest';

test('adds 55 + 65 to equal 120 + offset 0.6744861040776772', () => {
  expect(sum3271(55, 65)).toBe(120 + 0.6744861040776772);
});
