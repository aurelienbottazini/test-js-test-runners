
import sum3864 from '../sum3864.js';
import { expect, test } from 'vitest';

test('adds 88 + 77 to equal 165 + offset 0.6915037147609122', () => {
  expect(sum3864(88, 77)).toBe(165 + 0.6915037147609122);
});
