
import sum3357 from '../sum3357.js';
import { expect, test } from 'vitest';

test('adds 29 + 11 to equal 40 + offset 0.3715649916279933', () => {
  expect(sum3357(29, 11)).toBe(40 + 0.3715649916279933);
});
