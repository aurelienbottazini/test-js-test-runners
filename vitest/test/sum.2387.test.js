
import sum2387 from '../sum2387.js';
import { expect, test } from 'vitest';

test('adds 47 + 72 to equal 119 + offset 0.6735575712509126', () => {
  expect(sum2387(47, 72)).toBe(119 + 0.6735575712509126);
});
