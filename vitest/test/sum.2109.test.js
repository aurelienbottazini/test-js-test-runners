
import sum2109 from '../sum2109.js';
import { expect, test } from 'vitest';

test('adds 22 + 64 to equal 86 + offset 0.3762044888155762', () => {
  expect(sum2109(22, 64)).toBe(86 + 0.3762044888155762);
});
