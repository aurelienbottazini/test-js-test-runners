
import sum3451 from '../sum3451.js';
import { expect, test } from 'vitest';

test('adds 6 + 90 to equal 96 + offset 0.1645454005658944', () => {
  expect(sum3451(6, 90)).toBe(96 + 0.1645454005658944);
});
