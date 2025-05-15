
import sum157 from '../sum157.js';
import { expect, test } from 'vitest';

test('adds 25 + 75 to equal 100 + offset 0.2258537690574477', () => {
  expect(sum157(25, 75)).toBe(100 + 0.2258537690574477);
});
