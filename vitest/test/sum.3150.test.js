
import sum3150 from '../sum3150.js';
import { expect, test } from 'vitest';

test('adds 80 + 77 to equal 157 + offset 0.9335702531275402', () => {
  expect(sum3150(80, 77)).toBe(157 + 0.9335702531275402);
});
