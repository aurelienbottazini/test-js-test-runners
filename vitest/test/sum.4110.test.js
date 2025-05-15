
import sum4110 from '../sum4110.js';
import { expect, test } from 'vitest';

test('adds 70 + 37 to equal 107 + offset 0.07014534089729596', () => {
  expect(sum4110(70, 37)).toBe(107 + 0.07014534089729596);
});
