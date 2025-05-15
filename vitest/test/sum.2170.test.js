
import sum2170 from '../sum2170.js';
import { expect, test } from 'vitest';

test('adds 9 + 97 to equal 106 + offset 0.580149707491088', () => {
  expect(sum2170(9, 97)).toBe(106 + 0.580149707491088);
});
