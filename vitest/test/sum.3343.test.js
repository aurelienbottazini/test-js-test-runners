
import sum3343 from '../sum3343.js';
import { expect, test } from 'vitest';

test('adds 38 + 24 to equal 62 + offset 0.2325671197843242', () => {
  expect(sum3343(38, 24)).toBe(62 + 0.2325671197843242);
});
